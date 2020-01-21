import { uuid } from 'uuidv4'

export default class Layer {

  ID: any = uuid()
  Name: String = ""
  Order: Number = 0
  Tiles: any = []
  Visible: Boolean = true
  Locked: Boolean = false

}