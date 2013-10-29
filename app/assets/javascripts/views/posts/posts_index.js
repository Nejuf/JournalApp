JournalApp.Views.PostsIndex = Backbone.View.extend({

  template: JST['posts/index'],

	render: function(){

		var postList = this.template({posts: this.collection.models});
		this.$el.html(postList);
		return this;
	}
});
