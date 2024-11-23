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


app.get('/', async (req, res) => {
    const info = await knex('pastas')
    res.send(info)
})

app.get('/:id', async (req, res) => {
    const id = req.params.id
    const info = await knex('itens').where({pasta_id: id})
    res.send(info)
    //console.log(info)
})

app.post('/', async (req,res) =>{
    const {nome,descricao} = req.body
    knex('pastas').insert({nome: nome, descricao: descricao}).then((dados =>{
        res.send({msg:'Cadastro de pasta realizado!'})
    }))
})

app.delete('/:id', async (req, res) => {
    const { id } = req.params;
    await knex('teste').where('id', id).del();
    res.send({ msg: 'Item deletado com sucesso!' });
  });
  



app.listen(3030,'0.0.0.0', () => {
    console.log('Servidor online.')
});


