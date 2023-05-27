const router = require("express").Router()

const userRoutes = require("./userRoutes")
const thoughtRoutes = require("./thoughtRoutes")
const friendRoutes = require("./addFriendRoutes")


router.use("/user", userRoutes);
router.use("/thought", thoughtRoutes);
router.use("/friend", friendRoutes);



module.exports = router
