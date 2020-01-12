module.exports = {

    pwa: {

        name: 'Vue PWA Seed',
        short_name: 'Vue PWA',
        themeColor: '#263238',
        msTileColor: '#263238',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'default',
        assetsVersion: 1578778473305,

        // https://developer.mozilla.org/en-US/docs/Web/Manifest
        manifestOptions: {

            scope: '/',
            start_url: '/',

            theme_color: '#263238',
            background_color: '#263238',

            orientation: 'portrait',
            display: 'fullscreen', // standalone

            description: 'Progressive Web App project seed built with Vue.js.',

            icons: [

                {
                    src: '/img/icons/android-chrome-36x36.png',
                    sizes: '36x36',
                    "type": 'image/png'
                },

                {
                    src: '/img/icons/android-chrome-48x48.png',
                    sizes: '48x48',
                    type: 'image/png'
                },

                {
                    src: '/img/icons/android-chrome-72x72.png',
                    sizes: '72x72',
                    type: 'image/png'
                },

                {
                    src: '/img/icons/android-chrome-96x96.png',
                    sizes: '96x96',
                    type: 'image/png'
                },

                {
                    src: '/img/icons/android-chrome-144x144.png',
                    sizes: '144x144',
                    type: 'image/png'
                },

                {
                    src: '/img/icons/android-chrome-192x192.png',
                    sizes: '192x192',
                    type: 'image/png'
                },

                {
                    src: '/img/icons/android-chrome-256x256.png',
                    sizes: '256x256',
                    type: 'image/png'
                },

                {
                    src: '/img/icons/android-chrome-384x384.png',
                    sizes: '384x384',
                    type: 'image/png'
                },

                {
                    src: '/img/icons/android-chrome-512x512.png',
                    sizes: '512x512',
                    type: 'image/png'
                }

            ],

        }

    }

}
