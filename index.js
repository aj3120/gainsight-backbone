import {Todo} from './models/todo-model'
import {TodoCollection} from './collections/todo-collection'
import {AppContainer} from './views/app-view'

let todo1 = new Todo({
    content: "Adarsh",
    checked: false,
    edit: false,
})


let todo2 = new Todo({
    content: "Vijay",
    checked: false,
    edit: false,
})


let todos = new TodoCollection([todo1, todo2])
new AppContainer({model:todos})