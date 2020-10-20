const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    return expr.match(/.{1,10}/g).map(x => {
        if (x === '**********') return ' ';

        return x.match(/.{1,2}/g).map(y => {
            if (y === '10') {
                return '.';
            }
            if (y === '11') {
                return '-';
            }
            return '';
        }).join('');
    })
        .map(morse => {
            return MORSE_TABLE[morse] ? MORSE_TABLE[morse] : ' ';
        }).join('');
}

module.exports = {
    decode
}
