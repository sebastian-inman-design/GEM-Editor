import { uuid } from 'uuidv4'

export default class Map {

  ID: any = uuid()
  Name: String = "Untitled Map"
  Description: String = ""
  Order: Number = 0
  Layers: any = {}
  ActiveLayer: any = false
  Columns: any = 15
  Rows: any = 10
  Width: any
  Height: any

  constructor(props: any = {}) {

    const self: any = this
    Object.keys(props).map((k: any) => { self[k] = props[k] })

  }

}