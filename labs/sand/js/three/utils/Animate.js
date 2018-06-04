/*
=========================================
@author Thomas Lhoest - tlhoest@gmail.com
=========================================
*/

var Animate = (function(){

    var time = Date.now();
    
    return function(callback){
        return requestAnimationFrame(function update(){
            callback.call(this, time);
            time = Date.now();
            requestAnimationFrame(update);
        });
    };

})();