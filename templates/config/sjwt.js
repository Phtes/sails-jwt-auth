/**
* SJWT Configuration Settings
*
* @alg : The encoding and decoding algorithim to be used
* @key : The key to be used when encoding and decoding
* @locale: What local to use for error reporting
* @identifier: What field to identify a user login attempt by
*/

module.exports.sjwt = {
	alg : "HS256",
	key : "your-secret-key",
	locale : "en_US",
	identifier: 'email',
}