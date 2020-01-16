import Vue from 'vue'
import Vuex from 'vuex'

import Project from './models/Project'
import Layer from './models/Layer'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {

        Project: new Project()

    },

    mutations: {

        RenameProject(state, title: String) {
            state.Project.Title = title
        },

        AddNewLayer(state, layer: Layer) {
            state.Project.Layers.push(layer)
        },

        UpdateGridSize(state, size: Number) {
            state.Project.GridSize = size
        }

    },

    actions: {

        RenameProject(context, title: String) {
            return new Promise((resolve, reject) => {
                context.commit('RenameProject', title)
                resolve()
            })
        },

        AddNewLayer(context, layer: Layer) {
            return new Promise((resolve, reject) => {
                context.commit('AddNewLayer', layer)
                resolve()
            })
        },

        UpdateGridSize(context, size: Number) {
            return new Promise((resolve, reject) => {
                context.commit('UpdateGridSize', size)
                resolve()
            })
        }

    }

})