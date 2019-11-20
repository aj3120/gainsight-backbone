import {TodoView} from './todo-view'
import {TodoCollection} from '../collections/todo-collection'
import Backbone from 'backbone'

export const TodoViewContainer = Backbone.View.extend({
    tagName: "ul",
    model: TodoCollection,
    initialize: function () {
        this.listenTo(this.model, 'remove', this.render)
        this.listenTo(this.model, 'add', this.render)
        this.listenTo(this.model, 'change', this.render)

    },
    render: function () {
        this.$el.html('')
        this.model.toArray().forEach((todo) => {
            const todo_view = new TodoView({ model: todo })
            this.$el.append(todo_view.render().el)
        })
        return this
    }

})