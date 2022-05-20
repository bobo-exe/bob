
import RootStore from "../mst/store/RootStore"
import { ContentModel } from "../mst/model/Content.model"
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