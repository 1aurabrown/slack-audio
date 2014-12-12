// lib/itunes.js

var iTunes = {
    'name': 'iTunes',
    'getMessage': getMessage
};

module.exports = iTunes;

function getMessage(username, data) {
    var msg = username + ' is now playing via iTunes:\n',
        artist = data['albumArtist'] || data['artist'],
        year = data['year'],
        name = data['name'],
        album = data['album'];

    if (artist && name) {
        msg += '> *' + artist + ' - ' + name + '*';
    } else {
        return null;
    }

    if (album) {
        msg += '\n';
        msg += '> ' + album;
        if (year) msg += ' (' + year + ')'
    }

    return msg;
}
