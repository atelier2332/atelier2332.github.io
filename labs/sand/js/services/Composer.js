app.factory('Composer', function($rootScope, World){

    var width = window.innerWidth;
    var height = window.innerHeight;

    var composer, renderPass;

    /* SHADERS
    =========================
    */

    var _effects = {};
    var copyPass = new THREE.ShaderPass(THREE.CopyShader);

    _effects.RGBShift = new THREE.ShaderPass(THREE.RGBShiftShader);
    _effects.technicolor = new THREE.ShaderPass(THREE.TechnicolorShader);
    _effects.kaleidoscope = new THREE.ShaderPass(THREE.KaleidoShader);
    _effects.edge = new THREE.ShaderPass(THREE.EdgeShader);
    _effects.HS = new THREE.ShaderPass(THREE.HueSaturationShader);
    _effects.bleach = new THREE.ShaderPass(THREE.BleachBypassShader);
    _effects.dither = new THREE.ShaderPass(THREE.DitherShader);
    _effects.C64 = new THREE.ShaderPass(THREE.C64Shader);
    _effects.vignette = new THREE.ShaderPass(THREE.VignetteShader);
    _effects.BC = new THREE.ShaderPass(THREE.BrightnessContrastShader);

    _effects.glitch = new THREE.GlitchPass();
    _effects.bloom = new THREE.BloomPass();
    _effects.film = new THREE.FilmPass();

    _effects.HTS = new THREE.ShaderPass(THREE.HorizontalTiltShiftShader);
    _effects.HTS.uniforms['h'].value = 1 / width;
    _effects.VTS = new THREE.ShaderPass(THREE.VerticalTiltShiftShader);
    _effects.VTS.uniforms['v'].value = 1 / height;

    _effects.SSAO = new THREE.ShaderPass(THREE.SSAOShader);
    _effects.SSAO.uniforms['size'].value.x = width;
    _effects.SSAO.uniforms['size'].value.y = height;

    _effects.pixelate = new THREE.ShaderPass(THREE.PixelateShader);
    _effects.pixelate.uniforms['size'].value.x = width;
    _effects.pixelate.uniforms['size'].value.y = height;

    _effects.focus = new THREE.ShaderPass(THREE.FocusShader);
    _effects.focus.uniforms['screenWidth'].value = width;
    _effects.focus.uniforms['screenHeight'].value = height;

    _effects.FXAA = new THREE.ShaderPass(THREE.FXAAShader);
    _effects.FXAA.uniforms['resolution'].value.set(1/width, 1/height);

    //=====================================================

    $rootScope.$on('WorldLoaded', function(e, a){
        a.renderer.autoClear = false;
        var renderTarget = new THREE.WebGLRenderTarget(width, height, {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBFormat,
            stencilBuffer: true
        });
        composer = new THREE.EffectComposer(a.renderer, renderTarget);
        renderPass = new THREE.RenderPass(a.scene, a.camera);
    });

    return {

        render: function(delta) {
            composer.render(delta);
        },

        setEffects: function(effects){
            angular.forEach(effects, function(options, effect){
                angular.forEach(options.params, function(options, param){
                    _effects[effect].uniforms[param].value = options.val;
                });
            });
        },

        setEffect: function(effect, param, val){
            _effects[effect].uniforms[param].value = val;
        },

        setChain: function(effects){
            composer.passes = [];
            composer.addPass(renderPass);
            angular.forEach(effects, function(options, effect){
                if (options.active){
                    composer.addPass(_effects[effect]);
                }
            });
            composer.addPass(copyPass);
            copyPass.renderToScreen = true;
        }
    };
});