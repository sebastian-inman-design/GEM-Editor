import store from "./store"

export default class Storage {

  static Create(Key: string, Data: any) {

    if(!this.Read(Key)) {

      localStorage.setItem(Key, JSON.stringify(Data))

    }

  }

  static Read(Key: string) {

    return localStorage.getItem(Key)

  }

  static Exists(Key: string) {

    return this.Read(Key)

  }

  static Value(Key: string, Prop: string) {

    let Item: any = this.Read(Key)
    let Data: any = JSON.parse(Item)
    let Value: any = false

    Object.keys(Data).map((Index: any) => {

      if(Index === Prop) Value = Data[Index]

    })

    return Value

  }

  static Update(Key: string, Data: any) {

    return localStorage.setItem(Key, JSON.stringify(Data))

  }

  static Remove(Key: string) {

    return localStorage.removeItem(Key)

  }

}