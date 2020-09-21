<template>
    <div class="media-container">
        <div class="media d-flex flex-column">
            <div class="media_search">
                <div class="media_search--top flex_align flex-wrap">
                    <form action="#" class="media_form  media_form-search flex_align">
                        <i class="fas fa-search media-icon pr-4"></i>
                            <input type="text" class="media_form--input align-items-center" placeholder="Search Media">
                        <i class="fab fa-telegram-plane media-icon ml-auto" style="color: rgb(77, 124, 254);"></i>
                    </form>
                    <i class="fas fa-filter media-icon pl-5" style="color: rgb(202, 145, 193);"></i>
                    <p class="pl-2 font-weight-bold mb-0" style="color: rgb(45, 46, 57); cursor: pointer;">ADVANCED FILTER</p><span
                    class="ml-4" style="transform: rotate(90deg);font-weight: 600; font-size: 16px; color: rgb(45, 46, 57);">&#62;</span>
                    <button class="ml-auto media_search--button text-white d-flex align-items-center"><span class="media_search--button-symbol d-flex align-items-center justify-content-center">&#43;</span><p class="pl-3 mb-0">ADD MEDIA</p></button>
                </div>
                <div class="media_search--bottom flex_align mt-4 pt-2">
                    <form action="#" class="media_form media_form-title flex_align mr-4">
                        <input type="text" class="media_form--input align-items-center" placeholder="By Title">
                    </form>
                    <form action="#" class="media_form media_form-provider flex_align mr-4">
                            <input type="text" class="media_form--input align-items-center" placeholder="By Provider">
                        <i class="fas fa-chevron-down media-icon ml-auto" style="color: rgb(183, 195, 208);"></i>
                    </form>
                    <form action="#" class="media_form media_form-type flex_align mr-5">
                            <input type="text" class="media_form--input align-items-center" placeholder="By Type">
                            <i class="fas fa-chevron-down media-icon ml-auto" style="color: rgb(183, 195, 208);"></i>
                    </form>
                    <form action="#" class="media_form-published flex_align mr-4">
                            <label for="calendar" class="mr-4" style="color: rgb(121, 115, 130); font-weight: 500;">Published Date: </label>
                            <input type="text" id="calendar" class="media_form-published_input align-items-center" placeholder="From   -   To">
                            <i class="far fa-calendar-alt media-icon ml-auto" style="color: rgb(183, 195, 208);"></i>
                    </form>
                    <div class="buttons media_form-buttons flex_align ml-auto">
                        <div class="button-inner-div ml-auto">
                            <button class="media_search--button-apply mr-3">APPLY</button>
                            <button class="media_search--button-clear">CLEAR ALL</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="media_items d-flex flex-column">
                <div class="media_items--header flex_align">
                    <div class="media_items--header-box">
                        <span class="media_items--header-box-item align-items-center">&#8722;</span>
                    </div>
                    <div class="media_items--header-title-container flex_align" style="flex: 0 0 20%;">
                        <p class="media_items--header-title">Title</p><i class="fas fa-sort ml-2 media_items--header-title-icon"></i>
                    </div>
                    <p class="media_items--header-title" style="flex: 0 0 18%;">BlockChain Secured</p>
                    <p class="media_items--header-title" style="flex: 0 0 7%;">Type</p>
                    <div class="media_items--header-title-container flex_align" style="flex: 0 0 9%;">
                    <p class="media_items--header-title">Size</p><i class="fas fa-sort ml-2 media_items--header-title-icon"></i>
                    </div>
                    <p class="media_items--header-title" style="flex: 0 0 10%;">Source</p>
                    <div class="media_items--header-title-container flex_align" style="flex: 0 0 10%;">
                        <p class="media_items--header-title">Created At</p><i class="fas fa-sort ml-2 media_items--header-title-icon"></i>
                    </div>
                    <div class="status-inner">
                        <p class="media_items--header-title ml-auto" style="margin-right: 6rem; flex: 1;">Status</p>
                    </div>
                </div>
                <div class="media_items-list d-flex flex-column">
                   <app-media-item v-for="mediaItem in mediaItems" :mediaItem="mediaItem" :key="mediaItem.id"></app-media-item> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import MediaItem from './MediaItem';
    export default {
    components: {
        appMediaItem: MediaItem
        },
    computed: {
        mediaItems() {
            return this.$store.getters.mediaItems;
        }
  },
    }
</script>

<style lang="scss" scoped>
.media-container {
    width: 100%;
}

