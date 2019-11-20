
import {Todo} from '../models/todo-model'
import Backbone from 'backbone'

export const TodoCollection = Backbone.Collection.extend({
    model: Todo
})