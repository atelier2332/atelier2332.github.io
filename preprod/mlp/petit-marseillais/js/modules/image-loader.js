define(function(){

    var ImageLoader = {};

    ImageLoader.load = function(path, images, loaded){

            var nbLoaded = 0;
            var total = images.length;

            function load(i) {

                var image = new Image();
                image.id = images[i];

                image.addEventListener('load', function(e) {

                    nbLoaded ++;

                    var progress = nbLoaded / total;

                    return loaded.apply(this, [progress, image]);

                }, false);
                image.src = path + images[i];
            }

            for (var i = 0; i < total; i++) {
                load(i);
            }
    };

    return ImageLoader;
});