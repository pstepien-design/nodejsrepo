import db from './createConnection.js';

const isInDeleteMode = false;

if (isInDeleteMode) {
  db.exec('DROP TABLE IF EXISTS players');
}

db.exec(`CREATE TABLE IF NOT EXISTS players (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCAHR(70)
);`);

//seed
db.run("INSERT INTO players (name) VALUES ('Messi')");
db.run("INSERT INTO players (name) VALUES ('Ronaldo')");

db.close();
