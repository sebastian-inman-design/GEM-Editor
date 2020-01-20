import { uuid } from 'uuidv4'

export default class Asset {

  ID: any = uuid()
  Name: String = ""
  Base64: String = ""
  Type: String = ""
  Size: Number = 0
  Width: Number = 0
  Height: Number = 0
  Tiles: any = []

}