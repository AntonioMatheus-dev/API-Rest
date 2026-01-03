import "dotenv/config";
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
/**
 * Executa um código sql com ou sem valores
 * @param {string} sql  instrução sql a ser execultada 
 * @param {string=id | {selecao, id}} valores a serem passados ao sql
 * @param {string} menssagem a ser exibida 
 * @returns objeto de Promisses
 */

export const consulta = (sql, valores='', menssagemReject="Erro na consulta")=>{
          return new Promise((resolve, reject) => {
            conexao.query(sql, valores, (erro, result) => {
              if (erro) return reject(menssagemReject)
              const row = JSON.parse(JSON.stringify(result.rows));
              return resolve(row);
              });
          });
}

export default conexao;
