const { addKeyword,EVENTS} = require('@bot-whatsapp/bot');
//const flowPrincipal = require('./flowprincipal.js');
const VALIDACIONES = require('./validaciones.js');
const { delay } = require('@whiskeysockets/baileys');

REGEX_OPCION1 = `/^\s*1\s*$/`
REGEX_OPCION2 = `/^\s*2\s*$/`
REGEX_OPCION3 = `/^\s*3\s*$/`

const flowFinal = addKeyword(EVENTS.ACTION).addAnswer('👋 ¡Hasta luego!')

const flowAutomation = addKeyword(REGEX_OPCION1, {regex: true}).addAnswer('Aquí hay algunos de los proyectos más destacados en los que he trabajado con automation anywhere 360:')
.addAnswer(
    [
        'He desarrollado robots RPA que automatizan procesos complejos, como el inicio de sesión en portales web, la consulta de información, y la descarga de archivos. Además, he implementado funcionalidades avanzadas como la lectura y extracción de datos desde archivos PDF, Conexiones a bases de datos SQL server, Consultas API, así como la fusión de múltiples PDFs en un único documento. Estos robots han mejorado significativamente la eficiencia de los procesos, ahorrando tiempo y minimizando errores humanos.'
    ]
).addAnswer('Si deseas regresar al menu principal, solo escribe *menu*')




const flowPython = addKeyword(REGEX_OPCION2,{regex: true}).addAnswer('Aquí hay algunos de los proyectos más destacados en los que he trabajado con python:')
.addAnswer(
    [
        'He desarrollado robots RPA utilizando Python y Selenium que automatizan procesos críticos, como el inicio de sesión en portales web, la consulta de información, y la descarga de archivos. También he implementado la lectura y extracción de datos desde archivos PDF, así como la fusión de múltiples PDFs en un único documento. Además, he realizado conexiones a bases de datos SQL Server y he ejecutado consultas API para integrar datos y optimizar procesos. Estos robots han mejorado significativamente la eficiencia y la precisión en diversas operaciones.'
    ]
).addAnswer('Si deseas regresar al menu principal, solo escribe *menu*')




const flowChatbots = addKeyword(REGEX_OPCION3, {regex: true}).addAnswer('Aquí hay algunos de los proyectos más destacados en los que he trabajado con Chatbots para whatsapp:')
.addAnswer(
    [
        'He desarrollado chatbots de WhatsApp utilizando Node.js, integrando conexiones a bases de datos SQL Server y APIs para manejar datos en tiempo real. Además, he implementado la tecnología de ChatGPT dentro de estos chatbots, mejorando la interacción y proporcionando respuestas más naturales e inteligentes a los usuarios.'
    ]
).addAnswer('Si deseas regresar al menu principal, solo escribe *menu*')




const flowExperiencia = addKeyword(['1', 'He trabajado en diversos roles como desarrollador RPA, ¿Te gustaría ver detalles sobre alguna de estas experiencias?'])
.addAnswer(
    [
        'Selecciona el *numero* de la opción que deseas consultar\n\n',
        '1️⃣ Automation Anywhere 360',
        '2️⃣ Python RPA',
        '3️⃣ Chatbots',
    ]
,{capture:true, delay: 500, idle: 180000},async (ctx,{gotoFlow,fallBack}) => {
    if (ctx?.idleFallBack) return gotoFlow(flowFinal)
    
    if(!VALIDACIONES.opcionValida(ctx.body)) return fallBack('Ingresa una opcion del submenú')
    
},[flowAutomation,flowPython,flowChatbots])


module.exports = flowExperiencia;