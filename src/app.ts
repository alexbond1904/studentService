import express, {Response, Request, NextFunction} from 'express';
import studentRouter from "./routes/studentRouter";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api', studentRouter);

app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    console.error(err.message);
    res.status(400).send({error: err.message});
    next();
});

app.listen(PORT, () => {
    console.log(`http://localhost:${3000}`)
})