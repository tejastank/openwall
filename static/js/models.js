// Note Models
window.Note = Backbone.Model.extend({
    defaults:{
        "id":null,
        "name":"",
    }
});
// Collection
var Notes = Backbone.Collection.extend({
    model:Note,
    columns:['ID','Name'],
   // url: 'notes' // When use create method or related to it then we have to specifiy this.
});






var note_data = [ 
    {'id':_.uniqueId(), 'name':_.uniqueId('Tejas Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Dish T Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Nidhi Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Aplesh Tank')},
    {'id':_.uniqueId(), 'name':_.uniqueId('Pintudi ;)')},   
]
