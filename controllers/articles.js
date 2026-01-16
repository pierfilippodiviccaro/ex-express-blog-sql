import {articles} from '../data.js'

// index
function index(req,res){
    const risposta={
        lunghezza: articles.length,
        totale: articles
    }
    res.json(risposta)
}
//show
function show(req,res){
    const id = req.params.id
    const articolo = articles.find(article=> article.id === id )
    if(articolo === undefined){
        res.status(404);
        }
        else{
            res.json(articolo)

        }
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
 const articolo = articles.findIndex(article=> article.id === id )
    if(articolo === -1){
        res.status(404);
        return res.json({
            message:"articolo non disponibile"
        })
    }
    articles.splice(articolo, 1)
    res.status(204);
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