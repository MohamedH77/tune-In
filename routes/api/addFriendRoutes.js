const router = require("express").Router();
const {
  getAllFriend,
  getFriendById,
} = require("../../controllers/friendController");


router.get('/', getAllFriend); // GET /api/friend
router.get('/:id', getFriendById); // GET /api/friend/:id



router.post("/add", async (req, res) => {
  console.log("POST /friend/add");
  try {
    const newFriend = await Friend.create(req.body);
    console.log("New friend added:", newFriend);
    res.status(201).json({ status: "success", payload: newFriend });
  } catch (err) {
    console.error("Error adding friend:", err);
    res.status(500).send({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  console.log(`DELETE /friend/${req.params.id}`);
  try {
    const removedFriend = await Friend.findByIdAndRemove(req.params.id);
    console.log("Friend removed:", removedFriend);
    if (removedFriend) {
      res.status(200).json({ status: "success", payload: removedFriend });
    } else {
      res.status(404).send({ error: "Friend not found" });
    }
  } catch (err) {
    console.error("Error removing friend:", err);
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
