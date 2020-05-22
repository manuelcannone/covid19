const express = require('express');
const app = express();
const chalk = require('chalk');
const route = require('./routes/route');

app.use(express.urlencoded({extended: true}));
//json mangement
app.use(express.json());

//description servers
const port = process.env.PORT || 4000;

//use the path to manage navigation
app.use("/", route);

app.listen(port,() => {
    console.log(chalk.yellow("================================="));
    console.log(chalk.yellow("================================="));
    console.log(chalk.cyan("Server port "+port+" Server status: on"));
    console.log(chalk.yellow("================================="));
    console.log(chalk.yellow("================================="));
   
    
});
