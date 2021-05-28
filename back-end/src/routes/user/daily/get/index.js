const { resJsonP } = require('../../../../utils'),
  { getDailyById } = require('../../../../services/daily');

/**
 * @api {get} /api/user/daily/get/:dailyId Obtém Diário
 * @apiDescription Obtém um registro do diário
 * @apiName userDaily_get
 * @apiGroup Diário
 * @apiVersion 1.0.0
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       content-type: 'application/json'
 *     }
 * @apiParam {String} dailyId ObjectId da Daily
 * @apiSuccess {String} success <code>Boolean</code>
 * @apiSuccess {Object} payload array de objetos
 * @apiError {String} success <code>false</code>
 * @apiError {String} payload objeto contendo a msg de erro
 * @apiSuccessExample {json} Success-Response:
 *      HTTP/1.1 200 OK
 *  {
 *    success: true,
 *    payload: {
 *      delete: false,
 *      _id: '60b03f694f1f6305bcd39b2f',
 *      userId: '60b03f694f1f6305bcd39b2d',
 *      description: 'Novo registro criado em 1622163305965',
 *      createdAt: '2021-05-28T00:55:05.966Z',
 *      updatedAt: '2021-05-28T00:55:05.966Z',
 *      __v: 0
 *    }
 *  }
 * @apiErrorExample {json} Requisição inválida:
 *     HTTP/1.1 200 OK
 *     {
 *        "success": false,
 *        "payload": {
 *            "msg": "Dados Inválidos"
 *        }
 *     }
 * @apiErrorExample {json} Unauthorized:
 *     HTTP/1.1 401 OK
 *     {
 *       Unauthorized
 *     }
**/

module.exports = () => (req, res) => {
  getDailyById(req.params)
    .then(result => resJsonP(res, 200, true, result))
    .catch(err => resJsonP(res, 200, false, err));
};