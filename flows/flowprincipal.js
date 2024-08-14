const { addKeyword } = require('@bot-whatsapp/bot');
const flowExperiencia = require('./experiencia');
const VALIDACIONES = require('./validaciones.js');
const flowHabilidades = require('./habilidades.js')
const flowCotizar = require('./cotizar.js');

const flowPrincipal = addKeyword(['hola', 'menu', 'menú'])
    .addAnswer('🙌 ¡Hola! Soy *Gustavo Meneses*, un desarrollador RPA especializado en Automation Anywhere, Python y Selenium. ¿Te gustaría conocer más sobre mi experiencia?')
    .addAnswer(' *¿En que puedo ayudarte hoy?*\n\n1️⃣ Experiencia Profesional.\n2️⃣ Habilidades Técnicas\n3️⃣ Quiero una automatización', {capture: true, delay: 1000, idle: 180000}, (ctx, {fallBack,endFlow}) => {
            if(ctx?.idleFallBack) return endFlow('¡Hasta luego! 👋')
            if(!VALIDACIONES.opcionValida(ctx.body)) return fallBack('Ingresa una opcion del menú')
        },[flowExperiencia,flowHabilidades, flowCotizar]
    );

module.exports = {
    flowPrincipal
}

    