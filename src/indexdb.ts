const pkg = require("../package.json")

export default class IndexDB {

  Request: any
  Database: any
  Results: any

  constructor(database: string) {

    let version = pkg.version.replace(/\./g,'')

    this.Request = indexedDB.open(database, version)

    this.Request.onsuccess = ((event: any) => {

      this.Database = this.Request.result

    })

  }

  Create(stores: any) {

    this.Request.onupgradeneeded = ((event: any) => {

      this.Results = this.Request.result

      Object.keys(stores).map((name: any) => {

        let indexes = stores[name]

        if(this.Results.objectStoreNames.contains(name)) {

          this.Results.deleteObjectStore(name)
    
        }

        let store = this.Results.createObjectStore(name, { keyPath: name, autoIncrement: true })

        Object.keys(stores[name]).map(index => {

          store.createIndex(index, index, { unique: false })

        })

      })

    })

  }

}