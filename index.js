const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const hbengine = require('express-handlebars');

const prizesRoute = require("./routes/prizes.router");
const laureatesRoute = require("./routes/laureates.router");

app.use(bodyParser.json());


app.engine('hbs', hbengine.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));
app.set('view engine', 'hbs');


const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
        info: {
            title: "my-notes app",
            description: "API documentation",
            contact: {
                name: "Taha Moumen",
            },
            servers: ["http://localhost:3000/"],
        },
    }),
    apis: ["index.js", "./routes/*.js"],
};
const swaggerDocs = swaggerJsdoc(swaggerOption);




app.get('/', function (req, res) {
    res.render('home');
});

app.get('/listeDeroulante', function (req, res) {
    res.render('listeDeroulante');
});

app.get('/formulaire', function (req, res) {
    res.render('formulaire');
});



app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use("/prizes", prizesRoute);
app.use("/dispaly",prizesRoute);
app.use("/laureates", laureatesRoute);
app.use("/studentsPlus", laureatesRoute);
app.use("/category",prizesRoute);
app.use("/max",prizesRoute);
app.use("/laureates/years",prizesRoute);
app.use("/id",prizesRoute);
app.use("/non/laureates",prizesRoute);
app.use("/ordre",prizesRoute);
app.use("/prizes/filtre",prizesRoute);
app.use("/prizes/motivations",prizesRoute);




app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

