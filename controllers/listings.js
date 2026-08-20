const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const Listing = require("../models/listing");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mapToken ? mbxGeocoding({ accessToken: mapToken }) : null;

module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
};

module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res, next) => {
    try {
        let { id } = req.params;
        const listing = await Listing.findById(id)
            .populate({
                path: "reviews",
                populate: { path: "author" }
            })
            .populate("owner");

        if (!listing) {
            req.flash("error", "Listing you requested for does not exist!");
            return res.redirect("/listings");
        }

        if (listing.reviews && Array.isArray(listing.reviews)) {
            listing.reviews = listing.reviews.filter(r => r != null);
        }

        res.render("listings/show.ejs", { listing, mapToken: mapToken || "" });
    } catch (err) {
        console.error("SHOW LISTING DETAILED ERROR:", err);
        next(err);
    }
};

module.exports.createListing = async (req, res, next) => {
    let response;
    if (geocodingClient && req.body.listing?.location) {
        try {
            response = await geocodingClient
                .forwardGeocode({
                    query: req.body.listing.location,
                    limit: 1,
                })
                .send();
        } catch (e) {
            console.error("Geocoding error:", e);
        }
    }

    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;

    if (req.file) {
        let url = req.file.path;
        let filename = req.file.filename;
        newListing.image = { url, filename };
    }

    if (response && response.body && response.body.features && response.body.features.length > 0) {
        newListing.geometry = response.body.features[0].geometry;
    } else {
        newListing.geometry = { type: 'Point', coordinates: [77.2090, 28.6139] };
    }

    let savedListing = await newListing.save();

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;

    const listing = await Listing.findById(id);

    if (!listing) {
        req.flash("error", "Listing you requested for does not exist!");
        return res.redirect("/listings");
    }

    let originalImageUrl = listing.image?.url || "";
    if (originalImageUrl.includes("/upload")) {
        originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
    }

    res.render("listings/edit.ejs", { listing, originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
    let { id } = req.params;

    let listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { new: true }
    );

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;

        listing.image = { url, filename };
        await listing.save();
    }

    req.flash("success", "Listing Updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;

    let deletedListing = await Listing.findByIdAndDelete(id);

    req.flash("success", "Listing Deleted!");
    res.redirect("/listings");
};