<template>
    <div class="sidebar-container">
        <nav class="sidebar">
            <ul class="side-nav">
                <router-link :to="{ name: 'Dashboard' }" tag="li" class="side-nav__item pt-4">
                    <a href="#" class="side-nav__link">
                        <i class="side-nav_icon fas fa-tachometer-alt pr-4"></i><span>DASHBOARD</span>
                    </a>
                </router-link>
                <li class="side-nav__item">
                    <a href="#" class="side-nav__link">
                        <i class="side-nav_icon fas fa-pencil-alt pr-4"></i><span>CONTENT</span>
                    </a>
                </li>
                <li class="side-nav__item">
                    <a href="#" class="side-nav__link">
                        <i class="side-nav_icon fas fa-file-alt pr-4"></i><span>CONTENT MODELS</span>
                    </a>
                </li>  

                <!-- MEDIA -->
                <router-link :to="{ name: 'Media' }" tag="li" class="side-nav__item media-item">
                    <a href="#" class="side-nav__link" @click="showed = !showed; rotateArrow()">
                        <i class="side-nav_icon fas fa-film pr-4"></i><span>MEDIA</span><span class="arrow ml-auto mr-5" style="transform: rotate(0deg);">&#62;</span>
                    </a>
                    
                <!--MEDIA DROPDOWN-->
                    
                    <a href="#" class="status py-3" v-if="showed" @click="showedStatus = !showedStatus">STATUS</a>
                    
                    <ul class="media-dropdown" v-if="showedStatus && showed">
                        <li class="media-dropdown_media-type--link py-1 top-border">
                            <a href="#" class="media-dropdown_status--link d-flex align-items-center">
                                <span class="item-circle d-inline-block mr-3" style="background-color: aquamarine;"></span>Published
                            </a>
                        </li> 
                        <li class="media-dropdown_media-type--link py-1">
                            <a href="#" class="media-dropdown_status--link d-flex align-items-center">
                                <span class="item-circle d-inline-block mr-3" style="background-color: red;"></span>Archived
                            </a>
                        </li> 
                        <li class="media-dropdown_media-type--link py-1">
                            <a href="#" class="media-dropdown_status--link d-flex align-items-center">
                                <span class="item-circle d-inline-block mr-3" style="background-color: yellow;"></span>Draft
                            </a>
                        </li> 
                    </ul>

                    <a href="#" class="media-type py-3" v-if="showed" @click="showedMediaType = !showedMediaType">MEDIA TYPE</a>
                    <ul class="media-dropdown_media-type--list" v-if="showedMediaType && showed">
                        <li class="media-dropdown_media-type--link py-1 top-border">
                            <a href="#" class="media-dropdown_media-type--link">Image</a>
                        </li>
                        <li class="media-dropdown_media-type--link py-1">
                            <a href="#" class="media-dropdown_media-type--link">Video</a>
                        </li>
                        <li class="media-dropdown_media-type--link py-1">
                            <a href="#" class="media-dropdown_media-type--link">Link</a>
                        </li>
                        <li class="media-dropdown_media-type--link py-1">
                            <a href="#" class="media-dropdown_media-type--link">Rich Text</a>
                        </li>
                        <li class="media-dropdown_media-type--link py-1">
                            <a href="#" class="media-dropdown_media-type--link">PDF</a>
                        </li>
                        <li class="media-dropdown_media-type--link py-1">
                            <a href="#" class="media-dropdown_media-type--link">Code Snippet</a>
                        </li>
                        <li class="media-dropdown_media-type--link py-1">
                            <a href="#" class="media-dropdown_media-type--link">Audio</a>
                        </li>
                    </ul>
                </router-link>
                <!--END OF MEDIA DROPDOWN-->
                <li class="side-nav__item">
                    <a href="#" class="side-nav__link">
                        <i class="side-nav_icon fas fa-sitemap pr-4"></i><span>TAXONOMY</span>
                    </a>
                </li>
                <li class="side-nav__item">
                    <a href="#" class="side-nav__link">
                        <i class="side-nav_icon fas fa-clipboard-list pr-4"></i><span>FORMS</span>
                    </a>
                </li>
                <li class="side-nav__item">
                    <a href="#" class="side-nav__link">
                        <i class="side-nav_icon fas fa-user pr-4"></i><span>MEMBERS</span>
                    </a>
                </li>
                <li class="side-nav__item">
                    <a href="#" class="side-nav__link">
                        <i class="side-nav_icon fas fa-wallet pr-4"></i><span>PAYMENTS</span>
                    </a>
                </li>
                <li class="side-nav__item">
                    <a href="#" class="side-nav__link">
                        <i class="side-nav_icon fas fa-cog pr-4"></i><span>SETTINGS</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showed: false,
                showedStatus: false,
                showedMediaType: false
            }
        },
        methods: {
            rotateArrow() {
               var arrow = document.querySelector('.arrow');
               arrow.style.transform == "rotate(0deg)"? arrow.style.transform= "rotate(90deg)": arrow.style.transform= "rotate(0deg)";
            }
        },
    }
</script>

<style lang="scss" scoped>
    .sidebar {
        height: 100%;
    }

    .media-item > * {
        padding-left: 4rem;    
    }
    .item-circle {
        width: .7rem;
        height: .7rem;
        border-radius: 50%;
    }

    .sidebar-container {
        flex: 0 0 18%;
    }

    .sidebar {
        background-color: rgb(52, 49, 76);
    }
    .side-nav {
        font-size: 1.6rem;
        list-style: none;

        &__item {

            &:not(:last-child) {
                margin-bottom: .8rem;
            }
        }

    &__link:link,
    &__link:visited {
        color: rgb(98, 95, 128);
        text-decoration: none;
        display: block;
        padding: 1.5rem 0 1.5rem 4rem;

        display: flex;
        align-items: center;
        position: relative;
        z-index: 10;
        transition: background-color .5s, color .5s, border-left .5s;

        &:hover {
            color: rgb(179, 179, 186);
            background-color: rgb(39, 40, 61);
            border-left: 2px solid rgb(193, 28, 141);
        }
    }

    &__icon {
        height: 1.75rem;
        width: 1.75rem;
        margin-right: 2rem;
        fill: currentColor;
    }
}
//MEDIA DROPDOWN
.media-dropdown {
    
    transition: display .8s;
    &_status {
        padding:.6rem 4rem;

        &--link {
            text-decoration: none;
        }

        &--published {
            border-top: 2px solid rgb(58, 61, 81);
            text-decoration: none;
        }
    }

    &_status--link,
    &_media-type--link {
        color: rgb(98, 95, 128);
        text-decoration: none;
        display: block;
        
        transition: background-color .5s, color .5s, border-left .5s;

        &:hover {
            color: rgb(179, 179, 186);
            background-color: rgb(39, 40, 61);
            border-left: 2px solid rgb(193, 28, 141);
        }
    }
}

.status,
.media-type {
    color: rgb(179, 179, 186);
    text-decoration: none;
    width: 85%;
    display: block;
    
    transition: display  .8s;
} 

.top-border {
    border-top: 1.5px solid #625f80;
    width: 85%;
}

.display {
    display: block !important;
}
</style>