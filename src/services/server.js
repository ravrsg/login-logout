var CryptoJS = require("crypto-js");
const password = "admin1";
const scryptor = {
  realPassword() {
    let ciphertext = CryptoJS.AES.encrypt(password, "secret key 123").toString();
    let bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  },
  givenPassword(pass) {
    let ciphertext = CryptoJS.AES.encrypt(pass, "secret key 123").toString();
    let bytes = CryptoJS.AES.decrypt(ciphertext, "secret key 123");
    let originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  },
  check(pass) {
    return this.realPassword() === this.givenPassword(pass);
  },
};

export default scryptor;
