JournalApp.Routers.Posts = Backbone.Router.extend({
	routes: {
		"": "index",
		"posts": "index",
		"posts/new": "newForm",
		"posts/:id/edit": "edit",
		"posts/:id": "show",
	},

	initialize: function(options){
		this.$rootEl = options.$rootEl;
		this.$sideEl = options.$sideEl;

		var that = this;

		this.masterCollection = new JournalApp.Collections.Posts();
		this.masterCollection.fetch({

			success: function(collection, response, options){
		    var indexView = new JournalApp.Views.PostsIndex({
		    	collection: collection
		    });

				indexView.listenTo(collection, "add change:title reset remove sync", indexView.render);

				that.$sideEl.html(indexView.render().$el);
			}

		});
	},

	_swapView: function(newView) {
		this._currentView && this._currentView.remove();
		this._currentView = newView;
		this.$rootEl.html(newView.render().$el);
	},

	index: function(){
		var indexView = new JournalApp.Views.PostsIndex({	collection: this.masterCollection });
		this._swapView(indexView);
	},

	newForm: function() {
		var postModel = new JournalApp.Models.Post();
		var formView = new JournalApp.Views.PostForm({
			model: postModel,
			collection: this.masterCollection
		});

		this._swapView(formView);
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
