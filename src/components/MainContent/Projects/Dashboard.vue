<template>
    <div class="main d-flex flex-column">
        <section class="start-panel">
            <div class="start-panel_heading pl-3 pb-3">
                <h1>Hello Nemanja!</h1>
                <p class="start-panel_heading--text">Let's start adding some content</p>
            </div>
            <div class="start-panel_model d-flex align-items-center mt-2">
                <div class="start-panel_model--item flex_column_align pl-3">
                    <div class="model-box flex_align_justify"><span>E</span></div>
                    <p class="model-box_text pt-3">Event</p>
                </div>
                <div class="start-panel_model--item flex_column_align">
                    <div class="model-box flex_align_justify"><span>T</span></div>
                    <p class="model-box_text pt-3">Teacher</p>
                </div>
                <div class="start-panel_model--item flex_column_align">
                    <div class="model-box flex_align_justify"><span>G</span></div>
                    <p class="model-box_text pt-3">Gallery</p>
                </div>
                <div class="start-panel_model--item flex_column_align">
                    <div class="model-box flex_align_justify"><span>SS</span></div>
                    <p class="model-box_text pt-3">Site Settings</p>
                </div>
                <div class="start-panel_model--item flex_column_align">
                    <div class="model-box flex_align_justify"><span>T</span></div>
                    <p class="model-box_text pt-3">Testimonial</p>
                </div>
                <div class="start-panel_model--item flex_column_align">
                    <div class="model-box flex_align_justify"><span>B</span></div>
                    <p class="model-box_text pt-3">Blogs</p>
                </div>
                <div class="start-panel_model--item flex_column_align">
                    <div class="model-box flex_align_justify"><span>A</span></div>
                    <p class="model-box_text pt-3">Articles</p>
                </div>
                <div class="start-panel_model--item flex_column_align">
                    <div class="model-box flex_align_justify"><span>C</span></div>
                    <p class="model-box_text pt-3">Course</p>
                </div>
                <div class="start-panel_model--item flex_column_align">
                    <div class="model-box flex_align_justify"><span>Q</span></div>
                    <p class="model-box_text pt-3">Question</p>
                </div>
                <button class="ml-auto start-panel_button text-white d-flex align-items-center mr-3"><span class="start-panel_button--symbol flex_align_justify">&#43;</span><p class="pl-3 mb-0">NEW CONTENT MODEL</p></button>
            </div>
        </section>

        <!--MIDDLE PANEL -->
        <section class="middle-panel">
            <div class="middle-panel_header flex_align">
                <div class="monthly-usage flex_align px-2 py-4">
                    <i class="fas fa-chart-bar middle-panel_icon ml-3"></i>
                    <p class="middle-panel_header--text ml-3 mb-2">Monthly Usage Jan 2018</p>
                    <span class="ml-4 mb-1" style="transform: rotate(90deg);font-weight: 400; font-size: 16px;">&#62;</span>
                </div>
                <div class=" ml-2 px-2 py-4 middle-panel_header--dropdown">
                    <div class="px-2 flex_align middle-panel_header--dropdown-start">
                        <i class="fas fa-chart-line middle-panel_icon mr-3"></i>
                        <a href="#" class="dropdown_line-chart mb-2">Line Chart</a>
                        <span class="ml-4 mb-1" style="transform: rotate(90deg);font-weight: 400; font-size: 16px;">&#62;</span>
                    </div>
                    <ul class="middle-panel_header--dropdown-list">
                        <li class="middle-panel_header--dropdown-item">
                            <a href="#" class="middle-panel_header--dropdown-link">Column Chart</a>
                        </li>
                        <li class="middle-panel_header--dropdown-item">
                            <a href="#" class="middle-panel_header--dropdown-link">Line Chart</a>
                        </li>
                        <li class="middle-panel_header--dropdown-item">
                            <a href="#" class="middle-panel_header--dropdown-link">Pie Chart</a>
                        </li>
                        <li class="middle-panel_header--dropdown-item">
                            <a href="#" class="middle-panel_header--dropdown-link">Stacked Column Chart</a>
                        </li>
                    </ul>
                </div>
                <div class="legend ml-auto flex_align mr-3">
                    <span class="item-circle d-inline-block mr-2" style="background-color: rgb(88, 228, 189);"></span><p class="mb-1 mr-2 legend_text">minimal</p>
                    <span class="item-circle d-inline-block ml-4 mr-2" style="background-color: rgb(199, 128, 251);"></span><p class="mb-1 legend_text">maximal</p>
                </div>
            </div>
            <div class="graph">
                <img src="../../../assets/dashboard_graph.png" alt="dasboard graph" style="width: 100%;">
            </div>
        </section>
        <section class="bottom-panel mt-5">
            <div class="cards d-flex align-items-start">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title pt-2 pb-3 text-left"><i class="fas fa-percent pr-2"></i> Percent usage</h4>
                        <p class="card-text pt-3">
                        You have used total  of <span class="font-weight-bold">2383</span> requests out of <span class="font-weight-bold">50000</span> which is your upper limit.
                        </p>
                        
                        <img src="../../../assets/card_percentage.png" alt="" class="img-fluid pt-4" style="width: 70%">
                    </div>
                </div>
                <div class="card ml-5">
                    <div class="card-body">
                        <h4 class="card-title pt-2 pb-3 text-left"><i class="fas fa-percent pr-2"></i> Content status</h4>
                        <div class="card-text pt-3 flex_align_justify">
                            <span class="item-circle d-inline-block mr-2" style="background-color: rgb(88, 228, 189);"></span><p class="mb-1 legend_text">Published</p>
                            <span class="item-circle d-inline-block ml-4 mr-2" style="background-color: rgb(253, 195, 89);"></span><p class="mb-1 legend_text">Draft</p>
                            <span class="item-circle d-inline-block ml-4 mr-2" style="background-color: rgb(254, 55, 103);"></span><p class="mb-1 legend_text">Archived</p>
                        </div>
                        <img src="../../../assets/card_percentage2.png" alt="" class="img-fluid pt-5 mt-2">
                    </div>
                </div>
                <div class="card ml-5" style="flex: 1;">
                    <div class="card-body">
                        <h4 class="card-title pt-2 pb-3 text-left mb-0" style="border-bottom: none;"><i class="fas fa-star pr-2"></i> Most popular content</h4>
                        <div class="card-text flex_align">
                            <table class="table table-hover">
                                <thead style="background-color: rgb(244, 246, 250);">
                                    <th>No.</th>
                                    <th>Content name</th>
                                    <th>Usage</th>
                                </thead>
                                <tbody>
                                    <tr class="mb-5 table-row">
                                        <th scope="row">1.</th>
                                        <td class="pl-4">Eusi University Settings</td>
                                        <td><img src="../../../assets/progress.png" alt="progress" class="pl-4">17% | 900 calls</td>
                                    </tr>
                                    <tr class="mb-2 table-row">
                                        <th scope="row">1.</th>
                                        <td class="pl-4">Eusi University Settings</td>
                                        <td><img src="../../../assets/progress.png" alt="progress" class="pl-4">17% | 900 calls</td>
                                    </tr>
                                    <tr class="mb-2 table-row">
                                        <th scope="row">1.</th>
                                        <td class="pl-4">Eusi University Settings</td>
                                        <td><img src="../../../assets/progress.png" alt="progress" class="pl-4">17% | 800 calls</td>
                                    </tr>
                                    <tr class="mb-2 table-row">
                                        <th scope="row">1.</th>
                                        <td class="pl-4">Eusi University Settings</td>
                                        <td><img src="../../../assets/progress.png" alt="progress" class="pl-4">17% | 600 calls</td>
                                    </tr>
                                    <tr class="mb-2 table-row">
                                        <th scope="row">1.</th>
                                        <td class="pl-4">Eusi University Settings</td>
                                        <td><img src="../../../assets/progress.png" alt="progress" class="pl-4">17% | 400 calls</td>
                                    </tr>
                                    <tr class="mb-2 table-row">
                                        <th scope="row">1.</th>
                                        <td class="pl-4">Eusi University Settings</td>
                                        <td><img src="../../../assets/progress.png" alt="progress" class="pl-4">17% | 300 calls</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

