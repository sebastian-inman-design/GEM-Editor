import { uuid } from 'uuidv4'

export default class User {

  ID: any = ""
  Email: any = ""
  Password: any = ""

  constructor(props: any = {}) {

    const self: any = this
    Object.keys(props).map((k: any) => { self[k] = props[k] })

  }

}