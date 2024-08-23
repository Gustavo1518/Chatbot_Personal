const { addKeyword } = require('@bot-whatsapp/bot');
const { delay } = require('@whiskeysockets/baileys');

REGEX_OPCION4 = `/^\s*4\s*$/`

const flowCv = addKeyword(REGEX_OPCION4, {regex: true}).addAnswer('Te comparto mi *CV*, esperando sea de tu interes', {
    media: "https://server-production-a645.up.railway.app/uploads/CV.pdf"
}).addAnswer('Si deseas regresar al menu principal, solo escribe *menu*')

module.exports = flowCv