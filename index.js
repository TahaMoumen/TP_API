const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const prizesRoute = require("./routes/prizes.router");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");
const hbengine = require('express-handlebars');

app.use(bodyParser.json());
app.set('view engine', 'hbs');7

app.engine('hbs', hbengine.engine({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        reccourcirCommentaire(comment) {
            if (comment.length <20) {
                return comment;
            }
            return comment.substring(0, 16) + '...';
        }
    }
}));


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



app.get('/', function (req, res) {res.render('home', { title: 'Home' }); });
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/prizes", prizesRoute);





app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

