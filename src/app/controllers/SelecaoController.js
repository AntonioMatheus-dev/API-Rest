import SelecaoRepository from "../repositories/SelecaoRepository.js";

class SelecaoController{
//Listar tudo
   async index(req, res){
      const row = await SelecaoRepository.findAll();
      res.json(row)
};

//Listar por ID
   async show(req, res){
    const id = req.params.id
      const row = await SelecaoRepository.findById(id);
      res.json(row)
};

//criar dados
   async store(req, res){
         const {selecao, grupo} = req.body;
         const params = [selecao, grupo]
         const row = await SelecaoRepository.create(params);
         res.json(row)
    };

//atualizar Dados
    async upadate (req, res){
      const id = req.params.id;
      const {selecao, grupo} = req.body
      const params = [selecao, grupo, id];
      const row = await SelecaoRepository.update(params);
     res.json(row)

};

//deleta dados
    async delete(req, res){
      const id = req.params.id;
      const row = await SelecaoRepository.delete(id);
      res.json(row)
};

}

//padrão singleton
export default new SelecaoController();