const express = require('express')
const cors = require('cors')
const app = express()

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "controle_colecao"
    }
})

app.use(cors({
    origin: '*',
}))

app.use(express.json())



app.get('/getItens', async (req, res) => {
    const info = await knex('itens')
    res.send(info)
})
app.get('/getItensByPasta/:id', async (req, res) => {
    const id = req.params.id
    const info = await knex('itens').where({pasta_id: id})
    res.send(info)
})
app.get('/getItem/:id', async (req, res) => {
    const id = req.params.id
    const info = await knex('itens').where({id: id}).first()
    res.send(info)
})
app.get('/getPastas', async (req, res) => {
    const info = await knex('pastas')
    res.send(info)
})
app.get('/getPasta/:id', async (req, res) => {
    const id = req.params.id
    const info = await knex('pastas').where({id: id}).first()
    res.send(info)
})



app.post('/postPasta', async (req,res) =>{
    const {nome,descricao} = req.body
    knex('pastas').insert({nome: nome, descricao: descricao}).then((dados =>{
        res.send({msg:'Cadastro de pasta realizado!'})
    }))
})
app.post('/postItem', async (req,res) =>{
    const {pasta_id,nome,descricao,categoria} = req.body
    knex('itens').insert({
        pasta_id: pasta_id, 
        nome: nome, 
        descricao: descricao,
        categoria: categoria
    }).then((dados =>{
        res.send({msg:'Cadastro de pasta realizado!'})
    }))
})



app.put('/putPasta/:id', async (req, res) => {
    const { id } = req.params;
    const {nome,descricao} = req.body
    await knex('pastas').where('id', id)
    .update({
        nome: nome, 
        descricao: descricao
    });
    res.send({ msg: 'Pasta modificada com sucesso!' });
});
app.put('/putItem/:id', async (req, res) => {
    const { id } = req.params;
    const {nome,descricao,categoria} = req.body
    await knex('itens').where('id', id)
    .update({
        nome: nome, 
        descricao: descricao,
        categoria: categoria
    });
    res.send({ msg: 'Item modificado com sucesso!' });
});



app.delete('/pasta/:id', async (req, res) => {
    const { id } = req.params;
    await knex('pastas').where('id', id).del();
    res.send({ msg: 'Pasta deletado com sucesso!' });
});
  

app.delete('/item/:id', async (req, res) => {
    const { id } = req.params;
    await knex('itens').where('id', id).del();
    res.send({ msg: 'Item deletado com sucesso!' });
});




app.listen(3030,'0.0.0.0', () => {
    console.log('Servidor online.')
});


