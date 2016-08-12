define(
    // module name
    'view',

    // dependencies list
    ['model', 'tmpl', 'jquery'],

    // module description
    function (model) {

        return {
            init() {

                const wrapper = tmpl($('#wrapper-template').html());
                $('body').append(wrapper);

                this.elements = {
                    input: $('.item-value'),
                    addBtn: $('.item-add'),
                    listContainer: $('.list')
                };

                this.renderList(model.data);
            },

            renderList(data) {
                const list = tmpl($('#list-template').html(), {data: data});
                this.elements.listContainer.html(list);
            },

            checkStates() {
                const inputs = $('li > input');
                if (inputs.length)
                    this.renderList(model.data);
            },

            changeState(item) {
                this.checkStates();

                let $elem = $("li").filter(function() {
                    return $.trim($(this).text()) === item;
                });
                $elem.replaceWith('<li class="list__item--edit"><input class="newInput" type="text" value="' + item + '"><span class="apply"></span></li>');

                this.elements.editInput = $('.newInput');
                this.elements.editInput.focus();
            }
        }
    }
);