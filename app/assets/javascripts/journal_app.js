window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		new JournalApp.Routers.Posts({ container: $('#posts-content') });
		Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
