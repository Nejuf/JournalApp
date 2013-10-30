JournalApp.Views.PostShow = Backbone.View.extend({
	template: JST["posts/show"],

	initialize: function(options){
		this.$el.on("click", "a.edit", this.onBtnEdit)
	},

	render: function(){
		var postDetails = this.template({ post: this.model });
		this.$el.html(postDetails);
		return this;
	},

	remove: function() {
		this.$el.remove();
		this.stopListening();
		return this;
	},

	onBtnEdit: function(event) {

	},

});