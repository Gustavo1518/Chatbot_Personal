const { addKeyword, EVENTS } = require('@bot-whatsapp/bot');
const flowExperiencia = require('./experiencia');
const VALIDACIONES = require('./validaciones.js');
const flowHabilidades = require('./habilidades.js')
const flowCotizar = require('./cotizar.js');
const flowCv = require('./cv.js');

USER_DATA = {}
REGEX_FINAL = `/^\s*###########\s*$/`
SALUDO = ''


const flowFinal = addKeyword(REGEX_FINAL, {regex: true}).addAnswer('👋 ¡Hasta luego!')

const flowPrincipal = addKeyword(EVENTS.WELCOME)
    .addAction(async (ctx) => {
        now = new Date().getHours();
        if(now < 12 && now >= 1) SALUDO = "Buenos dias";
        if(now > 12 && now < 19) SALUDO = "Buenas tardes";
        if(now > 18) SALUDO = "Buenas noches";
        
        if(ctx?.pushName){
            USER_DATA[ctx.from] = {
                push_name: { name: ctx.pushName }
            }
        }
    })
    .addAction(async (ctx, {flowDynamic }) => { await flowDynamic(`🙌 ¡Hola! ${SALUDO},\n\nSoy *Gustavo Meneses*, un desarrollador RPA especializado en Automation Anywhere, Python y Selenium. ¿Te gustaría conocer más sobre mi experiencia?\n\n*¿En que puedo ayudarte hoy?* ${USER_DATA[ctx.from].push_name.name}`) })
    .addAnswer('1️⃣ Experiencia Profesional.\n2️⃣ Habilidades Técnicas\n3️⃣ Quiero una automatización/chatbot\n4️⃣ Compartir mi CV, contigo.', {capture: true, delay: 1000, idle: 180000}, (ctx, {fallBack,gotoFlow}) => {
            if(ctx?.idleFallBack) return gotoFlow(flowFinal)
            if(!VALIDACIONES.opcionValida(ctx.body)) return fallBack('Ingresa una opción valida del menú.')
        },[flowExperiencia,flowHabilidades, flowCotizar,flowCv]
    );
    
module.exports = {
    flowPrincipal
}

    