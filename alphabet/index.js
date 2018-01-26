/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-alphabet
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = 'amzn1.ask.skill.9458fa17-f082-4a83-a81e-6cf19a15548c';  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            ALPHABET: [
                'A is for Apple.',
                'B is for Bear.',
                'C is for Carrot.',
                'D is for Dog.',
                'E is for Elephant.',
                'F is for Fish.',
                'G is for Grapes.',
                'H is for House.',
                'I is fo Ice Cream.',
                'J is for Jelly Fish.',
                'K is for King.',
                'L is for Lion.',
                'M is for Monkey.',
                'N is for Nun.',
                'O is for Orange.',
                'P is for Parrot.',
                'Q is for Queen.',
                'R is for Raspberry.',
                'S is for Strawberry.',
                'T is for Turtle.',
                'U is for Umbrella.',
                'V is for Violin.',
                'W is for Water.',
                'X is for Xylophone.',
                'Y is for Yogurt.',
                'Z is for Zebra.',
            ],
            SKILL_NAME: 'Learn the Alphabet',
            GET_FACT_MESSAGE: "Here's your letter: ",
            HELP_MESSAGE: 'You can say tell me a letter of the alphabet, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetAlphabet');
    },
    'GetNewAlphabetIntent': function () {
        this.emit('GetAlphabet');
    },
    'GetAlphabet': function () {
        // Get a random space alphabet from the space alphabets list
        // Use this.t() to get corresponding language data
        const alphabetArr = this.t('ALPHABET');
        const alphabetIndex = Math.floor(Math.random() * alphabetArr.length);
        const randomAlphabet = alphabetArr[alphabetIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomAlphabet;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomAlphabet);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
