const { resJsonP } = require('../../../../utils'),
  { listDailyByUserId } = require('../../../../services/daily/index');

/**
 * @api {post} /api/user/daily/list Listar Diários
 * @apiDescription Listar os registros de um diário
 * @apiName userDaily_list
 * @apiGroup Diário
 * @apiVersion 1.0.0
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       content-type: 'application/json'
 *     }
 * @apiParam {Number} page número da pagina
 * @apiParam {Number} rowsPerPage quantidade de registros por página
 * @apiSuccess {String} success <code>Boolean</code>
 * @apiSuccess {Object} payload array de objetos
 * @apiError {String} success <code>false</code>
 * @apiError {String} payload objeto contendo a msg de erro
 * @apiSuccessExample {json} Success-Response:
 *      HTTP/1.1 200 OK
 *  {
 *    success: true,
 *    payload: {
 *      metadata: { total: 1 },
 *      dailies: [
 *        {
 *          _id: '60b03711e609072700fe2f44',
 *          delete: false,
 *          userId: '60b03711e609072700fe2f43',
 *          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
 *          createdAt: '2021-05-28T00:19:29.166Z',
 *          updatedAt: '2021-05-28T00:19:29.166Z',
 *          __v: 0
 *        }
 *      ]
 *    }
 *  }
 * @apiErrorExample {json} Unauthorized:
 *     HTTP/1.1 401 OK
 *     {
 *       Unauthorized
 *     }
**/

module.exports = () => (req, res) => {
  listDailyByUserId({ ...req.body }, req.user._id)
    .then(result => resJsonP(res, 200, true, result))
    .catch(err => resJsonP(res, 200, false, err));
};