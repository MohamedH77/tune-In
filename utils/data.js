module.exports = {
  users: [
    {
      _id: "646e707923f0de60cae36164",
      username: "User 1",
      email: "example@gmail.com",
      thoughts: ["646e70834dbb043262e62f58"],
    },

    {
      _id: "646e70561b68e0d79a63d620",
      username: "User 2",
      email: "example2@gmail.com",
      thoughts: ["646e708918d6481a40f6ba07"],
    },
    // Add more user data as needed
  ],

  thoughts: [
    {
      id_: "646e70834dbb043262e62f58",
      thoughtText: "Thought 1",
      username: "User 1",
      reactions: [
        {
          reactionBody: "Reaction 1",
          username: "User 1",
        },
      ],
    },
    {
      id_: "646e708918d6481a40f6ba07",
      thoughtText: "Thought 2",
      username: "User 2",
      reactions: [
        {
          reactionBody: "Reaction 2",
          username: "User 2",
        },
      ],
    },
    // Add more thought data as needed
  ],

  friends: [
    {
      id_: "646e7092b3607196f23bb32d",
      username: "User 1",
      friend: "User 2",
    },
    {
      id_: "646fd291b3d0211082043460",
      username: "User 2",
      friend: "User 1",
    },
  ],
};
