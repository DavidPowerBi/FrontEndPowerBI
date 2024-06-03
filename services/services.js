const axios = require("axios");

module.exports = class Services {
  //ADICIONAR
  static async TarefaCreate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://b1aa2f14-a761-42cd-a419-7ec0fe75ed25-00-v9rwr7t7fkm.riker.replit.dev/tarefas/Cadastrar",
      method: "POST",
      data: valores
    };
    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  //LISTAR
  static async TarefaListar(req, res) {
    const options = {
      url: 'https://b1aa2f14-a761-42cd-a419-7ec0fe75ed25-00-v9rwr7t7fkm.riker.replit.dev/tarefas',
      method: 'GET',
      data: {}
    };
    axios(options).then(response => {
      console.log(response.data);
      const tarefa = response.data;
      res.render("tarefas/listar", { tarefa});
    });
  }
  //ATUALIZAR
  static async TarefaUpdate(req, res){
    let valores = req.body;
    const options = {
      url: 'https://b1aa2f14-a761-42cd-a419-7ec0fe75ed25-00-v9rwr7t7fkm.riker.replit.dev/tarefas/'+valores.id_tarefa,
      method: 'PUT',
      data: valores
    };
    axios(options);
    const mensagem = "Registro atualizado com sucesso!";
    res.render("mensagem", { mensagem });
  }
//DELETE
  static async TarefaDelete(req, res){
    let id_tarefa = req.body.id_tarefa;
    const options ={
      url: 'https://b1aa2f14-a761-42cd-a419-7ec0fe75ed25-00-v9rwr7t7fkm.riker.replit.dev/tarefas/'+id_tarefa,
      method: 'DELETE'
    };
    axios(options);
    const mensagem = "Registro excluído com sucesso!";
    res.render("mensagem", { mensagem });
  }
}