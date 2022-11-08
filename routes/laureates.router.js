const laureatesController = require("../controllers/laureates.controller");
var express = require("express");
var router = express.Router();

router.get("/:pagination?/:userId?", laureatesController.getLaureates);
/**
 * @swagger
 * /laureates/{pagination}/{userId}:
 *   get:
 *      description: All laureates
 *      tags:
 *          - F1-F2-f4 Laureates
 *      parameters:
 *          - in: path
 *            name: pagination
 *            type: string
 *            required: false
 *          - in: path
 *            name: userId
 *            type: integer
 *            required: false
 *            description: Numeric ID of the user to get (Optional)
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.get("/students/more/onePrize", laureatesController.getNbStudents);
 /**
  * @swagger
  * /laureates/students/more/onePrize:
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