import $ from 'jquery'
import Backbone from 'backbone'
import {TodoViewContainer} from './todo-container-view'
import {AddTodoView} from './add-todo-view'

export const AppContainer = Backbone.View.extend({
    el: $('#app'),
    initialize: function () {
        this.render();
    },
    render: function () {
        const todo_container = new TodoViewContainer({ model: this.model })
        const add_todo_view = new AddTodoView({model:this.model})
        this.$el.html(todo_container.render().el)
        this.$el.append(add_todo_view.render().el)
    }

})
