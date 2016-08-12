define(
    // module name
    'controller',

    // dependencies list
    ['model', 'view'],

    // module description
    function (model, view) {

        return {

            init(view) {
                view.elements.addBtn.on('click', this.addItem);
                view.elements.listContainer.on('click', '.item-delete', this.removeItem);
                view.elements.listContainer.on('click', '.item-edit', this.editItem);
                view.elements.listContainer.on('click', '.apply', this.applyItem);
            },

            addItem() {
                const newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            },

            removeItem() {
                const item = $(this).attr('data-value');
                model.removeItem(item);
                view.renderList(model.data);
            },

            editItem() {
                const item = $(this).attr('data-value');
                model.editItem(item);
                view.changeState(item);
            },

            applyItem() {
                const newItem = view.elements.editInput.val();
                model.changeItem(newItem);
                view.renderList(model.data);
            }
        }
    }
);