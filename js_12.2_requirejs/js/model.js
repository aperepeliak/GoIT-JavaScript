define (
    // module name
    'model',

    // dependencies list
    [],

    // module description
    function (data) {

        self.removeItem = function (item) {
            var index = self.data.indexOf(item);
            if (index === -1)
                return;

            self.data.splice(index, 1);
            return self.data;
        };

        self.editItem = function(item) {
            oldIndex = self.data.indexOf(item);
        };

        self.changeItem = function (item) {
            if (item.length === 0)
                return;
            self.data[oldIndex] = item;
        };


        // return is a must
        return {
            data: data,
            oldIndex: 0,

            addItem: function (item) {
                if (item.length === 0)
                    return;
                self.data.push(item);
                return self.data;
            }

            
        }
    }
);