db.createUser({
  user: "the_username",
  pwd: "the_password",
  roles: [
    {
      role: "dbOwner",
      db: "the_database",
    },
  ],
});

db.createCollection("recipes");

db.recipes.insert({ text: "Write code", done: true });
db.recipes.insert({ text: "Learn about containers", done: false });
db.recipes.insert({
  text: "Increase the number of tools in my tool belt",
  done: false,
});
