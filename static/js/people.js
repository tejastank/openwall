
// customer Model.
window.customer = Backbone.Model.extend({
    defaults:{
        "id": _.uniqueId('pid'),
        "name": _.uniqueId('People Name'),
        "address": '',
        "city": 'Surat',
        "state": 'Gujarat',
        "country": 'India',
        "email": 'test@demoserver.com',
        "mobile": '',
        "category": 'all',
        "image": 'placeholder.png',
    }
});
// Collection
var customers = Backbone.Collection.extend({
    model:customer,
    columns:['ID','Name','Address','city','State','Country','Email','Mobile','Category'],

});

PeopleKanban = Backbone.View.extend({
	initialize: function(options){	
	    this.models = options.models;
	    this.columns = options.columns;
	    console.log("# >>: ",  this);
	    if(this.models){
    	    this.render();	
	    }
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
        var tmp = "";
        var data = {};
        data.columns = this.columns;
        data.records = this.models.toJSON();
	    tmp = QWeb.render("kanban", data);
		//$(this.el).html(tmp);
		this.$el.append(tmp);
	    this.$el.appendTo($selector);
		
	},
	events: {
		//"click input[id=head_checkbox]": "selectall",
	},
});


ListView = Backbone.View.extend({
	initialize: function(options){	
	    this.models = options.models;
	    this.columns = options.columns;
	    console.log("# >>: ",  this);
	    if(this.models){
    	    this.render();	
	    }
	},
	render: function(){
	    this._render();
	},
	_render: function(selector){
	    // selector, jquery selector id/class/parameter
	    if(!selector){
	        selector = "#screen_main";
	    }
	    $(selector).empty();
	    this.$el.empty();
        var tmp = "";
        var data = {};
        data.columns = this.columns;
        data.records = this.models.toJSON();
	    tmp = QWeb.render("kanban", data);
		//$(this.el).html(tmp);
		this.$el.append(tmp);
	    this.$el.appendTo($(selector));
		
	},
	events: {
		//"click input[id=head_checkbox]": "selectall",
	},
});



// loading data.


var people_data = [ 
    {'id':_.uniqueId(), 'name':_.uniqueId('Tejas Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Dish T Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Nidhi Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Aplesh Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Pintudi ;)')},   
    {'id':_.uniqueId(), 'name':_.uniqueId('Tejas Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Dish T Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Nidhi Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Aplesh Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Pintudi ;)')},   
    {'id':_.uniqueId(), 'name':_.uniqueId('Tejas Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Dish T Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Nidhi Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Aplesh Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Pintudi ;)')},   
    {'id':_.uniqueId(), 'name':_.uniqueId('Tejas Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Dish T Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Nidhi Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Aplesh Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Pintudi ;)')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Nidhi Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Aplesh Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Pintudi ;)')},   
    {'id':_.uniqueId(), 'name':_.uniqueId('Tejas Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Dish T Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Nidhi Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Aplesh Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Pintudi ;)')},   
    {'id':_.uniqueId(), 'name':_.uniqueId('Tejas Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Dish T Tank')},
   
]
