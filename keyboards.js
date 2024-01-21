const { Markup } = require('telegraf')

const webAppUrl = 'https://startling-dango-99858e.netlify.app'

const welcomeMessageKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback('Научиться за 58 минут🚀', 'welcomeMessage-prePaymentVideoAdvMessage')]
]);

const prePaymentVideoAdvMessageKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback('Расскажи подробнее👀', 'prePaymentVideoAdvMessage-authorInfoWithPicMessage')],
    [Markup.button.callback('Хочу научиться🎓', 'prePaymentVideoAdvMessage-ratesDescriptionWithVideoMessage')]
]);

const authorInfoWithoutPicMessageKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback('Хочу научиться🎓', 'authorInfoWithoutPicMessage-ratesDescriptionWithVideoMessage')]
]);

const getBackToPaymentKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback('Вернуться к оплате💸', 'authorInfoNoPicMessage-getPaymentLinkMessage')]
]);

const firstLessonVideoIntroKeyboard = Markup.inlineKeyboard([
    [Markup.button.url('Смотреть видео🖥', `${webAppUrl}/aOUVdbbidP7b`)]
]);

const secondLessonVideoIntroKeyboard = Markup.inlineKeyboard([
    [Markup.button.url('Смотреть видео🖥', `${webAppUrl}/fminiIBUv87bui`)]
]);



const getAccessToChatKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback('Получить доступ в чат!💬', 'getFormulaMessage-chatLink')]
]);

const basicUpgradeChooseRateKeyboard = Markup.inlineKeyboard([
    [Markup.button.callback('1️⃣PRO', 'basicUpgradeOfferMessage-basicUpgradeToProPaymentMessage')],
    [Markup.button.callback('2️⃣ADVANCED', 'basicUpgradeOfferMessage-basicUpgradeToAdvancedPaymentMessage')]
]);




module.exports = {
    welcomeMessageKeyboard,
    prePaymentVideoAdvMessageKeyboard,
    authorInfoWithoutPicMessageKeyboard,
    getBackToPaymentKeyboard,
    firstLessonVideoIntroKeyboard,
    secondLessonVideoIntroKeyboard,
    getAccessToChatKeyboard,
    basicUpgradeChooseRateKeyboard
}