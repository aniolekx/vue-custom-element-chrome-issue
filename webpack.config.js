var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('vue_components', './assets/web_components/main.js')
    .disableSingleRuntimeChunk()
    .enableSourceMaps(false)
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableVueLoader().configureBabel((babelConfig) => {
        babelConfig.presets = [
            [
                '@babel/preset-env', {
                    targets: {
                        ie: '11',
                    },
                },
            ],
        ];

    })
;

module.exports = Encore.getWebpackConfig();
