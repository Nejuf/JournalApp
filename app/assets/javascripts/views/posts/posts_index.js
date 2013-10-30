JournalApp.Views.PostsIndex = Backbone.View.extend({
	initialize: function(){
		this.listenTo(this.collection, "add remove reset change:title", this.render)
	},

	events: {
		"click .delete": "onBtnDelete"
	},

  template: JST['posts/index'],

	render: function(){
		var postList = this.template( { posts: this.collection.models } );
		this.$el.html(postList);
		return this;
	},

	remove: function() {
		this.$el.remove();
		this.stopListening();
		return this;
	},

	onBtnDelete: function(event){
		//event is jQuery event
		var postId = parseInt($(event.target).data("id"));
		var model = this.collection.get(postId);
		model.destroy();
	}
});
