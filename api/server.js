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
    console.log(info)
})



app.listen(3030,'0.0.0.0', () => {
    console.log('Servidor online.')
});


