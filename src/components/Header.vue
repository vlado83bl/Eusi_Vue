<template>
    <div>
        <div class="header d-flex">
            <router-link :to="{ name: 'Projects' }" class="brand-logo">
                <div class="brand-logo_wrapper d-flex align-items-center justify-content-center">
                    <img class="brand-logo_image" src="../assets/logo.png" alt="Brand logo"/><span>eusi</span>
                </div>
            </router-link>
            <div class="header-main d-flex">
                <div class="header-main_left d-flex">
                    <img class="header-main_image pt-4" src="../assets/project.png" alt="project Image"/>
                    <p class="header-main_project-text pl-4 pt-4">Ime Projekta <span style="color:#212529; font-weight: 400; text-transform: uppercase;">/ {{ $route.name }}</span></p>
                </div>
                <div class="header-main_right d-flex">
                    <div class="header-main_right--user-text pr-4 d-flex flex-column align-items-end justify-content-center">
                        <p class="user-name">Shawn Douglas</p>
                        <p class="user-title">Web-master</p>
                    </div>
                    <img src="../assets/person.png" class="header-main_right--user-image"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

    .header {
        border-bottom: 1px solid rgb(220, 225, 232);
    }

    .brand-logo {

        flex: 0 0 18%;
        text-decoration: none;
        color: rgb(36, 38, 53);

        &_wrapper {
            font-size: 4rem;
            margin: .8rem 0;
            padding: 0 4rem;
            border-right: 1.8px solid rgb(220, 225, 232);
        }
        
        &_image {
            width: 4.5rem;
            height: 4.5rem;
        }
    }

    .header-main {

        align-content: center;
        justify-content: space-between;
        width: 100%;

        &_image {
            width: 6rem;
            height: 6rem; 
            margin-left: 5rem;
        }

        &_project-text {
            font-size: 3rem;
            color: rgb(185, 197, 209);
            font-weight: 200;
        }

        &_right {

            &--user-text {
                
                font-size: 2rem;
                color: rgb(135, 148, 159);

                .user-name {
                    font-weight: 600;
                    margin-bottom: 0rem !important;
                }

                .user-title {
                    font-weight: 400;
                    font-size: 1.8rem;
                    color: rgb(185, 197, 209);
                }
            }

            &--user-image {
                width: 8rem;
                height: 8rem;  
            }
        }
    }

////////////////////
//BREAKPOINTS
$bp-largest: 75em;    //1200px; 
$bp-large: 68.75em;    //1100px; 
$bp-medium: 56.25em;    //900px; 
$bp-small: 37.5em;    //600px; 
$bp-smallest: 31.25em;    //500px; 
</style>