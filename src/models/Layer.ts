import { uuid } from 'uuidv4'

export default class Layer {

  ID: any = uuid()
  Name: String = ""
  Order: Number = 0
  Tiles: Array<[]> = []
  Type: String = "layer"
  Visible: Boolean = true
  Locked: Boolean = false

}