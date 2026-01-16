import {articles} from '../data.js'
import connection from '../data/db.js'
// index
function index(req,res){
   const query = "SELECT * FROM `blog_db`.posts"
   connection.query(query,(err, result)=>{
    if(err){
        res.status(500);
       return res.json({
        message:"internal server error"
       })
    }
    res.json({
     results:result
 })
   })
}
//show
function show(req,res){
    const id = req.params.id
    const query ="SELECT * FROM `blog_db`.posts WHERE `blog_db`.posts.id= ?"
    connection.query(query, [id], (err, result)=>{
        if(err){
        res.status(500);
       return res.json({
        message:"internal server error"
       })
    }
    if(result.length === 0){
        res.status(404);
        res.json({
            message:"articolo non trovato"
        })
    }else{
        const articolo = result[0];
        res.json(articolo)
    }
   })
}

//store
function store(req,res){
    const dati = req.body
    const newId= articles[articles.length-1].id +1
    console.log(newId);
    const nuovoArt= {
        id:newId,
        path:dati.path,
        title:dati.title,
        description: dati.description,
        ingredienti:dati.ingredienti
      }
      articles.push(nuovoArt)
    res.status(201).json(nuovoArt)
}
//update
function update (req,res){
    const id = parseInt(req.params.id)
    const articolo = articles.find((article)=>article.id===id)
    const dati= req.body;

    articolo.id= dati.id
    articolo.path=dati.path
    articolo.title=dati.title
    articolo.description=dati.description
    articolo.ingredienti=dati.ingredienti
    res.json(articolo)
}
//modify
function modify(req,res){
    const id= req.params.id
    res.send("modifico articolo numero" + id)
}
//delete
function destroy (req,res){
const id = req.params.id
const query = "DELETE FROM `blog_db`.posts WHERE `id` = ? "
connection.query(query, [id], (err)=>{
      if(err){
        res.status(500);
       return res.json({
        message:"internal server error"
       })
    }
    res.sendStatus(204);
})
}
const controller = {
    index,
    show,
    store,
    update,
    modify,
    destroy

}

export default controller