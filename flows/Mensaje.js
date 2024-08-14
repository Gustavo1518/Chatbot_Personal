const { addKeyword } = require('@bot-whatsapp/bot');


const flowMensaje = addKeyword(['4', 'mensaje'])
.addAnswer('Por favor introduce tu mensaje, yo me encargare que le llegue a mi creador', {capture: true, delay:1500}, async (ctx, {flowDynamic, provider}) => {
    await provider.sendText('5215614562120@s.whatsapp.net', ctx.body)
    await flowDynamic('Excelente tu mensaje ya fue enviado')
})