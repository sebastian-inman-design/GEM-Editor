export default class Layer {

  Name: String = ""
  Order: Number = 0
  Tiles: Array<[]> = []

  constructor(props: any = {}) {

    const self: any = this

    Object.keys(props).map((k: any) => { self[k] = props[k] })

  }

}