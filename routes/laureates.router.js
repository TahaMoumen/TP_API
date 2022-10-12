const laureatesController = require("../controllers/laureates.controller");
var express = require("express");
var router = express.Router();

router.get("/:userId?", laureatesController.getAll);
/**
 * @swagger
 * /laureates/{userId}:
 *   get:
 *      description: All laureates
 *      tags:
 *          - F1-F2-f4 Laureates
 *      parameters:
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

 module.exports = router;