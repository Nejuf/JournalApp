JournalApp.Views.PostShow = Backbone.View.extend({
	template: JST["posts/show"],

	render: function(){
		var postDetails = this.template({ post: this.model });
		this.$el.html(postDetails);
		return this;
	},

	remove: function() {
		this.$el.remove();
		this.stopListening();
		return this;
	}

});