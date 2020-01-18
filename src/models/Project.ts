export default class ProjectModel {

  // Project Info.
  Title: String = "💎 Shades of Dusk & Dawn"
  Filename: String = ""
  DateCreated: any = undefined
  DateModified: any = undefined

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

    Maps:     [],
    Assets:   [],
    Layers:   [],
    Entities: []

  }

}