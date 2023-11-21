import express from 'express';
import HeLLo from './hello.js';
import Lab5 from './Lab5.js';
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
Lab5(app);
HeLLo(app);
app.listen(4000);