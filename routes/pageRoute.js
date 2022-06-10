import express from "express";
const router= express.Router();
import fs from 'fs'
import {uuid} from 'uuidv4'

const json_listP= fs.readFileSync('./table.json', 'utf-8');
let listP= JSON.parse((json_listP));


router.get('/', (req, res) =>{
    res.render('home')
})


router.get('/escalatunegocio', (req, res) =>{
    const firstCalc= + 9000;
    const secondCalc= + 17000;
    const thirdCalc= + 50000;
    res.render('escalaTuNegocio', { listP, firstCalc })
})


router.get('/escalatunegocio/table', (req, res) =>{
    res.render('table', {listP} )
})

router.post('/escalatunegocio/table', (req, res) =>{
    const {pName, pPrice, pBudget} = req.body

    if(!pName || !pPrice || !pBudget){
        res.status(400).send('escribir todos los campos')
        return
    }
    let newList= {
        id: uuid(),
        pName,
        pPrice,
        pBudget
    }

   listP.push(newList)
   const json_listP= JSON.stringify(listP)
   fs.writeFileSync('./table.json', json_listP, 'utf-8')
   res.redirect('/escalatunegocio')
})


router.get('/escalatunegocio/table/:id', (req, res) =>{
    listP= listP.filter(product => product.id != req.params.id)

    const json_listP= JSON.stringify(listP)
    fs.writeFileSync('./table.json', json_listP, 'utf-8')

    res.redirect('/escalatunegocio')
})

router.get('/escalatunegocio/table/delete', (req, res) =>{
    listP= listP.newList
    const json_listP= JSON.stringify(listP)
    fs.writeFileSync('./table.json', json_listP, 'utf-8')
    res.redirect('/escalatunegocio')
})


router.get('/resenas', (req, res) =>{
    res.render('resenas')

})


router.get('/contacto', (req, res) =>{
    res.render('contacto')
})

router.post('/contacto', async (req, res) =>{
    const eMessages= []
    const {name, correo, resultados, captcha}=  req.body
    const re=  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(name === "" || name === null){
    eMessages.push("Ingresa un nombre mayor a 3 caracteres")
    }
    if(correo === "" || correo === null){
    eMessages.push("ingresa un correo")
    }
    if(resultados === "" || resultados === null){
     eMessages.push("Ingrese los resultados que desea obtener")
    }  
    if(captcha  === "" || captcha === null){
    eMessages.push('ingrese captcha valido')
    }
    if (eMessages.length > 0) {
        res.redirect('/contacto')
      }

})

export default router