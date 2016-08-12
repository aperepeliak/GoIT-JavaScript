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

            init(data) {
                this.data = data;
            },

            addItem(item) {
                if (item.length === 0)
                    return;
                this.data.push(item);
                return this.data;
            },

            removeItem(item) {
                const index = this.data.indexOf(item);
                if (index === -1)
                    return;

                this.data.splice(index, 1);
                return this.data;
            },

            editItem(item) {
                this.oldIndex = this.data.indexOf(item);
            },

            changeItem(item) {
                if (item.length === 0)
                    return;

                this.data[this.oldIndex] = item;
            }
        }
    }
);