import {Todo} from '../models/todo-model' 
import Backbone from 'backbone'
import _ from 'underscore'

export const TodoView = Backbone.View.extend({
    tagName: 'li',
    model: Todo,
    events: {
        'click #check': "onTodoClick",
        'click #content': "onTodoClick",
        "click .edit": "onTodoEdit",
        "click .update": "onTodoUpdate",
        "click .remove": 'onTodoRemove',
    },
    onTodoUpdate: function (e) {
        this.model.updateContent()
    },
    onTodoEdit: function () {
        this.model.toggleEdit()
    },
    onTodoRemove: function () {
        this.model.destroy()
    },
    onTodoClick: function () {
        this.model.toggleCheck()
    },
    initialize: function () {
        this.listenTo(this.model, 'change', this.render)
    },
    render: function () {
        this.template = _.template(`
            <div class="todo-data">
                <% if (checked){ %>
                        <input type="checkbox" id= "check" checked/>
                <% } else { %>
                        <input type="checkbox" id= "check"/>
                <% } %>
                <% let strike = checked ? 'line-through' : 'none'; %>
                <% if(edit){%>
                    <input id="content-field" type="text" value="<%= content %>"/>
                <% } else {%>
                    <span style="text-decoration : <%= strike %> " id="content">
                        <%= content %>
                    </span>
                <% } %>
            </div>
            <div>
                <% if(edit){%>
                    <button class="update">update</button>
                <% } else {%>
                    <button class="edit">edit</button>
                <% } %>
                <button class="remove">Remove</button>
            </div>
        `)
        this.$el.html(this.template(this.model.toJSON()))

        return this
    }
})
