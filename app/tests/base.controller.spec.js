var BaseController = require("../controllers/Base");
describe("Base controller", function() {
	it("should have a method extend which returns a child instance", function(next) {
		expect(BaseController.extend).toBeDefined();
		var child = BaseController.extend({ name: "my child controller" });
		expect(child.run).toBeDefined();
		expect(child.name).toBeDefined();
		expect(child.name).toBe("my child controller");
		next();
	});
	it("should be able to create different childs", function(next) {
		var childA = BaseController.extend({ name: "child A", customProperty: 'value' });
		var childB = BaseController.extend({ name: "child B" });
		expect(childA.name).not.toBe(childB.name);
		expect(childB.customProperty).not.toBeDefined();
		next();
	});
});