
Homepage = Backbone.View.extend({
	initialize: function(options){	
	    this._render();
	},
	render: function(){
	    this._render();
	},
	_render: function(selector){
	    // selector, jquery selector id/class/parameter
	    if(!selector){
	        selector = "#screen_main";
	    }
	    var $selector = $(selector);
            $selector.empty();
	    this.$el.empty();
        
        var data = {};
	    var tmp = QWeb.render("homepage", data);
		//$(this.el).html(tmp);
		
		
		this.$el.append(tmp);
	    this.$el.appendTo($selector);
		
	},
	events: {
		//"click input[id=head_checkbox]": "selectall",
	},
});
