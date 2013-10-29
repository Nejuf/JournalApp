window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		var postsCollection = new JournalApp.Collections.Posts();
		postsCollection.fetch({
			success: function(collection, response, options){
		    var indexView = new JournalApp.Views.PostsIndex({
		    	collection: collection
		    });
				$('#posts-content').append(indexView.render().$el);
			}
		});

  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
