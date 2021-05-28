const { resJsonP } = require('../../../../utils'),
  { updateDailyById } = require('../../../../services/daily');

/**
 * @api {put} /api/user/daily/put Atualizar Diário
 * @apiDescription Atualiza um registro do diário
 * @apiName userDaily_put
 * @apiGroup Diário
 * @apiVersion 1.0.0
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       content-type: 'application/json'
 *     }
 * @apiParam {String} dailyId ObjectId da Daily
 * @apiParam {String} description Descrição da Daily
 * @apiSuccess {String} success <code>Boolean</code>
 * @apiSuccess {Object} payload array de objetos
 * @apiError {String} success <code>false</code>
 * @apiError {String} payload objeto contendo a msg de erro
 * @apiSuccessExample {json} Success-Response:
 *      HTTP/1.1 200 OK
 *  {
 *    success: true,
 *    payload: true
 *  }
 * @apiErrorExample {json} Requisição inválida:
 *     HTTP/1.1 200 OK
 *     {
 *        "success": false,
 *        "payload": {
 *            "msg": "Informações faltantes!"
 *        }
 *     }
 * @apiErrorExample {json} Requisição inválida:
 *     HTTP/1.1 200 OK
 *     {
 *        "success": false,
 *        "payload": {
 *            "msg": "Dados Inválidos!"
 *        }
 *     }
 * @apiErrorExample {json} Unauthorized:
 *     HTTP/1.1 401 OK
 *     {
 *       Unauthorized
 *     }
**/

module.exports = () => (req, res) => {
  updateDailyById({...req.body})
    .then(result => resJsonP(res, 200, true, result))
    .catch(err => resJsonP(res, 200, false, err));
};