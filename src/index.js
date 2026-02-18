import express from 'express'
import morgan from 'morgan'
const app = express()

function mid1(req, res, next){
    console.log("mid1")
    next()
}

function mid2(req, res, next){
    console.log("mid2")
    next()
}

function CommonMiddelWare(req, res, next){
    console.log("Common MiddleWare");
    next()
}
app.use(morgan('combined'))
app.use(express.json())
app.use(express.urlencoded())
app.get('/ping/', (req, res) => {
    console.log(req.query)
    return res.json({
        message : "Pong"
    })
})

app.get('/ping/:id/comments/:commentsId', (req, res) => {
    console.log(req.params)
    console.log(req.body)
    return res.json({
        message : "Pong",
        id : req.params
    })
})

app.post('/hello', (req, res) => {
    return res.json({
        message : "World"
    })
})

app.use((req, res) => {
    res.status(404).json({
        message: "Something went wrong"
    })
})


//Create express server at port 3000
app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})

