
import RootStore from "../mst/stores/RootStore.store"
import { ContentModel } from "../mst/models/Content.model"
import { Instance } from "mobx-state-tree"

interface Animal {
    breed:string
    family:string
    nrLegs:number
    gender:string
    age:number
}
export default Animal;


export interface IRootStore extends Instance<typeof RootStore>{

}

export interface IContentModel extends Instance<typeof ContentModel>{

}