import express from 'express';
import cors from 'cors';

const app = express()
const port = 3000
app.use(cors());

app.get('/', (req, res) => {
    res.send({
        data: 'Homer Simpson'
    });
})

app.listen(port, () => {
    console.log(`Порт запущен: http://localhost:${port}`)
})

/* 
    Что тут у нас?

    1. Импортируем экспресс и создаём приложение app
    2. Порт сервера: 3000
    3. Когда получаем запрос, возвращаем 
*/