import express from 'express'
import  articleController  from '../controllers/articles.js'

const router = express.Router()

//index 
router.get("/", articleController.index)
//show
router.get("/:id",articleController.show)
//store 
router.post("/",articleController.store)
//update
router.put("/:id",articleController.update)
//modify
router.patch("/:id",articleController.modify)
//delete
router.delete("/:id",articleController.destroy)

export default router 