var Materials = (function(){

    //--------------------------------------------------

    var m0 = new NoisySurface(Textures.t0);

    //--------------------------------------------------

    var m1 = new NoisySurface(Textures.t1);

    //--------------------------------------------------

    var m5 = new ColorFluids(1, 1);
    m5.uniforms['time'].value += 3;


    return{

        m1: m1,
        m5: m5,

        render: function(t){
            if(SpectralPlayer.getFFT()[0] !== undefined){

                m1.uniforms['time'].value = t * 0.00002 * (SpectralPlayer.getFFT()[100]/5);

                m5.uniforms['time'].value += SpectralPlayer.getFFT()[70] * 0.01;
                m5.uniforms['resolution'].value.x = SpectralPlayer.getFFT()[20] + 1;
                m5.uniforms['resolution'].value.y = SpectralPlayer.getFFT()[100] + 1;
            }
        }
    }
})();
