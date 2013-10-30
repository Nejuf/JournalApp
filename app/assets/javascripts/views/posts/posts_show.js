JournalApp.Views.PostShow = Backbone.View.extend({
	template: JST["posts/show"],

	render: function(){
		debugger
		var postDetails = this.template({ post: this.model });
		this.$el.html(postDetails);
		return this;
	}
});