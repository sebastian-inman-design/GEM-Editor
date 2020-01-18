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

        SetActiveTool(state, tool: String) {
            state.Project.Settings.ActiveTool = tool
        },

        AddNewLayer(state, layer: Layer) {
            state.Project.Data.Layers.push(layer)
        },

        UpdateGridSize(state, size: Number) {
            state.Project.Settings.GridSize = size
        },

        UpdateSidebarWidth(state, width: Number) {
            state.Project.Settings.SidebarWidth = width
        }

    },

    actions: {

        RenameProject(context, title: String) {
            return new Promise((resolve, reject) => {
                context.commit('RenameProject', title)
                resolve()
            })
        },

        SetActiveTool(context, tool: String) {
            return new Promise((resolve, reject) => {
                context.commit('SetActiveTool', tool)
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
        },

        UpdateSidebarWidth(context, width: Number) {
            return new Promise((resolve, reject) => {
                context.commit('UpdateSidebarWidth', width)
                resolve()
            })
        }

    }

})