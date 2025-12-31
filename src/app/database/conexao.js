import "dotenv/config";
console.log(process.env.DB_HOST, process.env.DB_PORT);
import pkg from "pg";
const { Client } = pkg;

const conexao = new Client({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

conexao.connect();

export default conexao;
