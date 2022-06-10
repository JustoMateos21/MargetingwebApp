import express from "express";
const app= express();
import morgan from "morgan";

import engine from 'ejs-mate';
const ejsMate= engine

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

//RUTAS
import pageRoute from './routes/pageRoute.js'

import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(express.static(path.join(__dirname, 'public')))
app.use( express.static( "views" ) )
app.use(express.json());

app.use(pageRoute)


//404 HANDLER
app.use((req, res, next) =>{
    res.status(404).render('404')
})


const port= 4070
app.listen(`${port}`, () =>{
    console.log(`listening on ${port}`)
})
