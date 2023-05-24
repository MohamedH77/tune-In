const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
} = require("../../controllers/thoughtController");
const { updateUserById } = require("../../controllers/userController");
const Thought = require("../../models/Thought");

// ======== User Routes ========================

router.get("/", async (req, res) => {
  console.log("GET /thought");
  try {
    const thoughts = await getAllThoughts();
    console.log("Thoughts retrieved:", thoughts);
    res.json({ status: "success", payload: thoughts });
  } catch (err) {
    res.status(500).send({err});
  }
});

router.get("/thought/:id", async (req, res) => {
  console.log(`GET /thought/${req.params.id}`);
  try {
    const thought = await getThoughtById(req.params.id);
    console.log("Thought retrieved:", thought);
    res.json({ status: "success", payload: thought });
  } catch (err) {
    res.status(500).send({err});
  }
});

router.post("/thought", async (req, res) => {
  console.log("POST /thought");
  try {
    const newThought = await createThought(req.body);
    console.log("New thought created:", newThought);
    const updatedUser = await updateUserById(req.body.userId, {
      Thought: newThought._id,
    });
    console.log("User updated:", updatedUser);
    res
      .status(200)
      .json({ status: "success", Thought: newThought, updatedUser });
  } catch (err) {
    res.status(500).send({err});
  }
});

router.put("/thought/:id", async (req, res) => {
  console.log(`PUT /thought/${req.params.id}`);
  try {
    const updatedThought = await updateThoughtById(req.params.id, req.body);
    console.log("Thought updated:", updatedThought);
    res.json({ status: "success", payload: updatedThought });
  } catch (err) {
    res.status(500).send({err});
  }
});


// POST /thoughts/:thoughtId/reactions
router.post("/:thoughtId/reactions", async (req, res) => {
  const { thoughtId } = req.params;
  const { reaction } = req.body;

  try {
    const thought = await Thought.findById(thoughtId);

    if (!thought) {
      return res.status(404).json({ error: "Thought not found" });
    }

    thought.reactions.push(reaction);
    const updatedThought = await thought.save();

    res.status(201).json({ status: "success", payload: updatedThought });
  } catch (error) {
    console.error("Error creating reaction:", error);
    res.status(500).json({ error: "Error creating reaction" });
  }
});

// DELETE /thoughts/:thoughtId/reactions/:reactionId
router.delete("/:thoughtId/reactions/:reactionId", async (req, res) => {
  const { thoughtId, reactionId } = req.params;

  try {
    const thought = await Thought.findById(thoughtId);

    if (!thought) {
      return res.status(404).json({ error: "Thought not found" });
    }

    thought.reactions = thought.reactions.filter(
      (reaction) => reaction.reactionId !== reactionId
    );

    const updatedThought = await thought.save();

    res.status(200).json({ status: "success", payload: updatedThought });
  } catch (error) {
    console.error("Error removing reaction:", error);
    res.status(500).json({ error: "Error removing reaction" });
  }
});

module.exports = router;












module.exports = router;