//////////////
//BOTTOM-PANEL

.card {
    border: none;
    flex: 0 0 28%;
    height: 32rem;

    &-title {
        font-size: 1.4rem;
        color: rgb(96, 97, 106);
        border-bottom: 1px solid rgb(220, 225, 232);

        .fas {
            color: rgb(141, 161, 179);
            font-size: 1.2rem;
        }
    }

    &-body {
        text-align: center;
        font-size: 1.4rem;
        color: rgb(110, 126, 143);
    }
}

.table-row:hover {
    background-color: rgb(244, 251, 255);
}

table-hover {
    width: 100% !important;
}
////////////////////
//FLEX SHORTCUT CLASSES
.flex_column_align {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.flex_align_justify {
    display: flex;
    align-items: center;
    justify-content: center;
}

.flex_align {
    display: flex;
    align-items: center;
}
/////////////////
//HEADER PANEL
.main {
    width: 100%;
    padding: 2rem 3rem;
    background-color: rgb(244, 246, 249);
}
.start-panel {
    width: 100%;

    &_heading {
        &--text {
            font-size: 1.7rem;
            color: rgb(136, 149, 163);
            letter-spacing: .3px;
        }
    }

    &_model {
        .model-box {
            width: 5rem;
            height: 5rem;
            background-color: white;
            font-size: 1.6rem;
            border-radius: 10%;
            cursor: pointer;
            box-shadow: 0 1rem 4rem rgba(0,0,0,.1);

            span {
                color: rgb(199, 79, 159);
            }
            
            &_text {
                color: rgb(161, 173, 185);
            }  
        }

        &--item {
            
            &:not(:last-child) {
                margin-right: 3rem;
            }
        }

    }

    &_button {
        padding: 1.2rem 1.5rem;
        background-image: linear-gradient(to right, rgb(120, 60, 139), rgb(197, 60, 150));
        border: none;
        border-radius: 2.5rem;
        font-size: 1.2rem;
        margin-bottom: 3rem !important;

        &--symbol {
            width: 2.5rem;
            height: 2.5rem;
            border: 1px solid white;
            border-radius: 50%;
            font-size: 1.8rem;
        }
    }
}

//////////////////////
//MIDDLE PANEL
.middle-panel {

    background-color: rgb(255, 255, 255);
    margin-top: 2rem;

    &_icon {
        font-size: 1.6rem;
        color: rgb(145, 164, 182);
    }

    &_header {
        border-bottom: 1px solid rgb(220, 225, 232);

        &--text {
            font-size: 1.5rem;
            color: rgb(110, 111, 118);
            font-weight: 500;
        }

        &--dropdown {

            &:hover {
                background-color: rgb(244, 251, 255);
            }

            &:hover &-list {
                display: block;
            }

            .dropdown_line-chart,
            &-link {
                font-size: 1.5rem;
                color: rgb(171, 187, 202);
                font-weight: 400;
            }

            &-list {
                display: none;
                position: absolute;
                transform: translate(-.4rem, 1.5rem);
                list-style-type: none;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                min-width: 20rem;
                padding: 1rem 0;
                z-index: 1;
                background-color: white;
            }

            &-item {
                padding: 1.4rem 1.8rem;

                &:hover {
                    background-color: rgb(244, 251, 255);
                }
            }

            &-link {
                text-decoration: none !important;
            }
        }
    }
}

.legend {
    &_text {
        font-size: 1.5rem;
        color: rgb(162, 179, 193);
    }
}

.item-circle {
    width: .7rem;
    height: .7rem;
    border-radius: 50%;
}
</style>