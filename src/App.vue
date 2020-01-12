<template>

    <div id="app">

        <!-- TODO: Uncomment -->
        <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div> -->

        <!-- TODO: Uncomment -->
        <!-- <router-view/> -->

        <div class="a2hs">

            <button class="a2hs__button" @click="onInstallButtonClick" v-if="installButton">Добавить на домашний экран</button>

            <div class="a2hs__message" v-if="defaultMessage">
                Application already added.
            </div>

            <div class="a2hs__message" v-if="successMessage">
                Application successfully added!
            </div>

        </div>

    </div>

</template>

<script>

    export default {

        name: 'App',

        data: () => ( {

            deferredPrompt: null,

            installButton: false,
            defaultMessage: true,
            successMessage: false,

        } ),

        mounted() {

            /**
             * @see https://developers.google.com/web/fundamentals/app-install-banners/
             * @see https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen
             * @see https://developers.google.com/web/fundamentals/app-install-banners/promoting-install-mobile
             */

            /**
             * Uninstall desktop app
             * chrome://apps/
             */

            // Show the prompt.
            window.addEventListener( 'beforeinstallprompt', this.onBeforeInstallPrompt );

            // Determine if the app was successfully installed.
            window.addEventListener( 'appinstalled', this.onAppInstalled );

        },

        beforeDestroy() {

            window.removeEventListener( 'beforeinstallprompt', this.onBeforeInstallPrompt );
            window.removeEventListener( 'appinstalled', this.onAppInstalled );

        },

        methods: {

            onBeforeInstallPrompt( e ) {

                // Prevent Chrome 76 and later from showing the mini-infobar
                e.preventDefault();

                // Stash the event so it can be triggered later.
                this.deferredPrompt = e;

                // Show our user interface that shows our A2HS button
                this.installButton = true;
                this.defaultMessage = false;
                this.successMessage = false;

                console.log( 'a2hs', 'beforeinstallprompt', e );

            },

            onInstallButtonClick( e ) {

                if ( this.deferredPrompt ) {

                    e.preventDefault();

                    // Hide user interface that shows our A2HS button.
                    this.installButton = false;

                    // Show the prompt.
                    this.deferredPrompt.prompt();

                    // Wait for the user to respond to the prompt.
                    deferredPrompt.userChoice.then( ( choiceResult ) => {

                        if ( choiceResult.outcome === 'accepted' ) {

                            console.log( 'a2hs', 'User accepted the A2HS prompt.' );

                        } else {

                            console.log( 'a2hs', 'User dismissed the A2HS prompt.' );

                        }

                        this.deferredPrompt = null;

                    } );

                } else {

                    e.preventDefault();
                    console.warn( 'a2hs', 'No defferedPrompt!' );

                }

            },

            onAppInstalled( e ) {

                console.log( 'a2hs', 'App installed!' );
                this.successMessage = true;

            },

        },

    };

</script>

<style lang="stylus">

    html,
    body

        height: 100%
        margin: 0
        padding: 0

    html

        background-color: #263238

    #app

        display: flex
        flex-direction: column

        justify-content: center;

        height: 100%

        margin: 0!important
        padding: 0

        // background: red

        font-family 'Avenir', Helvetica, Arial, sans-serif
        -webkit-font-smoothing antialiased
        -moz-osx-font-smoothing grayscale
        text-align center
        color #2c3e50

    .a2hs

        &__button

            display: inline-block

            padding: 20px
            cursor: pointer
            font-size: 1.2em

        &__message

            display: inline-block

            color: white
            font-size: 1.2em

</style>
