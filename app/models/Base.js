var util = require('util');
module.exports = function(db) {
	this.db = db;
};
module.exports.prototype = {
	extend: function(properties) {
		var Child = function(db) {
			this.db = db;
		};
		util.inherits(Child, module.exports);
		for(var key in properties) {
			Child.prototype[key] = properties[key];
		}
		return Child;
	},
	setDB: function(db) {
		this.db = db;
	},
	collection: function() {
		if(this._collection) return this._collection;
		return this._collection = this.db.collection('fastdelivery-content');
	}
}