const { addKeyword } = require('@bot-whatsapp/bot');
const flowPrincipal = require('./flowprincipal.js');
const VALIDACIONES = require('./validaciones.js');
const GLOBAL_CONTACTO = {};

const flowContacto = addKeyword(['3', 'info', 'informacion'])
.addAnswer('Proporcioname tu *nombre*', {capture: true, delay: 1500} , (ctx, {fallBack}) => {

    if(VALIDACIONES.nombreValido(ctx.body)){
        GLOBAL_CONTACTO[ctx.from] = {
            Nombre: ctx.body,
            Empresa: '',
            Telefono: 0,
            Vacante: ''
        }
    }else{
        fallBack('Ingresa un nombre valido');
    }
})
.addAnswer('Proporcioname el nombre de tu *empresa*', {capture: true, delay: 1500}, (ctx, {fallBack}) => {
    
    (VALIDACIONES.empresaValido(ctx.body))? GLOBAL_CONTACTO[ctx.from].Empresa = ctx.body : fallBack('Ingresa un nombre valido de empresa *no debe contener numeros ni caracteres especiales y mayor a 5 caracteres* ')
})
.addAnswer('Proporciona tu numero telefonico a 10 digitos y sin espaciós', {capture:true, delay:1500}, (ctx,{fallBack}) => {
    if(ctx.body.length === 10) GLOBAL_CONTACTO[ctx.from].Telefono = ctx.body;
    else fallBack('Ingresa un numero de telefono valido')
})
.addAnswer('Ingresa la vacante para la cual estas interesado que postule', {capture:true, delay:1500}, (ctx,{fallBack}) => {
    (ctx.body.length > 5)?GLOBAL_CONTACTO[ctx.from].Vacante = ctx.body:fallBack('Ingresa una vacante valida');
})
.addAnswer('Excelente tus datos fueron completados exitosamente', null,async (ctx, {flowDynamic}) => {
    await flowDynamic(`*INFORMACION:*\n${GLOBAL_CONTACTO[ctx.from].Empresa}\n\n*NOMBRE:*\n${GLOBAL_CONTACTO[ctx.from].Nombre}\n\n*TELEFONO:*\n${GLOBAL_CONTACTO[ctx.from].Telefono}\n\n*VACANTE:*\n${GLOBAL_CONTACTO[ctx.from].Vacante}`)
})
.addAnswer(
    'Gracias por contactarme, me estare comunicando contigo en cuanto pueda.',
    null,
    async (ctx, {provider}) => {
        await provider.sendText('5215614562120@s.whatsapp.net', `*GUSTAVO TIENES UNA NUEVA OFERTA*\n\n*INFORMACION:*\n${GLOBAL_CONTACTO[ctx.from].Empresa}\n\n*NOMBRE:*\n${GLOBAL_CONTACTO[ctx.from].Nombre}\n\n*TELEFONO:*\n${GLOBAL_CONTACTO[ctx.from].Telefono}\n\n*VACANTE:*\n${GLOBAL_CONTACTO[ctx.from].Vacante}`)
        await delete GLOBAL_CONTACTO[ctx.from]
        // el número de telefono se envía en este formato 12345678901@s.whatsapp.net
    }
)
.addAnswer('Para regresar al menú escribe *MENU*')


module.exports = flowContacto;