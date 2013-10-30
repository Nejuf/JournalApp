JournalApp.Models.Post = Backbone.Model.extend({
	urlRoot: "/posts",

	validate: function(attributes, options) {
		var errors = [];
		attributes = _.extend({}, this.attributes, attributes);

		if(!attributes.title) {
			errors.push("Title can't be blank");
		}

		if(!attributes.body) {
			errors.push("Body can't be blank");
		}

		if(errors.length > 0){
			return errors;
		}
	},
});
