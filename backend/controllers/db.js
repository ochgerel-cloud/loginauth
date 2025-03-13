import knexConnect from "knex";

const knex = knexConnect({
  client: "better-sqlite3",
  connection: { filename: "./data/mydb.sqlite" },
  useNullAsDefault: true,
});

export default knex;
