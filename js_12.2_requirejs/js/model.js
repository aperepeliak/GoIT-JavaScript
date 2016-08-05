define(
    // module name
    'model',

    // dependencies list
    [],

    // module description
    function () {

        // return is a must
        return {
            data: [],
            oldIndex: 0,

            init: function (data) {
                this.data = data;
            },

            addItem: function (item) {
                if (item.length === 0)
                    return;
                this.data.push(item);
                return this.data;
            },

            removeItem: function (item) {
                var index = this.data.indexOf(item);
                if (index === -1)
                    return;

                this.data.splice(index, 1);
                return this.data;
            },

            editItem: function (item) {
                this.oldIndex = this.data.indexOf(item);
            },

            changeItem: function (item) {
                if (item.length === 0)
                    return;

                this.data[this.oldIndex] = item;
            }
        }
    }
);