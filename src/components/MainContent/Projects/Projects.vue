<template>
    <div>
        <div class="projects_header">
            <div class="projects_header--sort d-flex align-items-center">
                <i class="fas fa-sort-amount-down projects_header--icon"></i>
                <p class="mb-0 pl-2 projects_header--sort-text">
                    SORT:
                    <span class="font-weight-bold pl-3" style="color: black;">A-Z</span>
                </p>
                <span
                    class="ml-4"
                    style="transform: rotate(90deg);font-weight: 400; font-size: 16px;"
                >&#62;</span>
                <div class="project_header--view ml-auto d-flex align-items-center">
                    <i class="fas fa-list-ul projects_header--icon"></i><p class="ml-2 mr-5 mb-0">LIST</p>
                    <i class="fas fa-th projects_header--icon projects_header--icon-grid"></i><p class="ml-2 mr-4 mb-0">GRID</p>
                    <button class="ml-auto projects_header--button text-white d-flex align-items-center"><span class="projects_header--button-symbol d-flex align-items-center justify-content-center">&#43;</span><p class="pl-3 mb-0">NEW PROJECT</p></button>
                </div>
            </div>
        </div>
        <div class="projects d-flex flex-wrap justify-content-between">
            <app-project v-for="project in projects" :project="project" :key="project.name"></app-project>
        </div>
    </div>
</template>

<script>
import Project from "./Project";

export default {
  components: {
    appProject: Project,
  },
  computed: {
      projects() {
          return this.$store.getters.projects 
      }
  },
};
</script>

<style lang="scss" scoped>
.projects {
  width: 100%;
  padding: 2rem 4rem;
  height: 80rem;

 &_header {
     font-size: 1.4rem;
     color: rgb(151, 167, 184);

    &--icon {
        font-size: 1.6rem;
        color: rgb(140, 158, 177);
        cursor: pointer;

        &-grid {
            color: rgb(120, 60, 139);
        }
    }

    &--sort {
        padding: 2rem 4rem 0 4rem;
    }

    &--button {
        padding: 1rem 1.5rem;
        background-image: linear-gradient(to right, rgb(120, 60, 139), rgb(197, 60, 150));
        border: none;
        border-radius: 2.5rem;
        font-size: 1.2rem;

        &:focus {
            outline: none;
        }

        &-symbol {
            width: 2.5rem;
            height: 2.5rem;
            border: 1px solid white;
            border-radius: 50%;
            font-size: 1.8rem;
        }
    }
  }
}
</style>
