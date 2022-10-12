const prizesf5Controller = require("../controllers/prizesf5.controller");
var express = require("express");
var router = express.Router();



 router.get("/:any?", prizesf5Controller.getN);
 /**
  * @swagger
  * /prizes/f5/{any}:
  *   get:
  *      description: Return students with more than 1 prizes
  *      tags:
  *          - F5
  *      responses:
  *          '200':
  *              description: Resource added successfully
  *          '500':
  *              description: Internal server error
  *          '400':
  *              description: Bad request 
  * */

 module.exports = router;