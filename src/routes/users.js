var express = require('express');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const router = express.Router();

// Generate keys http://travistidwell.com/jsencrypt/demo/index.html
var private_key = "-----BEGIN RSA PRIVATE KEY-----\nMIIBOgIBAAJBAIyhZfVfSiVYmHzT/7iD8uYK3KFww0uVymlNTHjFCdWt0MXNXkJQ\nP5bGcJba6WeoKiX6U8O9ay2qSSBLLKXTOk0CAwEAAQJALp2hioCXt2Fyyo4LikJS\n1eZr1Cfo1LlGazlwS+gkpmuCR76OfwPoK282RCEmwxBmo/vizUWNFuoVqYLQwC7a\nkQIhAO8o2Xq6Afb2CGoLT/la6dQzwC7ymB4bcAQEeAIlkrMbAiEAlohwNZRADtiP\nPu2wPGirjiD1AihkS46ts4IDB8XgtrcCIQDC6LTNe3iMb5kN66hC3WAB7CctW9Kz\nfsL80zOG9F4pjwIgSOZGQQxMgWQK6xS8tmSSQEBhpuvctmKgaEBcK1V+370CIB2a\nOKHiUCpz05KwFn9Js6OPuhpfTT80NaoM3fnmjvgy\n-----END RSA PRIVATE KEY-----";
var public_key = "-----BEGIN PUBLIC KEY-----\nMFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIyhZfVfSiVYmHzT/7iD8uYK3KFww0uV\nymlNTHjFCdWt0MXNXkJQP5bGcJba6WeoKiX6U8O9ay2qSSBLLKXTOk0CAwEAAQ==\n-----END PUBLIC KEY-----"
// jwt.sign({ meysam: 3 }, private_key, { algorithm: 'RS256' })
// jwt.verify(token, public_key, (error, decoded) => { console.log(result) })

router.get('/:pass', (req, res, next) => {
  return res.status(200).json({ meysam: req.query });
  // bcrypt.hashSync('asdf', 10)
  // bcrypt.compareSync(pass, hash)
  jwt.sign()
});

module.exports = router;
