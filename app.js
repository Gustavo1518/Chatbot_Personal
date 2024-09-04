const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')
const {flowPrincipal}   = require('./flows/flowprincipal.js');

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    },{
        blackList:['5215543189255','5215616427617','5215529188778','5215564080189','5215578644169','5215534293752','5215550461500','5215587264614',
            '5215518099851','5215532719699','5215587331552','5215533343852','5215514568711','5215530987211','5215587264614','5491132862302','5493512043575',
            '5215564080189','5215567831571'

        ]
    })

    QRPortalWeb()
}

main()
