const { addKeyword } = require('@bot-whatsapp/bot');
const { delay } = require('@whiskeysockets/baileys');

const flowCotizar = addKeyword(['3']).addAnswer('!Excelente¡, por dejame a continuacion una breve descripción de lo que tienes en mente, yo me estare poniendo en contacto contigo, lo mas pronto posible', {capture: true, delay:500}, async (ctx,{provider}) => {
    await provider.sendText('5215614562120@s.whatsapp.net', `*MENSAJE:* ${ctx.body}\n\n*NUMERO DE WHATSAPP:*${ctx.from}`)
    // el número de telefono se envía en este formato 12345678901@s.whatsapp.net
}).addAnswer('Gracias por tus comentarios').addAnswer('Si deseas regresar al menu principal, solo escribe *menu*')

module.exports = flowCotizar