<template>
    <div id="app">
        <div class="app-container">
            <app-header></app-header>
            <div class="hamburger_menu">
                <a href="#" class="hamburger_menu-item" @click="changeMenu">
                    <i class="fas fa-bars hamburger_menu-item-icon"></i>
                </a>
            </div>
            <div class="main">

                <!-- <div class="row"> -->
                    <app-sidebar :showSideMenu = "showSideMenu"></app-sidebar>
                    <!-- <app-dashboard></app-dashboard> -->
                    <!-- <app-projects></app-projects> -->
                    <!-- <app-media></app-media> -->
                    <transition name="slide" mode="out-in">
                        <router-view></router-view>
                    </transition>
                <!-- </div>  -->
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';
// import Dashboard from './components/MainContent/Projects/Dashboard';
// import Projects from './components/MainContent/Projects/Projects';
// import Media from './components/MainContent/Projects/Media';
export default {
    components: {
        appHeader: Header,
        appSidebar: Sidebar,
        // appDashboard: Dashboard
        // appProjects: Projects
        // appMedia: Media
    },
    data() {
        return {
            showSideMenu: false
        }
    },
    methods: {
        changeMenu() {
            return this.showSideMenu == false? this.showSideMenu = true: this.showSideMenu = false;
        }
    },
    created() {
        this.$store.dispatch('initMediaItems');
        this.$store.dispatch('initProjects');
    }
}

</script>

<style lang="scss">
    ////////////////////
    //HAMBURGER MENU
    .hamburger_menu {
        width: 100%;
        background-color: rgb(52, 49, 76);
        display: none;

        @media only screen and (max-width: 900px) {
            display: block;
            position: relative;
            left: 0;
        }

        &-item {
            display: block;
            padding: 1.4rem 4rem;

            &-icon {
                font-size: 2rem;
                color: #fff;
            }

        }
    }
    ////////////////////
    //COMPONENTS TRANSITION
    .slide-enter-active {
        animation: slide-in 200ms ease-out forwards;
    }

    .slide-leave-active {
        animation: slide-out 200ms ease-out forwards;
    }

    @keyframes slide-in {
        from {
            transform: translateY(-30px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes slide-out {
        from {
            transform: translateY(0);
            opacity: 1;
        }
        to {
            transform: translateY(-30px);
            opacity: 0;
        }
    }
    ///////////////////////
    //CONTAINER STYLING
    .container {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        line-height: 1.6;
        display: flex;
        flex-direction: column;
    }
    ///////////////////////
    //MAIN PART STYLING
    .main {
        width: 100%;
        display: flex;
        background-color: rgb(244, 246, 249);

        @media only screen and (max-width: 900px) {
            position: relative;
        }
    }

    
* {
    margin: 0;
    padding: 0;
}


$bp-largest: 75em;    //1200px; 
$bp-large: 68.75em;    //1100px; 
$bp-medium: 56.25em;    //900px; 
$bp-small: 37.5em;    //600px; 
$bp-smallest: 31.25em;    //500px; 

html {
    box-sizing: border-box;
    font-size: 62.5%; //1rem = 10px;

    @media only screen and (max-width: $bp-large) {
        font-size: 50%;  //1rem = 8px;
    }
}

*,
*::before,
*::after {
    box-sizing: inherit;
}
</style>
