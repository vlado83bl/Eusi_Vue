<template>
    <div class="card_container flex_align mt-2">
        <div class="card flex-row align-items-center">
            <label class="card_label--container pb-3">
                <input type="checkbox">
                <span class="card_label--container-checkmark"></span>
            </label>
            <img class="card_image" :src="mediaItem.img" alt="card image">
            <p class="card_name ml-4">{{ mediaItem.name }}</p>
            <div class="card_blockchain-container">
                <span class="card_blockchain align-items-container" :style="{backgroundColor: mediaItem.blockChainColor}">&#8722;</span>
            </div>
            <div class="card_type-container">
                <div class="card_type flex_align_justify" :style="{backgroundColor: mediaItem.iconBackgroundColor}">
                <i :class="mediaItem.typeIcon" class="card_type--icon" :style="{color: mediaItem.iconColor}"></i>
                </div> 
            </div>
            <p class="card_size">{{ mediaItem.size }}</p>
            <i :class="mediaItem.sourceIcon" class="card_type--icon card_source-icon"></i>
            <p class="card_created">{{ mediaItem.dateCreated }}</p>
            <button class="card_status" :style="{backgroundColor: mediaItem.statusBackgroundColor, color: mediaItem.statusColor, borderColor: mediaItem.color}">{{ mediaItem.status }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['mediaItem']
    }
</script>

<style lang="scss" scoped>
    /////////////////////
    //GENERAL CARD STYLING
    .card_container {
        width: 100%;
    }

    .card {
        background-color: #fff;
        padding: 1.5rem 2rem;
        width: 100%;
        border: none;

        @media only screen and (max-width: 700px) {
            flex-direction: column !important;
            align-items: center !important;
            margin: 1.5rem 10%;
            padding: 1.5rem 4rem;

            & > * {
                margin: 2rem 0 !important;
                padding: 0 !important;
            }
        }

        @media only screen and (max-width: 500px) {
            margin: 1.5rem 0;
        }

        &_image {
            margin-left: 4rem;
            height: 6.5rem;
            width: 6.5rem;
            flex: 0 0 5%;
        }

        &_name {
            font-size: 1.6rem;
            font-weight: 500;
            flex: 0 0 18%;
            overflow: hidden;
            color: rgb(99, 99, 107);

            @media only screen and (max-width: 700px) {
                text-align: center;
            }


        }
        
        &_blockchain {
            background-color: red;
            color: #fff;
            border-radius: 50%;
            text-align: center;
            margin-left: 8rem;
            padding: .1rem .6rem .3rem .6rem;

            @media only screen and (max-width: 700px) {
                margin-left: 0;
            }

            &-container {
                flex: 0 0 21%;
            }
        }

        &_type {
            background-color: gray;
            width: 4rem;
            height: 4rem;
            border-radius: 15%;
            
            &-container {
                flex: 0 0 7.5%;
            }

            &--icon {
                font-size: 2rem;
            }
        }

        &_size {
            flex: 0 0 10.5%;
        }

        &_source-icon {
            flex: 0 0 9%;
        }

        &_created {
            flex: 0 0 12.5%;
        }

        &_status {
            border: none;
            padding: .6rem 1.3rem;
            border-radius: 7%;
            border-width: 1px;
            border-style: solid;
            width: 14rem;

            &:focus {
                outline: none;
            }
        }
        /////////////////////
        //STYLING OF CHECKBOX
        &_label--container {
            display: block;
            position: relative;
            cursor: pointer;
            font-size: 2rem;

            @media only screen and (max-width: 700px) {
                display: none;
            }

            input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
            }

            &-checkmark {
                position: absolute;
                top: 0;
                left: 0;
                height: 2rem;
                width: 2rem;
                background-color: #eee;
                text-align: center;
                border: 2px solid rgb(226, 226, 226);
                border-radius: 15%;

                &:after {
                    content: "";
                    position: absolute;
                    display: none;
                }
            }

            &:hover input ~ &-checkmark {
                background-color: rgb(174, 187, 202);
            }

            & input:checked ~ &-checkmark {
                background-color: rgb(77, 124, 254);;
            }

            & input:checked ~ &-checkmark:after {
                display: block;
            }

            & &-checkmark:after {
                left: 5px;
                top: 3px;
                width: 5px;
                height: 10px;
                border: solid white;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }
        }
    }
    /////////////////////
    //FLEX SHORTCUT CLASSES
    .flex_align {
        display: flex;
        align-items: center;
    }

    .flex_align_justify {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>