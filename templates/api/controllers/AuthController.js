/**
* Authentication Controller
* @description: Handles all authentication and registration methods
* @docs: https://github.com/Phtes/sails-jwt-auth/wiki/controller/auth
*/

var AuthController = {

	/**
	* Render Login
	*/
	login: function(req, res) {
		res.view();
	},

	/**
	* Log user out of application
	*/
	logout: function(req, res) {
		req.logout();

		// mark auth for sails
		res.session.authenticated = false;

		//redirect to app home
		res.redirect('/');
	},

	/**
	* Render Registration View
	*/
	register: function(req, res) {
		res.view();
	},

	/**
	* Create the sjwt end point
	*/
	sjwt: function(req, res) {
		sjwt.endpoint(req, res);
	}
}