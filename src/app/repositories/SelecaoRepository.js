import conexao from "../database/conexao.js";

class SelecaoRepository{
    //CRUD

    create(params){
            const sql ="INSERT INTO selecoes (selecao, grupo) VALUES ($1, $2);";
            return new Promise ((resolve, reject)=>{
                conexao.query(sql, params, (erro, result)=>{
                    if(erro) return reject("Não foi possovel criar um usuario")
                    const row = JSON.parse(JSON.stringify(result.rows))
                return resolve(row)
                })
            })
    }

    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return new Promise((resolve, reject)=>{
            conexao.query(sql,(erro, result)=>{
                if(erro) return reject('Não foi possivel localizar')
                    //fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result.rows))
                return resolve(row)
            })
        })
    }

    findById(id){
        const sql = "SELECT * FROM selecoes WHERE id=$1;";
        return new Promise((resolve, reject)=>{
            conexao.query(sql, [id], (erro, result)=>{
                if(erro) return reject(`Não foi possivel localiar o ID(${id})`)
                //fazer o parse dos resultados
                const row = JSON.parse(JSON.stringify(result.rows[0]))
                return resolve(row)
            })
        })
    }

    update(params){
        const sql ="UPDATE selecoes SET selecao = $1, grupo = $2 WHERE id=$3;";
        return new Promise((resolve, reject)=>{
            conexao.query(sql, params, (erro, result)=>{
                if(erro) return reject('não foi possivel atualiazar  a seleção')
                const row = JSON.parse(JSON.stringify(result.rows))
                return resolve(row)
            })
        })
    }

    delete(id){
        const sql = "DELETE  FROM selecoes WHERE id=$1;";
        return new Promise((resolve, reject)=>{
            conexao.query(sql, [id], (erro, result)=>{
                if(erro) return reject(`A seleção com o ID (${id}) não existe`)
                    //fazer o parse para os resultados
                const row = JSON.parse(JSON.stringify(result.rows))

                return resolve(row);
            })
        })
    }
};

export default new SelecaoRepository();