function Model(_data) {

    // This is an array for ToDoList
    this.data = _data;
    let oldIndex;

    this.addItem = (item) => {

        if (item.length === 0)
            return;
        this.data.push(item);
        return data;
    };

    this.removeItem = (item) => {
        let index = data.indexOf(item);
        if (index === -1)
            return;

        this.data.splice(index, 1);
        return data;
    };

    this.editItem = (item) => {
        oldIndex = data.indexOf(item);
    };

    this.changeItem = (item) => {
        if (item.length === 0)
            return;
        data[oldIndex] = item;
    };
}

function View(model) {

    this.init = () => {

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
        let list = tmpl($('#list-template').html(), {data: data});
        this.elements.listContainer.html(list);
    };

    this.changeState = (item) => {
        this.checkStates();
        $("li:contains(" + item + ")").replaceWith('<li class="list__item--edit"><input class="newInput" type="text" value="' + item + '"><span class="apply"></span></li>');

        this.elements.editInput = $('.newInput');
        this.elements.editInput.focus();
    };

    this.checkStates = () => {
        let inputs = $('li > input');
        if (inputs.length)
            this.renderList(model.data);
    };

    this.init();
}

function Controller(model, view) {
    debugger;
    view.elements.addBtn.on('click', this.addItem);
    view.elements.listContainer.on('click', '.item-delete', this.removeItem);
    view.elements.listContainer.on('click', '.item-edit', this.editItem);
    view.elements.listContainer.on('click', '.apply', this.applyItem);


    this.addItem = () => {
        let newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    };

    this.removeItem = () => {

        let item = $(this).attr('data-value');
        model.removeItem(item);
        view.renderList(model.data);
    };

    this.editItem =() => {
        let item = $(this).attr('data-value');
        model.editItem(item);
        view.changeState(item);
    };

    this.applyItem = () => {
        let newItem = view.elements.editInput.val();
        model.changeItem(newItem);
        view.renderList(model.data);
    };
}

$(function () {
    const firstToDoList = ['learn JS', 'learn C#', 'become a programmer'];
    const model = new Model(firstToDoList);

    console.log(model);

    const view = new View(model);
    const controller = new Controller(model, view);
});