var bcrypt = require('bcryptjs');

/**
* Hash the password
*
*/
function encryptPassword(user, next) {
	if(user.password){
		bcrypt.hash(user.password, 10).then(function(res){
			user.password = res;
		});
	}
}


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
		firstname: { type: 'string', unique: false},
		lastname: { type: 'string', unique: false},
		email: { type: 'email', unique: true},
		password: {type : 'string', minLength: 6},
		jwttoken: { type: 'json', unique: true}
	},

	/**
	* Hash password before creating a new user
	*/
	beforeCreate: function(user, next) {
		encryptPassword(user, next).done(function(){
			next(null, user);
		}, function(error){
			return error.toString();
		});
	}

};

module.exports = User;

