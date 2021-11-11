const express = require('express')
const app = express()
const port = 8080

app.get('/helloworld', (req, res) => {
  res.send('Hello Stranger');
})

app.get('/helloworld?name=AlfredENeumann', (req, res) => {
    res.send('Hello Alfred E Neumann');
})

app.get('/versionz', (req, res) => {
    res.send({
        gitHash: 'git rev-parse HEAD',
        gitProjectName: 'https://github.com/ac12644/http-service.git'
      });
  })

app.listen(8080, function () {
    console.log('listening on port 8080!');
});
