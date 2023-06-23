require("dotenv").config();
const express = require('express');
require('./config')
const app = express();
const staff = require('./schema/stafLogs')
const cors = require('cors');
// const bodyParser = require('body-parser')
app.use(express.json())
app.use(cors())




app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.get('/admin/findlogs',async(req,res)=>{
    try{
      const datalogs = await staff.find()
      return res.status(200).json({ message: "Logs found..", data: datalogs })
    }catch(err){
        return res.status(401).json({ message: "error found while fecthing logs" })
    }
})

app.post('/admin/createog', async (req, res) => {
    // const { Name, Project, timestamp } = req.body

    console.log("req,body...",req.body)
    let Data = {
        Name: req.body.name,
        Project: req.body.Project,
        hours : req.body.hours,
        status : req.body.status,
        timestamp: new Date()
    }
    try {
        const createLog = new staff(Data)
        const response = await createLog.save()
        return res.status(200).json({ message: "New log has been created", data: response })
    } catch (err) {
        return res.status(401).json({ message: "error found while creating new log" })
    }
})

const port = 8900; // Port number for your server

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
