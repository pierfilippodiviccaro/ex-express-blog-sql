import express from 'express'
import ArticlesRouter from './routers/articoli.js'

const app = express()
const port = 7000

app.use(express.json())

app.get("/", (req, res) => {
    res.send("miao")
})

app.use("/articoli", ArticlesRouter)

app.use((req, res, next) => {
    res.status(404).json({ 
        errore: "Endpoint non trovato", 
        metodo: req.method, 
        percorso: req.originalUrl 
    });
    next()
});
 


app.use((err, req, res, next) => {
    console.error("Errore:", err.stack);
    res.status(500).json({ 
        errore: "Errore interno del server", 
        messaggio: err.message 
    });
    next()
});

app.listen(port, function() {
    console.log("il server è in ascolto sulla porta " + port)
})

