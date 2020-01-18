import Storage from "../localStorage"

export default class IndexModel {

  // Project Info.
  Project: any = {

    Title: "💎 Shades of Dusk & Dawn",
    Filename: "",
    DateCreated: new Date().toLocaleString(),
    DateModified: undefined

  }

  // System Settings.
  System: any = {

    Theme: "dark"

  }

  // Project Settings.
  Settings: any = {

    GridSize: 32,
    ActiveTool: "Brush",
    SidebarWidth: 260

  }


  // Project Data.
  Data: any = {

    Maps:    [],
    Assets:  [],
    Layers:  [],
    Objects: []

  }

  constructor() {

    const self: any = this

    Object.keys(self).map(Key => {

      if(!Storage.Exists(Key)) {

        Storage.Create(Key, self[Key])

      }else{

        const Data: any = Storage.Read(Key)
        self[Key] = JSON.parse(Data)

      }

    })

  }

}