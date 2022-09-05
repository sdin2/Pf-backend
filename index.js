const socketServerIo = require("./src/app.js");
const { conn } = require("./src/db.js");
const { saveAllGamesInDb } = require("./src/controllers/GamesController");
let PORT = 3001;

// Syncing all the models at once.
conn.sync().then(() => {
  socketServerIo.listen(3001, () => {
    saveAllGamesInDb();
    console.log(`%s listening at 3001`); // eslint-disable-line no-console
  });
});
