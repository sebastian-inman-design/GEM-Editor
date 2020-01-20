import Vue from 'vue'
import Vuex from 'vuex'

import Index from './models/Index'
import Asset from './models/Asset'
import Map from './models/Map'
import Layer from './models/Layer'

import Storage from "./localStorage"

Vue.use(Vuex)

export default new Vuex.Store({

    state: {

        Index: new Index()

    },

    mutations: {

        ShowPrompt(state, prompt: String) {

            state.Index.Prompt = prompt

        },

        RenameProject(state, title: String) {

            state.Index.Project.Title = title
            state.Index.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Project', state.Index.Project)

        },

        SetActiveTool(state, tool: String) {

            state.Index.Settings.ActiveTool = tool
            Storage.Update('Settings', state.Index.Settings)

        },

        AddNewAsset(state, asset: Asset) {

            state.Index.Data.Assets = {...state.Index.Data.Assets, ...{[asset.ID]: asset}}

            state.Index.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Data', state.Index.Data)

        },

        SetActiveAsset(state, uuid: String) {

            state.Index.Settings.ActiveAsset = uuid
            Storage.Update('Settings', state.Index.Settings)

        },

        SetActiveSprite(state, index: String) {

            state.Index.Settings.ActiveSprite = index
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

        DeleteMap(state, uuid: any) {

            // if(state.Index.Settings.ActiveMap == uuid) {

            //     state.Index.Settings.ActiveMap = false

            // }

            state.Index.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Settings', state.Index.Settings)
            Storage.Update('Data', state.Index.Data)

        },

        AddNewLayer(state, props: any) {

            // Auto increment the layer name.
            let count = Object.keys(state.Index.Data.Maps[props.map].Layers).length + 1
            props.layer.Name = `Layer ${count}`

            // Push the layer into the map object.
            state.Index.Data.Maps[props.map].Layers = {...state.Index.Data.Maps[props.map].Layers, ...{[props.layer.ID]: props.layer}}

            // Update the modified timestamp.
            state.Index.Project.DateModified = new Date().toLocaleString()

            // Update localstorage data.
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

        ShowPrompt(context, prompt: String) {
            return new Promise((resolve, reject) => {
                context.commit('ShowPrompt', prompt)
                resolve()
            })
        },

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

        AddNewAsset(context, asset: Asset) {
            return new Promise((resolve, reject) => {
                context.commit('AddNewAsset', asset)
                resolve()
            })
        },

        SetActiveAsset(context, uuid: String) {
            return new Promise((resolve, reject) => {
                context.commit('SetActiveAsset', uuid)
            })
        },

        SetActiveSprite(context, index: any) {
            return new Promise((resolve, reject) => {
                context.commit('SetActiveSprite', index)
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

        DeleteMap(context, uuid: any) {
            return new Promise((resolve, reject) => {
                context.commit('DeleteMap', uuid)
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