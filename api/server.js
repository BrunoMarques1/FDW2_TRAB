const express = require('express')
const cors = require('cors')
const app = express()

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "localhost",
        user: "root",
        password: "",
        database: "angular"
    }
})

app.use(cors({
    origin: '*',
}))

app.use(express.json())


app.get('/', async (req, res) => {
    const info = await knex('teste')
    res.send(info)
})

app.post('/', async (req,res) =>{
    const {msg,valor} = req.body
    knex('teste').insert({msg: msg, valor: valor}).then((dados =>{
        res.send({dados:dados[0],msg: msg, valor: valor})
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


