const prizesController = require("../controllers/prizes.controller");
var express = require("express");
var router = express.Router();


router.get("/display/all/",prizesController.getPrizeJson);
/**
* @swagger
* /prizes/display/all:
*   get:
*      description: Return all prizes 
*      tags:
*          - Prizes
*      responses:
*          '200':
*              description: Resource added successfully
*          '500':
*              description: Internal server error
*          '400':
*              description: Bad request 
* */ 


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

//F6
router.get("/category/types", prizesController.getCategory);
/**
 * @swagger
 * /prizes/category/types:
 *   get:
 *      description: Return all categories
 *      tags:
 *          - F6
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request 
 *  
* */

//F7
router.get("/category/max", prizesController.categoryMax);
/**
 * @swagger
 * /prizes/category/max:
 *   get:
 *      description: Return the category with max laureates
 *      tags:
 *          - F7
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request 
* */

//F8
router.get("/laureates/years", prizesController.laureatesPerYears);
/**
* @swagger
* /prizes/laureates/years:
*   get:
*      description: Return the amount of laureates by year
*      tags:
*          - F8
*      responses:
*          '200':
*              description: Resource added successfully
*          '500':
*              description: Internal server error
*          '400':
*              description: Bad request 
* */

//F9
router.get("/laureates/id/:id?", prizesController.prizesPerId);
/**
* @swagger
* /prizes/laureates/id/{id}:
*   get:
*      description: Return laureates by Id
*      tags:
*          - F9
*      parameters:
*          - in: path
*            name: id
*            type: integer
*            required: true
*      responses:
*          '200':
*              description: Resource added successfully
*          '500':
*              description: Internal server error
*          '400':
*              description: Bad request 
* */

//F10
router.get("/non/laureates", prizesController.noPrizes);
/**
 * @swagger
 * /prizes/non/laureates:
 *   get:
 *      description: Return all years in which no Nobel Prize was awarded
 *      tags:
 *          - F10
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request 
* */


//F11
router.get("/laureates/years/ordre/:ordre?", prizesController.laureatesPerYearsDesc);
/**
* @swagger
* /prizes/laureates/years/ordre/{ordre}:
*   get:
*      description: Chose desc  or asc ((desc for descending order)(asc for ascending order))
*      tags:
*          - F11
*      parameters:
*          - in: path
*            name: ordre
*            type: string
*            required: true
*      responses:
*          '200':
*              description: Resource added successfully
*          '500':
*              description: Internal server error
*          '400':
*              description: Bad request 
* */


//F12
router.get("/filtre/:firstname?/:surname?/:category?", prizesController.getPrizesFiltred);
 /**
 * @swagger
 * /prizes/filtre/{firstname}/{surname}/{category}:
 *   get:
 *      description: Return prizes filtred by fristname, surname or category
 *      tags:
 *          - F12
 *      parameters:
 *          - in: path
 *            name: firstname
 *            type: String
 *            required: false
 *          - in: path
 *            name: surname
 *            type: String
 *            required: false
 *          - in: path
 *            name: category
 *            type: String
 *            required: false
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request 
* */ 

//F13
router.delete("/laureates/id/:id?", prizesController.deletePrizesPerId);
  /**
  * @swagger
  * /prizes/laureates/id/{id}:
  *   delete:
  *      description: Delete the laureates with the chosen id 
  *      tags:
  *          - F13
  *      parameters:
  *          - in: path
  *            name: id
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
  
//F14
router.post("/motivations/:id?/:annee?/:category?", prizesController.updateMotivations);
   /**
   * @swagger
   * /prizes/motivations/{id}/{annee}/{category}:
   *   post:
   *      description: Change the motivation of a student
   *      tags:
   *          - F14
   *      parameters:
   *          - in: path
   *            name: id
   *            type: int
   *            required: false
   *          - in: path
   *            name: annee
   *            type: int
   *            required: false
   *          - in: path
   *            name: category
   *            type: String
   *            required: false
   *          - in: body
   *            name: newUpdate
   *            description: newUpdate of Motivations
   *            schema:
   *                type: object
   *                required:
   *                    - motivation
   *                properties:
   *                    motivation:
   *                        type: string
   *                        minLength: 1
   *                        maxLength: 255
   *      responses:
   *          '200':
   *              description: Resource added successfully
   *          '500':
   *              description: Internal server error
   *          '400':
   *              description: Bad request 
* */ 


//F15
router.post("/laureates/:year?/:category?", prizesController.addLaureateByYearCategory);
/**
   * @swagger
   * /prizes/laureates/{year}/{category}:
   *   post:
   *      description: Change the motivation of a student
   *      tags:
   *          - F15
   *      parameters:
   *          - in: path
   *            name: year
   *            type: int
   *            required: false
   *          - in: path
   *            name: category
   *            type: string
   *            required: false
   *          - in: body
   *            name: data
   *            description: data of a new laureate
   *            schema:
   *                type: object
   *                required:
   *                    - firstname
   *                    - motivation
   *                    - share
   *                properties:
   *                    firstname:
   *                        type: string
   *                        minLength: 1
   *                        maxLength: 50
   *                    surname:
   *                        type: string
   *                        minLength: 1
   *                        maxLength: 50
   *                    motivation:
   *                        type: string
   *                        minLength: 1
   *                        maxLength: 255
   *                    share:
   *                        type: integer
   *      responses:
   *          '200':
   *              description: Resource added successfully
   *          '500':
   *              description: Internal server error
   *          '400':
   *              description: Bad request 
   * */ 

module.exports = router;