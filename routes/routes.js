// routes/routes.js

const express = require("express");
const Services = require("../services/services");
const routes = express.Router();

routes.get("/", (req, res) => {
    res.send("Seja bem vindo ao nosso sistema de Tarefas");
});

routes.get("/tarefas/cadastrar", (req, res) => {
    res.render("../views/tarefas/cadastrar");
});

// ROTA PARA SERVIÇO DE CREATE
routes.post("/tarefas/create", Services.TarefaCreate);

// ROTA PARA O SERVIÇO LISTAR
routes.get("/tarefas/listar", Services.TarefaListar);

// ROTA PARA O SERVIÇO DE ATUALIZAR
routes.get("/tarefas/Atualizar/:id_tarefa/:titulo/:descricao",(req,res) => {
    let tarefas = {
      id_tarefa: req.params.id_tarefa,
      titulo: req.params.titulo,
      descricao: req.params.descricao
    }
    res.render("tarefas/update", { tarefas });
})
routes.post("/tarefas/Update", Services.TarefaUpdate);

//ROTA PARA O SERVIÇO DE DELETE
routes.post("/tarefas/Delete", Services.TarefaDelete);
module.exports = routes;