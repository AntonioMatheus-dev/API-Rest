// infra/conexao.js
import pkg from "pg";
const { Client } = pkg;

const conexao = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "mat.1127",
  database: "bdcopa",
});

conexao.connect()

export default conexao;
