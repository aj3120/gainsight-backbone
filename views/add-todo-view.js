import {TodoCollection} from '../collections/todo-collection'
import $ from 'jquery'
import Backbone from 'backbone'
import _ from 'underscore'
import {Todo} from '../models/todo-model'

export const AddTodoView = Backbone.View.extend({
    tagName:'div',
    model:TodoCollection,
    events : {
        'click #add-new-todo': 'addNewTodo', 
    },

    addNewTodo : function(){
        let newModel = new Todo({
            content:$('#new-todo-content').val(),
            checked:false,
            edit:false
        })  
        $('#new-todo-content').val('')
        this.model.add(newModel)
        
    },
    render:function(){
        this.template = _.template(`
            <div class="add-todo">
                <input type="text" placeholder="Enter content here ... " id="new-todo-content">
                <button id="add-new-todo">Add</button>
            </div>
        `)
        
        this.$el.html(this.template())
        
        return this
    }
})
