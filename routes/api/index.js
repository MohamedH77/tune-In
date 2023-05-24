const router = require("express").Router()

const userRoutes = require("./userRoutes")
const thoughtRoutes = require("./thoughtRoutes")
const friendRoutes = require("./addFriendRoutes")
const deleteRoutes = require("./deleteRoutes")

router.use("/user", userRoutes);
router.use("/thought", thoughtRoutes);
router.use("/friend", friendRoutes);
router.use("/delete", deleteRoutes);


module.exports = router
