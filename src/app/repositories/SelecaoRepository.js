import {consulta} from "../database/conexao.js";

class SelecaoRepository{
    //CRUD

    create(params){
        const sql ="INSERT INTO selecoes (selecao, grupo) VALUES ($1, $2);";
        return consulta(sql, params, 'Não foi possivel cadastrar')
    }

    findAll(){
        const sql = "SELECT * FROM selecoes;"
        return consulta(sql,[], "Não foi encontar seleções");
    }

    findById(id){
        const sql = "SELECT * FROM selecoes WHERE id=$1;";
        return consulta(sql, [id], "Não foi possivel localizar");
    }

    update(params){
        const sql ="UPDATE selecoes SET selecao = $1, grupo = $2 WHERE id=$3;";
        return consulta(sql, params, "Não foi possivel localizar");
    }

    delete(id){
        const sql = "DELETE  FROM selecoes WHERE id=$1;";
        return consulta(sql, [id], "Não foi possivel apagar");
    }
};
export default new SelecaoRepository();