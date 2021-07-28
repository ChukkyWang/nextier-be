const express = require('express')
const app = express();

// app.get("/", function(req, res){
//         res.send('Express Here')
// })

app.use("/power/", require('./routes/powerRoutes'));

app.listen(3001, function(){
        console.log('New Server')
})