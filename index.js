const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { saveAllGamesInDb } = require("./src/controllers/GamesController");
let port = process.env.PORT || 3001;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(port, () => {
    saveAllGamesInDb();
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});
