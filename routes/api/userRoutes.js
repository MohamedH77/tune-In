const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../../controllers/userController");

router.get("/", async (req, res) => {
  console.log("GET /user");
  try {
    const users = await getAllUsers();
    console.log("Users retrieved:", users);
    res.status(200).json({ status: "success", payload: users });
  } catch (err) {
    res.status(500).send({ err });
  }
});

router.get("/:id", async (req, res) => {
  console.log(`GET /user/${req.params.id}`);
  try {
    const user = await getUserById(req.params.id);
    console.log("User retrieved:", user);
    res.status(200).json({ status: "success", payload: user });
  } catch (err) {
    res.status(500).send({err});
  }
});


router.put("/:id", async (req, res) => {
  console.log(`PUT /user/${req.params.id}`);
  try {
    const user = await updateUserById(req.params.id, req.body);
    console.log("User updated:", user);
    res.status(200).json({ status: "success", payload: user });
  } catch (err) {
    res.status(500).send({ err });
  }
});


router.post("/", async (req, res) => {
  console.log("POST /user");
  try {
    const { email, username } = req.body;
    if (!email || !username) {
      return res.status(400).send({ error: "Missing required fields" });
    }
    const newUser = await createUser(req.body);
    console.log("New user added:", newUser);
    res.status(201).json({ status: "success", payload: newUser });
  } catch (err) {
    res.status(500).send({err});
  }
});


router.delete("/:id", async (req, res) => {
  console.log(`DELETE /user/${req.params.id}`);
  try {
    const result = await deleteUserById(req.params.id);
    res.status(200).json({ status: "success", message: result.message });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
  console.log("hitting this??")
});

module.exports = router;
