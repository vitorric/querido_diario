const { resJsonP } = require('../../../../utils'),
  { createDaily } = require('../../../../services/daily');

/**
 * @api {post} /api/user/daily/create Cadastrar Diário
 * @apiDescription Cadastra um registro no diário
 * @apiName userDaily_create
 * @apiGroup Diário
 * @apiVersion 1.0.0
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       content-type: 'application/json'
 *     }
 * @apiParam {String} description Descrição do registro
 * @apiSuccess {String} success <code>Boolean</code>
 * @apiSuccess {Object} payload objeto contendo a informação do registro
 * @apiError {String} success <code>false</code>
 * @apiError {String} payload objeto contendo a msg de erro
 * @apiSuccessExample {json} Success-Response:
 *      HTTP/1.1 200 OK
 *  {
 *    success: true,
 *    payload: {
 *      delete: false,
 *      _id: '60b031a112b7720e2ce4cb69',
 *      userId: '60b031a112b7720e2ce4cb68',
 *      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
 *      createdAt: '2021-05-27T23:56:17.586Z',
 *      updatedAt: '2021-05-27T23:56:17.586Z',
 *      __v: 0
 *    }
 *  }
 * @apiErrorExample {json} Requisição inválida:
 *     HTTP/1.1 200 OK
 *     {
 *        "success": false,
 *        "payload": {
 *            "msg": "Informações faltantes"
 *        }
 *     }
 * @apiErrorExample {json} Unauthorized:
 *     HTTP/1.1 401 OK
 *     {
 *       Unauthorized
 *     }
**/

module.exports = () => (req, res) => {
  createDaily({ ...req.body }, req.user._id)
    .then(result => resJsonP(res, 200, true, result))
    .catch(err => resJsonP(res, 200, false, err));
};