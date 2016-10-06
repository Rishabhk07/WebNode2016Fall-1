/**
 * Created by championswimmer on 06/10/16.
 */

$(function () {

    showTodos();
    $('#addbtn').click(function () {
        saveTodo($('#todo').val());
        showTodos();

        // $.get('/addtodo', function (data) {
        //     console.log(data)
        // })

        $.post('/addtodo',
            {
                todo: $('#todo').val(),
                done: false
            },

            function (data) {
                console.log(data)

        })
    })

})

function attachHandlers() {
    $('.todocheck').change(function () {
        var todoId = $(this).parent().attr('id');
        doTodo(todoId, this.checked);
        showTodos();
    })

    $('.delbtn').click(function () {
        var todoId = $(this).parent().attr('id');
        delTodo(todoId);
        showTodos();
    })
}

function delTodo (todoId) {
    var todos = localStorage.getItem('todos');
    if (!todos) {
        return
    }
    todos = JSON.parse(todos);
    todos.splice(todoId, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
function doTodo (todoId, isDone) {
    var todos = localStorage.getItem('todos');
    if (!todos) {
        return
    }
    todos = JSON.parse(todos);
    todos[todoId].done = isDone;
    localStorage.setItem('todos', JSON.stringify(todos));

}

function saveTodo (newTodo) {
    var todos = localStorage.getItem('todos');
    if (!todos) {
        todos = [];
    } else {
        todos = JSON.parse(todos)
    }

    todos.push({todo: newTodo, done: false});
    localStorage.setItem('todos', JSON.stringify(todos));
}

function showTodos () {
    var todos = localStorage.getItem('todos');
    if (!todos) {
        return
    }
    todos = JSON.parse(todos);

    var todoList = "";
    for (var i = 0; i < todos.length; i++) {

        var thisTodo;

        if (todos[i].done) {
            thisTodo = "<li id='" + i + "' class='todoitem'>"
                + "<input checked class='todocheck' type='checkbox'>"
                + "<span style='text-decoration: line-through'>" + todos[i].todo + "</span>"
                + "<button class='delbtn'>x</button>"
                + "</li>"
        } else {
            thisTodo = "<li id='" + i + "' class='todoitem'>"
                + "<input class='todocheck' type='checkbox'>"
                + "<span>" + todos[i].todo + "</span>"
                + "<button disabled class='delbtn'>x</button>"
                + "</li>"
        }




        todoList = thisTodo + todoList;
    }

    $('#todolist').html(todoList)
    attachHandlers();
}