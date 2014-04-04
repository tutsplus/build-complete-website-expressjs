var Model = require("../models/Base"),
	dbMockup = {};
describe("Models", function() {
	it("should create a new model", function(next) {
		var model = new Model(dbMockup);
		expect(model.db).toBeDefined();
		expect(model.extend).toBeDefined();
		next();
	});
	it("should be extendable", function(next) {
		var model = new Model(dbMockup);
		var OtherTypeOfModel = model.extend({
			myCustomModelMethod: function() { }
		});
		var model2 = new OtherTypeOfModel(dbMockup);
		expect(model2.db).toBeDefined();
		expect(model2.setDB).toBeDefined();
		expect(model2.myCustomModelMethod).toBeDefined();
		next();
	});
	it("should not modify the base prototype chain", function(next) {
		var model = new Model(dbMockup);
		var A = model.extend({
			prop: 20
		});
		var B = model.extend({
			prop: 30
		});
		var a = new A();
		var b = new B();
		expect(a.prop).toBe(20);
		expect(b.prop).toBe(30);
		next();
	});
});