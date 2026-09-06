const PORT = 5000
const mongoose = require ("mongoose")
const cors = require ("cors")
const express = require("express")
const Product = require("./models/product.model.js")
const app = express()


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

let product = []

//ROUTES

app.get('/' ,(req, res) =>{
res.send("API is running..Shop Backend is LIVE!")

})

//GET all products
app.get('/api/products', async(req,res) => {
try{
   const products = await Product.find({})
   res.status(200).json(products)
}catch(error){
   res.status(500).json({message:error.message})

}

})

//GET product by id
app.get('/api/products/:id', async(req,res) => {
try{
    const product = await Product.findById(req.params.id)

    if(!product) return res.status(404).json({message:"Product not found"})
    res.status(200).json(product)

}catch(error){
    res.status(500).json({message:error.message})
}

})

//CREATE a product
app.post('/api/products', async(req,res) => {
try{
   const newProduct = await Product.create(req.body)
   res.status(201).json(newProduct)

}catch(error){
    res.status(500).json({message:error.message})

}

})

//UPDATE A PRODUCT
app.patch('/api/products', async(req,res) => {
try{
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body)
  res.status(200).json(updatedProduct) 
}catch(error){
  res.status(500).json({message:error.message})

}

})
//CONNECT TO DATABASE
mongoose.connect("mongodb+srv://tenorbobyy_db_user:Africansmurfs.254@cluster0.c2cpv1w.mongodb.net/myapp?retryWrites=true&w=majority")
.then(() => {
            console.log("Server seccessfully connected to database")

            app.listen(PORT, '0.0.0.0', () => {
              console.log("Server is listening on port 5000")
        })
})


.catch((error) => {
     console.log("Database coonnection  failed", (error))


})

module.exports = app;
//trigger redeploy
