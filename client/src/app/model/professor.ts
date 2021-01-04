import { PostModel } from "./post"

export class ProfessorModel {
    id?: number
    profName!: string
    schoolName!: string
    createdDate?: Date
    posts?: Array<PostModel>
}