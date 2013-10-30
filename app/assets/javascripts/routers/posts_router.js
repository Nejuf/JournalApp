JournalApp.Routers.Posts = Backbone.Router.extend({
	routes: {
		"": "index",
		"posts": "index",
		"posts/:id": "show",
		"posts/:id/edit": "edit",
	},

	initialize: function(options){
		this.$rootEl = options.$rootEl;
	},

	_swapView: function(newView) {
		this._currentView && this._currentView.remove();
		this._currentView = newView;
		this.$rootEl.html(newView.render().$el);
	},

	index: function(){
		var that = this;

		var postsCollection = new JournalApp.Collections.Posts();
		postsCollection.fetch({

			success: function(collection, response, options){
		    var indexView = new JournalApp.Views.PostsIndex({
		    	collection: collection
		    });
				// that.$rootEl.append(indexView.render().$el);
				that._swapView(indexView);
			}

		});
	},

	show: function(id){
		var that = this;

		var postModel = new JournalApp.Models.Post();
		postModel.id = id;
		postModel.fetch({

			success: function( model, response, options ){
				var showView = new JournalApp.Views.PostShow({ model: model });
				// that.$rootEl.append(showView.render().$el);
				that._swapView(showView);
			}

		});
	},

	edit: function(id) {
		var that = this;

		var postModel = new JournalApp.Models.Post();
		postModel.id = id;
		postModel.fetch({

			success: function( model, response, options ) {
				var editView = new JournalApp.Views.PostEdit({ model: model });
				that._swapView(editView);
			}
		});
	}

});
