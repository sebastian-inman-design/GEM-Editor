import { uuid } from 'uuidv4'

export default class Layer {

  ID: any = uuid()
  Name: String = ""
  Order: Number = 0
  Tiles: Array<[]> = []
  Visible: Boolean = true
  Locked: Boolean = false

}