JournalApp.Views.PostShow = Backbone.View.extend({
	template: JST["posts/show"],

	initialize: function(options){
		this.$el.on("click", "a.edit", this.onBtnEdit);
		//this.$el.on("dblclick", "")//TODO double click on a specific field lets the user edit just that field
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