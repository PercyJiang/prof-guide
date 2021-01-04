import { PostModel } from "./post"

export class UserModel {
    id?: number
    username!: string
    password!: string
    created?: Date
    posts?: Array<PostModel>
}