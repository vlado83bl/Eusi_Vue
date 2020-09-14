import Vue from "vue";
import Vuex from "vuex";

import mediaItems from '../data/mediaItems'
import projects from '../data/projects'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      mediaItems: [],
      projects: []
  },
  mutations: {
    'SET_MEDIAITEMS' (state, mediaItems) {
        state.mediaItems = mediaItems;
    },
    'SET_PROJECTS' (state, projects) {
        state.projects = projects;
    }
  },
  actions: {
    initMediaItems: ({commit}) => {
        commit('SET_MEDIAITEMS', mediaItems);
    },
    initProjects: ({commit}) => {
        commit('SET_PROJECTS', projects);
    },
  },
  getters: {
      mediaItems: state => {
          return state.mediaItems;
      },
      projects: state => {
          return state.projects;
      }
  },
  modules: {}
});
