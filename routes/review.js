const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuther } = require("../appMiddleware.js");

const reviewControllers = require("../controllers/reviews.js");

router.post("/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewControllers.createReview)
);

router.put("/:reviewId",
    isLoggedIn,
    validateReview,
    isReviewAuther,
    wrapAsync(reviewControllers.updateReview)
);

router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuther,
    wrapAsync(reviewControllers.destroyReview)
);

module.exports = router;
