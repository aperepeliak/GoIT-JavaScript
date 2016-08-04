function Model(data) {

    // In order to create class instances
    var self = this;

    // This is an array for ToDoList
    self.data = data;
    var oldIndex;

    self.addItem = function (item) {
        if (item.length === 0)
            return;
        self.data.push(item);
        return self.data;
    };

    self.removeItem = function (item) {
        var index = self.data.indexOf(item);
        if (index === -1)
            return;

        self.data.splice(index, 1);
        return self.data;
    };

    self.editItem = function(item) {
        oldIndex = self.data.indexOf(item);
        console.log("oldIndex = ", oldIndex);
    };

    self.changeItem = function (item) {
        if (item.length === 0)
            return;
        self.data[oldIndex] = item;
    };
}

function View(model) {
    var self = this;

    function init() {

        var wrapper = tmpl($('#wrapper-template').html());
        $('body').append(wrapper);

        self.elements = {
            input: $('.item-value'),
            addBtn: $('.item-add'),
            listContainer: $('.list')
        };

        self.renderList(model.data);
    }

    self.renderList = function (data) {
        var list = tmpl($('#list-template').html(), {data: data});
        self.elements.listContainer.html(list);
    };

    self.changeState = function (item) {
        checkStates();
        $("li:contains(" + item + ")").replaceWith('<li><input class="newInput" type="text" value="' + item + '"><span class="apply"> =</span></li>');

        self.elements.editInput = $('.newInput');
        self.elements.editInput.focus();
    };

    var checkStates = function() {
        var inputs = $('li > input');
        console.log('inputs = ', inputs);
        if (inputs.length)
            self.renderList(model.data);
    }

    init();
}

function Controller(model, view) {

    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-delete', removeItem);
    view.elements.listContainer.on('click', '.item-edit', editItem);
    view.elements.listContainer.on('click', '.apply', applyItem);


    function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }

    function removeItem() {
        var item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);
    }

    function editItem() {
        var item = $(this).attr('data-value');
        model.editItem(item);
        view.changeState(item);
    }

    function applyItem() {
        var newItem = view.elements.editInput.val();
        model.changeItem(newItem);
        view.renderList(model.data);
    }

}

$(function () {
    var firstToDoList = ['learn JS', 'learn C#', 'become a programmer'];
    var model = new Model(firstToDoList);

    var view = new View(model);
    var controller = new Controller(model, view);
});