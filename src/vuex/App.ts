import Storage from "../localStorage"

export default class App {

  Prompt: any = "Login"

  // Project Info.
  Project: any = {

    Title: "GEM Editor",
    Filename: "",
    DateCreated: new Date().toLocaleString(),
    DateModified: undefined

  }

  // System Settings.
  System: any = {

  }

  // Project Settings.
  Settings: any = {

    GridSize: 32,
    SidebarWidth: 260,
    ShowGrid: true,
    ActiveMap: false,
    ActiveTool: "Brush",
    ActiveAsset: false,
    ActiveSprite: false

  }


  // Project Data.
  Data: any = {

    Maps:    {},
    Assets:  {},
    Objects: {}

  }

  constructor() {

    const self: any = this

    Object.keys(self).map(Key => {

      if(['object'].includes(typeof(self[Key]))) {

        if(!Storage.Exists(Key)) {

          Storage.Create(Key, self[Key])

        }else{

          const Data: any = Storage.Read(Key)
          self[Key] = JSON.parse(Data)

        }

      }

    })

  }

}