const router = require("express").Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
} = require("../../controllers/thoughtController");
const { updateUserById } = require("../../controllers/userController");

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

module.exports = router;
