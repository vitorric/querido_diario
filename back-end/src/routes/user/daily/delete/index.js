const { resJsonP } = require('../../../../utils'),
  { deleteDailyById } = require('../../../../services/daily');

/**
 * @api {delete} /api/user/daily/delete/:dailyId Deletar Diário
 * @apiDescription Deleta um registro do diário
 * @apiName userDaily_delete
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
 *    payload: true
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
  deleteDailyById(req.params)
    .then(result => resJsonP(res, 200, true, result))
    .catch(err => resJsonP(res, 200, false, err));
};