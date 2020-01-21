import { uuid } from 'uuidv4'

export default class User {

  ID: any = uuid()
  Email: String = ""
  Password: String = ""

  constructor(props: any = {}) {

    const self: any = this
    Object.keys(props).map((k: any) => { self[k] = props[k] })

  }

}