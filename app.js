const express=require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const logger=require('morgan')
const router = require('./routes/employee.route')
const adminrouter=require('./routes/admin.route')
require('dotenv').config()
const app=express()    

// const jwt=require('jsonwebtoken')
// app.set('secretkey','rk')
// const empValidation = (req,res,next) =>{
//     jwt.verify(req.headers['token'],req.app.get('secretkey'),
//     (err,decoded) => {
//         if(err){
//             res.json({
//                 message:err
//             })
//         }
//         next()
//     })
// }


var corsOptions={
    origin:"http://localhost:8081"
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(logger('dev'))
app.use('/api',router)
app.use('/admin',adminrouter)

app.get('/', (req,res)=>{
    res.json({
        message:"Hello world"
        }
    )
})


const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is up and running on ${PORT}`)
})


const db = require("./models")

db.mongoose.connect(db.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log(`Successfully connected to the Database`)
})
.catch((error) => {
    console.log(error)
    process.exit()
})

