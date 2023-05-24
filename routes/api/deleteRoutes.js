const router = require("express").Router();
const { deleteUserById } = require("../../controllers/userController");

router.delete("/:id", async (req, res) => {
  console.log(`DELETE /user/${req.params.id}`);
  try {
    const result = await deleteUserById(req.params.id);
    res.status(200).json({ status: "success", message: result.message });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
