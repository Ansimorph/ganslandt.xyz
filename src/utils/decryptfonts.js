const Cryptify = require("cryptify");
const glob = require("glob");
const fs = require("fs");
require("dotenv").config();

const ENCRYPT_FILE_EXTENSION = "enc";
const password = process.env.PASSWORD;

glob(`dist/**/*.${ENCRYPT_FILE_EXTENSION}`, {}, (er, files) => {
    files.forEach((file) => {
        const instance = new Cryptify(file, password);
        instance.decrypt().then((decryptedFile) => {
            fs.rename(
                file,
                file.replace("." + ENCRYPT_FILE_EXTENSION, ""),
                (err) => {},
            );
        });
    });
});
