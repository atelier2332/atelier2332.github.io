app.factory('Presets', function($firebase){

    /*var ref = new Firebase("https://zuunduun.firebaseio.com/effects");
    var sync = $firebase(ref).$asObject();*/

    /*var effects = $firebase(ref.child('-JhkM3MFNwEd5Lp4WEk3')).$asObject();

    console.log(effects);*/

    /*var effects = {

        bloom: {
            title: 'Bloom',
            active: true,
            params: {
                opacity: {
                    title: 'Amount',
                    type: 'range',
                    val: 1,
                    min: 0.0,
                    max: 2.0,
                    step: 0.01
                }
            }
        },

        pixelate: {
            title: 'Pixelate',
            active: false,
            params: {
                pixelSize: {
                    title: 'Size',
                    type: 'range',
                    val: 100,
                    min: 1.0,
                    max: 300,
                    step: 1
                }
            }
        },

        focus: {
            title: 'Focus',
            active: true,
            params: {
                sampleDistance: {
                    title: 'Distance',
                    type: 'range',
                    val: 0.94,
                    min: 0.0,
                    max: 2.0,
                    step: 0.01
                },
                waveFactor: {
                    title: 'Wave',
                    type: 'range',
                    val: 0.00125,
                    min: 0.0,
                    max: 0.01,
                    step: 0.00001
                }
            }
        },

        RGBShift: {
            title: 'RGB Shift',
            active: true,
            params: {
                amount: {
                    title: 'Amount',
                    type: 'range',
                    val: 0.005,
                    min: 0.0,
                    max: 0.100,
                    step: 0.001
                },
                angle: {
                    title: 'Angle',
                    type: 'range',
                    val: 0.0,
                    min: 0.0,
                    max: 7.0,
                    step: 0.001
                }
            }
        },

        technicolor: {
            title: 'Technicolor',
            active: false
        },

        BC: {
            title: 'Brightness / Contrast',
            active: true,
            params: {
                brightness: {
                    title: 'Brightness',
                    type: 'range',
                    val: 0.10,
                    min: -1.00,
                    max: 1.00,
                    step: 0.01
                },

                contrast: {
                    title: 'Contrast',
                    type: 'range',
                    val: 0.10,
                    min: -1.00,
                    max: 1.00,
                    step: 0.01
                }
            }
        },

        film: {
            title: 'Film',
            active: false,
            params: {
                nIntensity: {
                    title: 'Noise',
                    type: 'range',
                    val: 0.50,
                    min: 0.00,
                    max: 2.00,
                    step: 0.01
                },
                    
                sIntensity: {
                    title: 'Scanlines intensity',
                    type: 'range',
                    val: 0.3,
                    min: 0.0,
                    max: 2.0,
                    step: 0.001
                },

                sCount: {
                    title: 'Scanlines count',
                    type: 'range',
                    val: 2,
                    min: 0,
                    max: 10,
                    step: 1
                },

                grayscale: {
                    title: 'Grayscale',
                    type: 'checkbox',
                    val: false
                }
            }
        },

        kaleidoscope: {
            title: 'Kaleidoscope',
            active: false,
            params: {
                sides: {
                    title: 'Sides',
                    type: 'range',
                    val: 6,
                    min: 0,
                    max: 100,
                    step: 1
                },
                    
                angle: {
                    title: 'Angle',
                    type: 'range',
                    val: 0,
                    min: 0,
                    max: 360,
                    step: 1
                }
            }
        },

        C64: {
            title: 'C64',
            active: true
        },

        dither: {
            title: 'Dithering',
            active: true
        },

        bleach: {
            title: 'Bleach',
            active: true,
            params: {
                opacity: {
                    title: 'Opacity',
                    type: 'range',
                    val: 1.0,
                    min: 0.0,
                    max: 1.0,
                    step: 0.1
                }
            }
        },

        HS: {
            title: 'Hue/Saturation',
            active: true,
            params: {
                hue: {
                    title: 'Hue',
                    type: 'range',
                    val: 1.0,
                    min: 0.0,
                    max: 2.0,
                    step: 0.1
                },

                saturation: {
                    title: 'Saturation',
                    type: 'range',
                    val: 1.0,
                    min: 0.0,
                    max: 1.1,
                    step: 0.1
                }
            }
        },

        SSAO: {
            title: 'SSAO',
            active: false,
            params: {
                cameraNear: {
                    title: 'cameraNear',
                    type: 'range',
                    val: 1,
                    min: 0,
                    max: 200,
                    step: 1
                },
                    
                cameraFar: {
                    title: 'cameraFar',
                    type: 'range',
                    val: 100,
                    min: 0,
                    max: 200,
                    step: 1
                },

                aoClamp: {
                    title: 'aoClamp',
                    type: 'range',
                    val: 0.0,
                    min: 0.0,
                    max: 10.0,
                    step: 0.1
                },

                lumInfluence: {
                    title: 'lumInfluence',
                    type: 'range',
                    val: 0.0,
                    min: 0.0,
                    max: 10.0,
                    step: 0.1
                }
            }
        }
    };*/

    return {
        all: effects,

        save: function(effects){
            //
        }
    };
});