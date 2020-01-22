import Vue from 'vue'
import Vuex from 'vuex'

import App from './vuex/App'
import User from './vuex/User'
import Asset from './vuex/Asset'
import Map from './vuex/Map'
import Layer from './vuex/Layer'

import Storage from "./localStorage"

Vue.use(Vuex)

export default new Vuex.Store({

    state: {

        App: new App()

    },

    mutations: {

        UserLogin(state, user: any) {

            state.App.User = user
            Storage.Update('User', state.App.User)

        },

        ShowPrompt(state, prompt: String) {

            state.App.Prompt = prompt

        },

        RenameProject(state, title: String) {

            state.App.Project.Title = title
            state.App.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Project', state.App.Project)

        },

        SetActiveTool(state, tool: String) {

            state.App.Settings.ActiveTool = tool
            Storage.Update('Settings', state.App.Settings)

        },

        AddNewAsset(state, asset: Asset) {

            state.App.Data.Assets = {...state.App.Data.Assets, ...{[asset.ID]: asset}}

            state.App.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Data', state.App.Data)

        },

        SetActiveAsset(state, uuid: String) {

            state.App.Settings.ActiveAsset = uuid
            Storage.Update('Settings', state.App.Settings)

        },

        SetActiveSprite(state, index: String) {

            state.App.Settings.ActiveSprite = index
            Storage.Update('Settings', state.App.Settings)

        },

        AddNewMap(state, map: Map) {

            state.App.Data.Maps = {...state.App.Data.Maps, ...{[map.ID]: map}}

            state.App.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Data', state.App.Data)

        },

        SetActiveMap(state, uuid: string) {

            state.App.Settings.ActiveMap = uuid
            state.App.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Settings', state.App.Settings)

        },

        DeleteMap(state, uuid: any) {

            // if(state.App.Settings.ActiveMap == uuid) {

            //     state.App.Settings.ActiveMap = false

            // }

            state.App.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Settings', state.App.Settings)
            Storage.Update('Data', state.App.Data)

        },

        AddNewLayer(state, props: any) {

            // Auto increment the layer name.
            let count = Object.keys(state.App.Data.Maps[props.map].Layers).length + 1
            props.layer.Name = `Layer ${count}`

            // Push the layer into the map object.
            state.App.Data.Maps[props.map].Layers = {...state.App.Data.Maps[props.map].Layers, ...{[props.layer.ID]: props.layer}}

            // Update the modified timestamp.
            state.App.Project.DateModified = new Date().toLocaleString()

            // Update localstorage data.
            Storage.Update('Data', state.App.Data)

        },

        SetActiveLayer(state, props: any) {

            state.App.Data.Maps[props.map] = {...state.App.Data.Maps[props.map], ...{ActiveLayer: props.layer}}

            state.App.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Settings', state.App.Settings)

        },

        ToggleLayerVisibility(state, props: any) {

            // Push the layer into the map object.
            state.App.Data.Maps[props.map].Layers = {...state.App.Data.Maps[props.map].Layers, ...{[props.layer.ID]: props.layer}}

            // Update the modified timestamp.
            state.App.Project.DateModified = new Date().toLocaleString()

            // Update localstorage data.
            Storage.Update('Data', state.App.Data)

        },

        UpdateGridSize(state, size: Number) {

            state.App.Settings.GridSize = size
            state.App.Project.DateModified = new Date().toLocaleString()
            Storage.Update('Settings', state.App.Settings)

        },

        UpdateSidebarWidth(state, width: Number) {

            state.App.Settings.SidebarWidth = width
            Storage.Update('Settings', state.App.Settings)
            
        }

    },

    actions: {

        UserLogin(context, user: any) {
            return new Promise((resolve, reject) => {
                context.commit('UserLogin', user)
                resolve()
            })
        },

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

        ToggleLayerVisibility(context, props: any) {
            return new Promise((resolve, reject) => {
                context.commit('ToggleLayerVisibility', props)
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