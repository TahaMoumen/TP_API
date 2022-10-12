const prizesController = require("../controllers/prizes.controller");
var express = require("express");
var router = express.Router();



 router.get("/:year?", prizesController.getPrizes);
 /**
  * @swagger
  * /prizes/{year}:
  *   get:
  *      description: Return prizes by year in year or return all prizes
  *      tags:
  *          - F3-prizes
  *      parameters:
  *          - in: path
  *            name: year
  *            type: integer
  *            required: false
  *      responses:
  *          '200':
  *              description: Resource added successfully
  *          '500':
  *              description: Internal server error
  *          '400':
  *              description: Bad request 
  * */

 module.exports = router;


