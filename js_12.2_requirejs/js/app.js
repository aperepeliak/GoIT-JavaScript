require(
    // accepts 3 params
    // 1) module name - optional

    // 2) dependencies list (modules to load)
    [
        'model'
    ],

    // invoked function after all modules were loaded. This is an application start point
    function (model) {
        console.log('model = ', model);
    }
);