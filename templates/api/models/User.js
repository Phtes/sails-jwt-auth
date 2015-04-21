var User = {
	/**
	* User.js
	* @description: The user model for SJWT
	* @docs: https://github.com/Phtes/sails-jwt-auth/wiki/model/user
	*/

	// Enforce model schema
	schema: true,

	attributes : {
		username: { type: 'string', unique: true },
		email: { type: 'email', unique: true},
		jwt-token: { type: 'alphanumeric', unique: true}
	}
};

module.exports = User;

