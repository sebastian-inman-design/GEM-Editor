import { uuid } from 'uuidv4'

export default class Map {

  ID: any = uuid()
  Name: String = ""
  Order: Number = 0
  Layers: any = {}
  ActiveLayer: any = false
  Width: Number = 640
  Height: Number = 384

  constructor(props: any = {}) {

    const self: any = this
    Object.keys(props).map((k: any) => { self[k] = props[k] })

  }

}