const crypto = require("crypto");

module.exports = function decrypt(ciphertext) {
    if (this.cacheable) this.cacheable();

    const options = {
        password: "test",
        algorithm: "cast5-cbc",
        salt: "nodecipher",
        digest: "sha1",
        iterations: 1000,
        keylen: 512,
    };

    const key = crypto.pbkdf2Sync(
        options.password,
        options.salt,
        options.iterations,
        options.keylen,
        options.digest,
    );

    const decipher = crypto.createDecipher(
        options.algorithm,
        key.toString("hex"),
    );

    return Buffer.concat([decipher.update(ciphertext), decipher.final()]);
};

module.exports.raw = true;
