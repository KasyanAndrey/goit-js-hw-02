"use strict";

const checkForSpam = function(message) {
    let checkCaseMessage = message.toLowerCase();
    const checkForMessage = checkCaseMessage.includes('spam') || checkCaseMessage.includes('sale');
    return checkForMessage;
};

console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));