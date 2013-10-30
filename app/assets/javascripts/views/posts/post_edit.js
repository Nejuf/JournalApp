JournalApp.Views.PostEdit = Backbone.View.extend({
	template: JST["posts/edit"],

	initialize: function(options) {
		this.model = options.model;
		this.$el.on("submit", "form.edit", this.onEdit.bind(this));
	},

	render: function() {
		var postDetails = this.template({ post: this.model });
		this.$el.html(postDetails);
		return this;
	},

	remove: function() {
		this.$el.remove();
		this.stopListening();
		return this;
	},

	onEdit: function(event) {
		event.preventDefault();
		var formData = $(event.currentTarget).serializeJSON();
		// this.model.set(formData.post);//can set in save method
		this.model.save(formData.post, {
			patch: true,

			success: function(model, response, options) {
				console.log("Post edited successfully.");
			},

			error: function(model, xhr, options) {
				console.log("Errors editing post");
			}
		});

		Backbone.history.navigate("#/");
	},

});
