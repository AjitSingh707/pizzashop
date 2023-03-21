require('colors')
require('dotenv').config()
require('./config/config')
const express = require("express")
const morgan = require("morgan")
const path = require('path')

const PORT = process.env.PORT || 8080
const app = express()

// middlewaare........................................
app.use(express.json())
app.use(morgan('dev'))
app.use('/api/pizzas',require('./routes/pizzaRoute'))
app.use("/api/users",require('./routes/userRoute'))
app.use("/api/orders",require('./routes/orderRoutes'))

app.use(express.static(path.join(__dirname,'./pizzafrontend/build')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"./pizzafrontend/build/index.html"))
})

// routing.............................................
app.get("/",(req,res)=>{
    res.send("<h1>hello dukano ka mela </h1>")
})



//listening............................................
app.listen(PORT,()=>{
    console.log("server running on 8080.....")
})