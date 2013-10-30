JournalApp.Routers.Posts = Backbone.Router.extend({
	routes: {
		"": "index",
		"posts": "index",
		"posts/:id": "show"
	},

	initialize: function(options){
		this.container = options.container;
	},

	index: function(){
		this.container.empty();
		var that = this;

		var postsCollection = new JournalApp.Collections.Posts();
		postsCollection.fetch({

			success: function(collection, response, options){
		    var indexView = new JournalApp.Views.PostsIndex({
		    	collection: collection
		    });
				that.container.append(indexView.render().$el);
			}

		});
	},

	show: function(id){
		this.container.empty();
		var that = this;

		var postModel = new JournalApp.Models.Post();
		postModel.id = id;
		postModel.fetch({//Problem fetching data for a single post.  Can't it be done without the collection?
		//Improper url perhaps?  Or maybe the controller is not serving JSON for showing a post... I think that's it.

			success: function( model, response, options ){
				var showView = new JournalApp.Views.PostShow({ model: model });
				that.container.append(showView.render().$el);
			}

		});
	}

});
