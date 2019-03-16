const crypto = require('crypto');

module.exports = {
    Decrypt: Decrypt
};

function Decrypt(encry) {
    const key = 'kingCwt';
    const keys = crypto.createDecipher('aes192', key);
    let DecryptTypes = keys.update(encry, 'hex', 'utf8');
    DecryptTypes += keys.final('utf8');
    return DecryptTypes;
}

