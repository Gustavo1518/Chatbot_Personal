const { addKeyword } = require('@bot-whatsapp/bot');
const flowPrincipal = require('./flowprincipal.js');
const VALIDACIONES = require('./validaciones.js');
const GLOBAL_CONTACTO = {};

REGEX_OPCION2 = `/^\s*2\s*$/`

const flowHabilidades = addKeyword(REGEX_OPCION2,{regex: true}).addAnswer('Mis habilidades técnicas incluyen:')
.addAnswer(
    [
        'Automation Anywhere 360',
        'Python (Pandas,selenium,pygetwindow,pyautogui,clipboard,request,pyPDF2,xlsxWriter)',
        'Desarrollo de chatbots (node.js)'
    ]
).addAnswer('Si deseas regresar al menu principal, solo escribe *menu*')



module.exports = flowHabilidades;