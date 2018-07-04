require.config({

    packages: [
        {
            name: 'physicsjs',
            location: 'vendor',
            main: 'physicsjs-full-0.6.0'
        }
    ],

    paths: {
        modernizr: 'libs/modernizr'
    },

    shim: {

        'modernizr': {
            exports: 'Modernizr'
        }

    }
});

require(['modernizr', 'app'], function (Modernizr, App) {

    if (Modernizr.webgl && Modernizr.canvas){

        App.load();

    } else {

        window.location.href = 'form.html';
    }
});