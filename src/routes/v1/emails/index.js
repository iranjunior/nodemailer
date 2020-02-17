const router = require('express').Router();
const emails = require('../../../controllers/emails');

/**
 * @swagger
 *
 * /v1/send:
 *   post:
 *     tags:
 *       - Email
 *     summary: Envio de mensagem de email
 *     consumes:
 *       - application/json
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *               required: true
 *               example: test@gmail.com
 *             name:
 *               type: string
 *               required: true
 *               example: fulano do teste
 *             message:
 *               type: string
 *               required: true
 *               example: Está é uma mensagem de contato
 *     responses:
 *       '200':
 *         description: Mensagem de email enviada com sucesso
 *         schema:
 *           type: object
 *           properties:
 *              message:
 *                  type: string
 *                  required: true
 *                  example: Email enviado com sucesso
 *       '400':
 *         description: Algum ou varios campos do json de entrada não está em conformidade
 *       '500':
 *         description: Erro ao tentar enviar a messagem
 */

router.post('/send', emails.send);

module.exports = router;
