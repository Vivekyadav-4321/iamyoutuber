// const ytvideo = require("ytdl-core")
// const express = require('express')
// const app = express()
// const PORT = 7000 || process.env.PORT


// app.get("/",(req, res)=>{

//     ytvideo.getInfo("https://www.youtube.com/watch?v=kJQP7kiw5Fk").then((data)=>{
//     let youtubevideolink = data.player_response.streamingData.adaptiveFormats[2].url 
// res.send(`<a href=\"${youtubevideolink}\">${youtubevideolink}</a>`)

// })


// })




// app.listen(PORT, ()=>{console.log("Server is live");})







const express = require("express")
const app = express()
var PORT = 7000 || process.env.PORT

app.get("/",(req, res)=>{


    res.send("hi")
})

app.listen(PORT)

