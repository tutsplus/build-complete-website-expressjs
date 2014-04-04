var View = require("../views/Base");
describe("Base view", function() {
	it("create and render new view", function(next) {
		var responseMockup = {
			render: function(template, data) {
				expect(data.myProperty).toBeDefined();
				expect(data.myProperty).toBe('value');
				expect(template).toBe('template-file');
				next();
			}
		}
		var v = new View(responseMockup, 'template-file');
		v.render({myProperty: 'value'});
	});
	it("should be extendable", function(next) {
		var v = new View();
		var OtherView = v.extend({
			render: function(data) {
				expect(data.prop).toBeDefined();
				expect(data.prop).toBe('yes');
				next();
			}
		});
		var otherViewInstance = new OtherView();
		expect(otherViewInstance.render).toBeDefined();
		otherViewInstance.render({prop: 'yes'});
	});
	it("should not modify the base prototype chain", function(next) {
		var v = new View();
		var A = v.extend({
			prop: 20
		});
		var B = v.extend({
			prop: 30
		});
		var a = new A();
		var b = new B();
		expect(a.prop).toBe(20);
		expect(b.prop).toBe(30);
		next();
	});
});