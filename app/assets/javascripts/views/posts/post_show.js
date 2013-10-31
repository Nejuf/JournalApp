JournalApp.Views.PostShow = Backbone.View.extend({
	template: JST["posts/show"],

	initialize: function(options) {
		//this.$el.on("click", "a.edit", this.onBtnEdit);
		this.$el.on("dblclick", "div.dblclick-field", this.onFieldDblClick.bind(this));
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

	// onBtnEdit: function(event) {
	//
	// },

	onFieldDblClick: function(event) {
		var that = this;
		var $div = $(event.currentTarget);
		var attrName = $div.data("attr");
		$div.empty();
		var $fieldInput;

		switch(attrName) {
			case "title":
				$fieldInput = $("<input type=\"text\">");
				$fieldInput.attr("value", that.model.get("title"));
			break;
			case "body":
				$fieldInput = $("<textarea></textarea");
				$fieldInput.text(that.model.get("body"));
			break;
		};

		$div.append($fieldInput);

		$fieldInput.on("blur", function(event){
			var prevValue = that.model[attrName];
			that.model.set(attrName, $fieldInput.val());//Note val() instead of text() -- because of textarea

			var errors = that.model.validate() || [];
			if(errors.length == 0){
				console.log("Post body updated")
				$fieldInput.off("blur");
				that.model.save();
				$div.empty();
				$div.text(that.model.get(attrName));
			}
			else {
				that.model.set(attrName, prevValue);
				console.log("Error editing post body. ")
				console.log(errors);
			}
		});
	},
});