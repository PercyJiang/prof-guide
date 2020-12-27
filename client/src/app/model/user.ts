import { PostModel } from "./Post"

export class UserModel {
    id?: number
    username!: string
    password!: string
    created?: Date
    posts?: Array<PostModel>
}