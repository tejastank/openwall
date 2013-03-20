var Application = Backbone.Router.extend({

  routes: {
    "": "welcome",    // #help
    //"note/id:page": "note",    // #help
    "infra": "infra",
    "people": "people",
    "events": "events",
    "career": "career",
    "feedback": "feedback",
    "aboutus": "aboutus",
  },
  initialize:function () {
      //var tmp = QWeb.render("menu", mainroutes);
	  //$("#menuitems").append(tmp);
	  $("#menuitems > li").click(function(e){ $("#menuitems > li").removeClass('active'); $(this).addClass("active"); });
  },
  welcome: function(){ 
        this['welcome'] = new Homepage({});
  },
  people: function() {
        var listname = 'customerlist';
        var modelname = 'customers';
        if(_.has(this, listname)){
            this[listname].render();
        }else{
            var modelscollect = eval("new "+modelname+"()");
            modelscollect.add(people_data);
            this[listname] = new PeopleKanban({models: modelscollect, columns: modelscollect.columns});
            console.log("# : init" , modelname, listname);
        }
  },
});



// json format demo data.


