'use strict';

let en = {
    card : {
        title: 'Wave FM',
        subtitle: 'The Home of Andy & Erin at Breakfast',
        cardContent: "Visit our web site https://www.myradio.com",
        image: {
            largeImageUrl: 'https://s3.amazonaws.com/alexademo.ninja/maxi80/alexa-artwork-1200.png',
            smallImageUrl: 'https://s3.amazonaws.com/alexademo.ninja/maxi80/alexa-artwork-720.png'
        }
    },
    url: 'https://audio1.maxi80.com',
    startJingle : 'https://s3.amazonaws.com/alexademo.ninja/maxi80/jingle.m4a'
};

let de = { // TODO add german translation
    card : {
        title: 'Wave FM',
        subtitle: 'The Home of Andy & Erin at Breakfast',
        cardContent: "Visit our web site https://www.myradio.com",
        image: {
            largeImageUrl: 'https://s3.amazonaws.com/alexademo.ninja/maxi80/alexa-artwork-1200.png',
            smallImageUrl: 'https://s3.amazonaws.com/alexademo.ninja/maxi80/alexa-artwork-720.png'
        }
    },
    url: 'http://webradio.radiomonitor.com/stream/Wave-Dundee/;stream.mp3?_=1',
    startJingle : 'https://s3.amazonaws.com/alexademo.ninja/maxi80/jingle.m4a'
}

let globalAudioData = {
    'en-US': en,
    'en-GB': en,
    'en-CA': en,
    'en-IN': en,
    'en-AU': en,
    'de-DE': de
};

function audioData(request) {
    let DEFAULT_LOCALE = 'en-US';
    var locale = request === undefined ? DEFAULT_LOCALE : request.locale;
    if (locale === undefined) {
        locale = DEFAULT_LOCALE
    };
    return globalAudioData[locale];
}

module.exports = audioData;