//////////////////
//MEDIA-ITEMS
.media_items {
    width: 100%;
    padding: 2rem 4rem 2rem 4rem;
    font-size: 1.4rem;
    color: rgb(174, 187, 202);

    &--header {

        &-box {
            flex: 0 0 12%;

            @media only screen and (min-width: 2000px) {
                flex: 0 0 10%;
            }

            &-item {
                margin-left: 2rem;
                background-color: rgb(77, 124, 254);
                color: white;
                font-weight: 500;
                text-align: center;
                border-radius: 15%;
                padding: .1rem .6rem .4rem .6rem;
            }
        }

        &-title {
            margin-bottom: 0;
            color: rgb(121, 115, 130);
            font-weight: 500;

            &-icon {
                color: rgb(121, 115, 130);
            }
        }
    }
    
    &-list {
        margin-top: 1rem;
    }
}

.status-inner {
    flex: 1;
    padding-left: 5rem;

    & p {
        @media only screen and (min-width: 1500px) {
            margin-right: 0 !important;
        }
        @media only screen and (min-width: 2200px) {
            margin-right: 0 !important;
            padding-left: 4rem;
        }
    }
    
    @media only screen and (min-width: 1500px) {
        margin: 0 auto !important;
    }
}

//////////////////
//MEDIA-SEARCH
.media {
        width: 100%;
        &-icon {
        font-size: 1.6rem;
    }

    input {
        border: none;
        &::-webkit-input-placeholder {
            font-weight: 500;
            color: rgb(187, 199, 211);
        }
        &:focus {
            outline: none;
        }
    }

    button {
        &:focus {
            outline: none;
        }
    }

    &_search {
        width: 100%;
        background-color: rgb(250, 251, 252);
        padding: 2rem 4rem;
        font-size: 1.4rem;
        color: rgb(174, 187, 202);
        border-bottom: 1px solid rgb(220, 225, 232);

        &--bottom {
            @media only screen and (max-width: 1400px) {
            flex-wrap: wrap;
            justify-content: center !important;
        }
        }

        &--button {
            padding: .8rem 1.5rem;
            background-image: linear-gradient(to right, rgb(120, 60, 139), rgb(197, 60, 150));
            border: none;
            border-radius: 2.5rem;
            font-size: 1.2rem;

            &-symbol {
                width: 2.5rem;
                height: 2.5rem;
                border: 1px solid white;
                border-radius: 50%;
                font-size: 1.8rem;
            }
        }

        &--button-apply,
        &--button-clear {
            padding: 1.2rem 1.8rem;
            border: none;
            border-radius: 2.5rem;
            font-size: 1.2rem; 
        }

        &--button-apply {
            background-color: rgb(77, 124, 254);
            color: rgb(223, 231, 254);
            font-weight: 500;
        }

        &--button-clear {
            background-color: #fff;
            color: rgb(190, 200, 212);
            font-weight: 500;
            border: 2px solid rgb(201, 210, 220);
        }
    }

    &_form {
        background-color: rgb(255, 255, 255);
        border: 2px solid rgb(233, 233, 235);
        border-radius: .5rem;
        padding: .7rem 1.4rem .7rem 2rem;

        &-search {
            flex: 0 0 35%;
        }

        &-title {
            flex: 0 0 15%;
            padding: .7rem 0 .7rem .8rem;
        }

        &-provider {
            flex: 0 0 15% !important;
            padding: .7rem 1rem .7rem .8rem;
        }

        &-type {
            flex: 0 0 12% !important;
            padding: .7rem 1rem .7rem .8rem;

            input {
                width: 50%;
            }
        }

        &-published {
            flex: 0 0 10%;

            &_input {
                background-color: rgb(255, 255, 255);
                border: 2px solid rgb(233, 233, 235) !important;
                border-radius: .5rem;
                padding: .7rem 5.4rem .7rem 2rem; 
                margin-right: -2.5rem;
            } 
        }

        &-buttons {
            flex: 1;
            justify-content: center;
        }
    }
}

.button-inner-div {
    display: flex;
    
    @media only screen and (max-width: 1300px) {
        margin-left: 0 !important;
    }

    @media only screen and (max-width: 875px) {
        margin-top: 2rem;
    }
}
/////////////////////
//FLEX CLASSES
.flex_align {
    display: flex;
    align-items: center;
}

.flex_align_justify {
    display: flex;
    align-items: center;
    justify-content: center;
}

////////////////////
//BREAKPOINTS
$bp-largest: 75em;    //1200px; 
$bp-large: 68.75em;    //1100px; 
$bp-medium: 56.25em;    //900px; 
$bp-small: 37.5em;    //600px; 
$bp-smallest: 31.25em;    //500px; 
</style>


