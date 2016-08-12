function Model(_data) {

    // This is an array for ToDoList
    this.data = _data;
    let oldIndex;

    this.addItem = (item) => {

        if (item.length === 0)
            return;
        this.data.push(item);
        return this.data;
    };

    this.removeItem = (item) => {
        let index = this.data.indexOf(item);
        if (index === -1)
            return;

        this.data.splice(index, 1);
        return this.data;
    };

    this.editItem = (item) => {
        oldIndex = this.data.indexOf(item);
    };

    this.changeItem = (item) => {
        if (item.length === 0)
            return;
        this.data[oldIndex] = item;
    };
}

function View(model) {

    let init = () => {

        let wrapper = tmpl($('#wrapper-template').html());
        $('body').append(wrapper);
        this.elements = {

            input: $('.item-value'),
            addBtn: $('.item-add'),
            listContainer: $('.list')
        };

        this.renderList(model.data);
    };

    this.renderList = (data) => {
        let list = tmpl($('#list-template').html(), { data: data });
        this.elements.listContainer.html(list);
    };

    this.changeState = (item) => {
        this.checkStates();

        let $elem = $("li").filter(function () {
            return $.trim($(this).text()) === item;
        });
        $elem.replaceWith('<li class="list__item--edit"><input class="newInput" type="text" value="' + item + '"><span class="apply"></span></li>');


        this.elements.editInput = $('.newInput');
        this.elements.editInput.focus();
    };

    this.checkStates = () => {
        let inputs = $('li > input');
        if (inputs.length)
            this.renderList(model.data);
    };

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
    const firstToDoList = ['learn JS', 'learn C#', 'become a programmer'];
    const model = new Model(firstToDoList);
    const view = new View(model);
    const controller = new Controller(model, view);
});