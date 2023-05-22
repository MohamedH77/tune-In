const router = require("express").Router();
const { getAllThoughts, getThoughtById, createThought, updateThoughtById,} = require("../../controllers/ThoughtController");
const { updateUserById } = require("../../controllers/userController");

// ======== User Routes ========================

router.get("/thought", async (req, res) => {
  try {
    const thoughts = await getAllThoughts();
    res.json({ status: "success", payload: thoughts });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.get("/thought/:id", async (req, res) => {
  try {
    const thought = await getThoughtById(req.params.id);
    res.json({ status: "success", payload: thought });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Here we create a new Thought, and associate that new Thought with
// the user who created it. We assume in this case that the user's
// id is provided in req.body

router.post("/thought", async (req, res) => {
  try {
    const newThought = await createThought(req.body);
    const updatedUser = await updateUserById(req.body.userId, {
      Thought: newThought._id,
    });
    res
      .status(200)
      .json({ status: "success", Thought: newThought, updatedUser });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Update a thought by ID
router.put("/thought/:id", async (req, res) => {
  try {
    const updatedThought = await updateThoughtById(req.params.id, req.body);
    res.json({ status: "success", payload: updatedThought });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});


module.exports = router;
