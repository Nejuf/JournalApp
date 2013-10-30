window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
		new JournalApp.Routers.Posts({
			$rootEl: $('#posts-content'),
			$sideEl: $('#posts-sidebar')
		 });
		Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
