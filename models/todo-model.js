import $ from 'jquery'
import Backbone from 'backbone'

export const Todo = Backbone.Model.extend({
    default: {
        content: "",
        checked: false,
        edit: false,
    },
    updateContent: function () {
        this.set('content', $('#content-field').val())
        this.set('edit', !this.get('edit'))
    },
    toggleCheck: function () {
        this.set('checked', !this.get('checked'))
    },
    toggleEdit: function () {
        this.set('edit', !this.get('edit'))
    }
})
