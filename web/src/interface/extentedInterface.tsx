import Animal from "./mainInterface"

interface Dog extends Animal {
    nickname:string
    ownerName:string
    photo:string
 
}

export default Dog;