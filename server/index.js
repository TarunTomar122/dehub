import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', () => {
    return res.status(200).send({
        message: 'Hello World'
    })
})

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})