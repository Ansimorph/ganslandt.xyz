const nodecipher = require("node-cipher");
const glob = require("glob");
require("dotenv").config();

const ENCRYPT_FILE_EXTENSION = "cast5";

glob(`dist/**/*.${ENCRYPT_FILE_EXTENSION}`, {}, (er, files) => {
    files.forEach(file => {
        nodecipher.decrypt(
            {
                input: file,
                output: file.replace(`.${ENCRYPT_FILE_EXTENSION}`, ""),
                password: process.env.PASSWORD,
            },
            function(err) {
                if (err) throw err;
            },
        );
    });
});
