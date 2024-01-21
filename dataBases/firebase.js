const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountsKeys.json");

/*---------INITIALIZING-------*/
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  }); 
const db = admin.firestore()
/*---------INITIALIZING-------*/






async function createUserDocument(userId, userName, currentTime) {
    try {
        const db = admin.firestore();
        const usersRef = db.collection('users');

        await usersRef.doc(String(userId)).set({
            userName: userName || "none",
            userPaymentName: "",
            userPhone: "",
            userRate: "",
            paymentPrice: 0,
            userLanguage: "ru",
            userEmail: "",
            productId: 0,
            userPayment: false,
            userFirstTestPassed: false,
            userSecondTestPassed: false,
            userFirstTestAttempts: 0,
            userSecondTestAttempts: 0,
            userUpgradedAdvToPro: false,
            userUpgradedBasToPro: false,
            userUpgradedBasToAdvanced: false,
            userAnswName: "",
            userAnswInst: "",
            userAnswWhoAreYou: "",
            userAnswAim: "",
            userAnswAimRealize: "",
            userAnswWeaknesses: "",
            userAnswClient: "",
            userWaitingForSession: false,
            userWaitingForSessionTime: "",
            userBotStartTime: String(currentTime) || "none",
            userBotFinishTime: "",
            userFirstTestSkipped: false,
            userSecondTestSkipped: false
        });

        console.log(`User document created for userId: ${userId}`);
    } catch (error) {
        console.error('Error creating user document:', error);
    }
}


async function updateUserParameter(userId, parameterName, parameterValue) {
    try {
        const db = admin.firestore();
        const userRef = db.collection('users').doc(String(userId));

        const updateObject = {
            [parameterName]: parameterValue || "none",
        };
        await userRef.update(updateObject);

        console.log(`User parameter updated for userId: ${userId}`);
    } catch (error) {
        console.error('Error updating user parameter:', error);
    }
}


async function updateUserAfterPaymentInfo(userId, 
    userEmail, 
    userPhone,
    userName,
    paymentPrice,
    productId
    ) {
    try {
        const db = admin.firestore();
        const userRef = db.collection('users').doc(String(userId));

        await userRef.update({
            userEmail: userEmail || "none",
            userPhone: userPhone || "none",
            userPaymentName: userName || "none",
            paymentPrice: paymentPrice || "none",
            productId: productId || "none",
            userPayment: true
        });

        console.log(`User parameter updated for userId: ${userId}`);
    } catch (error) {
        console.error('Error updating user parameter:', error);
    }
}


async function updateUserTests(userId, parameterName, parameterValue, parameterName2, parameterValue2, parameterName3, parameterValue3) {
    try {
        const db = admin.firestore();
        const userRef = db.collection('users').doc(String(userId));

        const updateObject = {
            [parameterName]: parameterValue || "none",
            [parameterName2]: parameterValue2 || "none",
            [parameterName3]: parameterValue3 || "none"
        };
        await userRef.update(updateObject);

        console.log(`User parameter updated for userId: ${userId}`);
    } catch (error) {
        console.error('Error updating user parameter:', error);
    }
}


async function updateUserPersonalAnswersInfo(userId, 
    userAnswName, 
    userAnswInst,
    userAnswWhoAreYou,
    userAnswAim,
    userAnswAimRealize,
    userAnswWeaknesses,
    userAnswClient,
    currentTime
    ) {
    try {
        const db = admin.firestore();
        const userRef = db.collection('users').doc(String(userId));

        await userRef.update({
            userAnswName: userAnswName || "none",
            userAnswInst: userAnswInst || "none",
            userAnswWhoAreYou: userAnswWhoAreYou || "none",
            userAnswAim: userAnswAim || "none",
            userAnswAimRealize: userAnswAimRealize || "none",
            userAnswWeaknesses: userAnswWeaknesses || "none",
            userAnswClient: userAnswClient || "none",
            userWaitingForSession: true,
            userWaitingForSessionTime: String(currentTime) || "none",
            userBotFinishTime: String(currentTime) || "none"
        });

        console.log(`User parameter updated for userId: ${userId}`);
    } catch (error) {
        console.error('Error updating user parameter:', error);
    }
}







module.exports = {
    createUserDocument,
    updateUserParameter,
    updateUserAfterPaymentInfo,
    updateUserTests,
    updateUserPersonalAnswersInfo
}