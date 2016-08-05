requirejs.config({
    paths: {
        'jquery': 'jquery',
        'tmpl': 'tmpl'
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        },
        'tmpl': {
            exports: 'tmpl'
        }
    }
});

require(
    // accepts 3 params
    // 1) module name - optional

    // 2) dependencies list (modules to load)
    [
        'model',
        'view',
        'controller',
        'jquery',
        'tmpl'
    ],

    // invoked function after all modules were loaded. This is an application start point
    function (model, view, controller, tmpl, $) {
        var firstToDoList = ['learn JS', 'learn C#', 'become a programmer'];
        model.init(firstToDoList);
        view.init(model.data);
        controller.init(model, view);
    }
);