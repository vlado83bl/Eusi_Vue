<template>
    <div class="card_container mb-5 d-flex">
        <div class="card">
            <i class="fas fa-ellipsis-h ml-auto card_three-dots"></i>
            <div class="card_image--container"><img class="card_image" :src="project.img" alt="card image"></div>
            <p class="card_project pt-3 mb-0">{{ project.name }}</p>
            <p class="card_project--created">Created: {{ project.date }}</p>
            <div class="project-technology d-flex">
                <button class="card_project--technology" v-for="technology in project.technology" :key="technology.name" :style="{ backgroundColor: technology.backgroundColor, color: technology.color}"><i :class="technology.icon" class="card_project--icon pr-3"></i>{{ technology.name }}</button>
            </div>                                             
            <div class="card_recommend pt-5">
                <div class="card_recommend__friends d-flex align-items-center">
                    <img src="../../../assets/user-2.jpg" alt="Friend 1" class="card_recommend__photo">     
                    <img src="../../../assets/user-3.jpg" alt="Friend 1" class="card_recommend__photo">
                    <img src="../../../assets/user-4.jpg" alt="Friend 2" class="card_recommend__photo">
                    <img src="../../../assets/user-5.jpg" alt="Friend 3" class="card_recommend__photo">
                    <img src="../../../assets/user-6.jpg" alt="Friend 4" class="card_recommend__photo">
                    <div class="card_user-count d-flex align-items-center justify-content-center">+5</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['project']
    }
</script>

<style lang="scss" scoped>

    .card_container {
       flex: 0 0 31%;
       max-width: 40rem;
       min-width: 30rem;
       height: 35rem;
    }
    .card {
        width: 100%;
        background-color: white;
        align-items: center;
        padding: 2rem;
        border: none;
        border-radius: 1.5%;
        box-shadow: 0 1rem 4rem rgba(0,0,0,.08);

        &_three-dots {
             font-size: 2rem; 
             color: rgb(129, 148, 169);
             cursor: pointer;
        }

        &_image--container {
            height: 8rem;
        }
        
        &_image {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
        }

        &_project {
            font-size: 2rem;
            color: rgb(92, 92, 99);
            font-weight: 500;

            &--technology {
                margin-top: 1.6rem;;
                padding: .8rem 1.8rem;
                margin-left: 1.2rem;
                font-size: 1.1rem;
                font-weight: 500;
                border: none;
                border-radius: .5rem;

                &:focus {
                    outline: none;
                }
            }

            &--icon {
                font-size: 1.4rem;
            }

            &--created {
                font-size: 1.5rem;
                font-weight: 400;
                color: rgb(151, 158, 165);
            }
        }

        &_recommend {
            display: flex;
            align-items: center;

            &__count {
                margin-right: auto;
            }

            &__friends {
                display: flex;
            }

            &__photo {
                box-sizing: content-box;
                height: 3.5rem;
                width: 3.5rem;
                border-radius: 50%;
                border: 3px solid #fff;

                &:not(:last-child) {
                    margin-right: -1.7rem;
                }
            }
        }

        &_user-count {
            background-color: rgb(242, 244, 246);
            height: 3.5rem;
            width: 3.5rem;
            border-radius: 50%;
            color: rgb(190, 201, 213);
            font-size: 1.4rem;
            font-weight: 600;
        }
    }
</style>