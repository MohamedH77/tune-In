const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
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

router.post("/", async (req, res) => {
  console.log("POST /user");
  try {
    const newUser = await createUser(req.body);
    console.log("New user created:", newUser);
    res.status(200).json({ status: "success", payload: newUser });
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

module.exports = router;
