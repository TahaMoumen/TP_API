const laureatesController = require("../controllers/laureates.controller");
var express = require("express");
var router = express.Router();

router.get("/:userId?", laureatesController.getAll);
/**
 * @swagger
 * /prizes/{userId}:
 *   get:
 *      description: All prizes
 *      tags:
 *          - users
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



//  router.put("/:id/update", usersController.updateUser);
//  /**
//   * @swagger
//   * /prizes/{userId}/update:
//   *   put:
//   *      description: Used to update user
//   *      tags:
//   *          - users
//   *      parameters:
//   *          - in: path
//   *            name: userId
//   *            type: integer
//   *            description: User id
//   *            required: true
//   *          - in: body
//   *            name: User
//   *            description: User data with new values of properties
//   *            schema:
//   *              type: object
//   *              required:
//   *                 - firstName
//   *                 - lastName
//   *              properties:
//   *                  firstName:
//   *                      type: string
//   *                      minLength: 1
//   *                      maxLength: 45
//   *                      example: James
//   *                  lastName:
//   *                      type: string
//   *                      minLength: 1
//   *                      maxLength: 45
//   *                      example: Bond
//   *      responses:
//   *          '200':
//   *              description: Resource updated successfully
//   *          '500':
//   *              description: Internal server error
//   *          '400':
//   *              description: Bad request
//   */

 module.exports = router;