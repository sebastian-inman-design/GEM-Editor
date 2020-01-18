import Vue from 'vue'
import Vuex from 'vuex'

import Index from './models/Index'
import Layer from './models/Layer'

import Storage from "./localStorage"

Vue.use(Vuex)

export default new Vuex.Store({

    state: {

        Index: new Index()

    },

    mutations: {

        RenameProject(state, title: String) {
            state.Index.Project.Title = title
            state.Index.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Project',  state.Index.Project)
        },

        SetActiveTool(state, tool: String) {
            state.Index.Settings.ActiveTool = tool
            Storage.Update('Settings',  state.Index.Settings)
        },

        AddNewLayer(state, layer: Layer) {
            state.Index.Data.Layers.push(layer)
            state.Index.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Data',  state.Index.Data)
        },

        UpdateGridSize(state, size: Number) {
            state.Index.Settings.GridSize = size
            state.Index.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Settings',  state.Index.Settings)
        },

        UpdateSidebarWidth(state, width: Number) {
            state.Index.Settings.SidebarWidth = width
            Storage.Update('Settings',  state.Index.Settings)
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