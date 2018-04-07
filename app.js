const express = require('express');

let app= express();
let port = process.env.PORT||3000
let html = (val)=>String(val);
app.get('/',(req,res)=>{
    res.setHeader('content-type','text/html');
    res.send(html`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <title>App in docker windows</title>
            <style>
                *{
                    box-sizing:border-box;
                }
                body{

                }
            </style>
        </head>
            
        <body>
            <p>This app is running from docker  on port ${process.env.port}</p>
        </body>
        </html>
    
    `);
});

app.listen(port|| 3000,err=>{
    if(err) return console.log('Error:',err);
    console.log('Console.log app running on: %s',port)
});