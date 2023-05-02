import express from 'express'
import cors from 'cors';
const app = express()
const port = 3000

app.use(cors());

const users = ['Damir', 'Alex', 'Nikita'];

app.get('/', (req, res) => {
    res.send(users)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})
