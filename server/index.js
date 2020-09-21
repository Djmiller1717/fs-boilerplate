const express = require("express")
const path = require('path')
const app = express()
const morgan = require('morgan')
//require db from /db

app.use(morgan('dev'))
app.use(express.json())
app.use('/public', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')))

//require in your routes and use them on your api path

//404 handler

//500 handler

//set PORT
const PORT = 3000

//listen
const init = async function(){
    //await syncAndSeed()
    app.listen(PORT, function(){
        console.log(`Server is listening on port ${PORT}`)
    })
}
// For Deployment
// const init = async function(){
//     await syncAndSeed()
//     app.listen(process.env.PORT || PORT, function(){
//         console.log(`Server is listening on port ${PORT}`)
//     })
// }

init()
