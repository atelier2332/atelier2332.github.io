/*
*
* @ Thomas Lhoest - tlhoest@gmail.com
*
* */

var MLP = MLP || {};

(function(MLP){

    MLP.App = {

        load: function() {

            var loader = new createjs.LoadQueue();

            loader.on("progress", handleFileProgress, this);
            loader.on("fileload", handleFileLoad, this);
            loader.on("complete", handleComplete, this);

            loader.loadManifest([
                {id: 'arty', src:"img/gif/arty.gif"},
                {id: 'insp', src:"img/gif/insp.gif"},
                {id: 'retro', src:"img/gif/retro.gif"}
            ]);

            function handleFileProgress() {
                var h = 100 - (loader.progress * 100);
                $('#mask').css({'height': h+'%'});
            }

            function handleFileLoad(e) {
                var el = e.result;
                el.id = e.item.id;
                if(el.id == 'retro' || el.id == 'arty' || el.id == 'insp'){
                    $('#'+ el.id).append(el);
                }
            }

            function handleComplete() {
                // remove loader
                $('#loader').hide();
                $('#nav').removeClass('hide');
                $('#slider').removeClass('hide');

                MLP.App.start();
            }
        },

        start: function() {

            // hammer
            var hammertime = new Hammer(document.body);

            hammertime.on('swipe', function(e) {
                if(e.deltaX > 0){
                    nav('right');
                }else{
                    nav('left');
                }
            });

            // nav
            var current = 0;
            var width = $(window).width();

            function nav(direction) {
                switch (direction){
                    case 'left' :
                        if(current<4){
                            $('.slide').each(function() {
                                var left = $(this).offset().left - width;
                                $(this).offset({left: left});
                            });
                            current++;
                        }
                    break;
                    case 'right' :
                        if(current>0){
                            $('.slide').each(function() {
                                var left = $(this).offset().left + width;
                                $(this).offset({left: left});
                            });
                            current--;
                        }
                    break;
                }
                updatePagination(current);
            }

            function updatePagination(current) {
                var el = $('#nav div');
                el.removeClass('active');
                el.eq(current).addClass('active');
            }
        }
    };

})(MLP);

MLP.App.load();