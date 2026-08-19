const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn, isReviewAuther } = require("../middleware.js");

const reviewControllers = require("../controllers/reviews.js");
const review = require("../models/review.js");

//Post Route
router.post("/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewControllers.createReview)
);

//Delete Reviews Route
router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuther,
    wrapAsync(reviewControllers.destroyReview));

module.exports = router;