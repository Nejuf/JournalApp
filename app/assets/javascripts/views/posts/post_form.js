JournalApp.Views.PostForm = Backbone.View.extend({
	template: JST["posts/new"],

	initialize: function(options) {
		this.model = options.model;
		this.collection = options.collection;
		this.$el.on("submit", "form.new", this.onFormSubmit.bind(this));
	},

	events: {
		// "submit form.new": "onFormSubmit"// submit is not delegatable in IE
	},

	render: function() {
		var postForm = this.template({ post: this.model });
		this.$el.html(postForm);
		return this;
	},

	remove: function() {
		this.$el.remove();
		this.stopListening();
		return this;
	},

	onFormSubmit: function(event) {
		var that = this;
		event.preventDefault();

		var formData = $(event.currentTarget).serializeJSON();
		this.model.set(formData.post);

		var errors = this.model.validate();
		if(errors){
			_(errors).each( function(error) {
				that.$el.prepend(error);
			});
			return;
		}

		this.model.save({}, {
			success: function(model, response, options) {
				console.log("Post successfully created and saved to database.");
				that.collection.add(model);
			},

			error: function(model, xhr, options) {
				console.log("Errors saving new post.");
				//TODO add server validation messages
			}
		});

		Backbone.history.navigate("#/");
	},

});