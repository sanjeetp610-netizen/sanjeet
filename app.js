if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const connectMongo = require("connect-mongo");
const MongoStore = connectMongo.create ? connectMongo : (connectMongo.default || connectMongo);
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const Listing = require("./models/listing.js");
const seedData = require("./init/data.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

// const { getMaxListeners } = require("cluster");

// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust"; //local DB
const dbUrl = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/wanderLust";

main()
    .then(async () => {
        console.log("connected to DB is successful");
        await addMissingSampleListings();
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(dbUrl);
}

// Adds only sample listings that are not already in the database. This lets a
// new deployment pick up seed-data additions without deleting user content.
async function addMissingSampleListings() {
    const titles = seedData.data.map((listing) => listing.title);
    const existingTitles = await Listing.distinct("title", {
        title: { $in: titles },
    });
    const existingTitleSet = new Set(existingTitles);
    const missingListings = seedData.data
        .filter((listing) => !existingTitleSet.has(listing.title))
        .map((listing) => ({
            ...listing,
            geometry: listing.geometry || {
                type: "Point",
                coordinates: [77.2090, 28.6139],
            },
        }));

    if (missingListings.length > 0) {
        await Listing.insertMany(missingListings);
        console.log(`added ${missingListings.length} missing sample listings`);
    }
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const secret = process.env.SECRET || "mysupersecretcode";

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: secret,
    },
    touchAfter: 24 * 3600,
});

store.on("error", (err) => {
    console.log("ERROR in MONGO SESSION STORE", err);
});

const sessionOptions = {
    store,
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    res.locals.mapToken = process.env.MAP_TOKEN || "";
    next();
});

app.get("/", (req, res) => {
    res.redirect("/listings");
});

//=======>>>>>>>>>>>>>>> USE OF DIFFERENT ROUTERS

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter);
app.use("/", userRouter);

// Express 5 requires a named wildcard parameter for catch-all routes.
app.all("/{*path}", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

//Middleware
app.use((err, req, res, next) => {
    let { statusCode = 500, message = "something went wrong!" } = err;
    console.error("SERVER ERROR LOG:", err);
    res.status(statusCode).render("error.ejs", { message: err.message || message });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`server is listening to port ${port}`);
});
