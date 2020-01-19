import Vue from 'vue'
import Vuex from 'vuex'

import Index from './models/Index'
import Map from './models/Map'
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
            Storage.Update('Project', state.Index.Project)

        },

        SetActiveTool(state, tool: String) {

            state.Index.Settings.ActiveTool = tool
            Storage.Update('Settings', state.Index.Settings)

        },

        AddNewMap(state, map: Map) {

            state.Index.Data.Maps = {...state.Index.Data.Maps, ...{[map.ID]: map}}

            state.Index.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Data', state.Index.Data)

        },

        SetActiveMap(state, uuid: string) {

            state.Index.Settings.ActiveMap = uuid
            state.Index.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Settings', state.Index.Settings)

        },

        AddNewLayer(state, props: any) {

            state.Index.Data.Maps[props.map].Layers = {...state.Index.Data.Maps[props.map].Layers, ...{[props.layer.ID]: props.layer}}

            state.Index.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Data', state.Index.Data)

        },

        SetActiveLayer(state, props: any) {

            state.Index.Data.Maps[props.map] = {...state.Index.Data.Maps[props.map], ...{ActiveLayer: props.layer}}

            state.Index.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Settings', state.Index.Settings)

        },

        UpdateGridSize(state, size: Number) {

            state.Index.Settings.GridSize = size
            state.Index.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Settings', state.Index.Settings)

        },

        UpdateSidebarWidth(state, width: Number) {

            state.Index.Settings.SidebarWidth = width
            Storage.Update('Settings', state.Index.Settings)
            
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

        AddNewMap(context, map: Map) {
            return new Promise((resolve, reject) => {
                context.commit('AddNewMap', map)
                resolve()
            })
        },

        SetActiveMap(context, map: Map) {
            return new Promise((resolve, reject) => {
                context.commit('SetActiveMap', map)
                resolve()
            })
        },

        AddNewLayer(context, props: any) {
            return new Promise((resolve, reject) => {
                context.commit('AddNewLayer', props)
                resolve()
            })
        },

        SetActiveLayer(context, props: any) {
            return new Promise((resolve, reject) => {
                context.commit('SetActiveLayer', props)
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