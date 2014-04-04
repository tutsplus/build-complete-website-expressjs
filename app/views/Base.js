var util = require('util');
module.exports = function(response, template) {
	this.response = response;
	this.template = template;
};
module.exports.prototype = {
	extend: function(properties) {
		var Child = function(response, template) {
			this.response = response;
			this.template = template;
		};
		util.inherits(Child, module.exports);
		for(var key in properties) {
			Child.prototype[key] = properties[key];
		}
		return Child;
	},
	render: function(data) {
		if(this.response && this.template) {
			this.response.render(this.template, data);
		}
	}
}