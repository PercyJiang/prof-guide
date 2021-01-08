import { ProfessorModel } from "./professor"
import { UserModel } from "./user"

export class PostModel {
    id?: number
    score!: number
    difficulty!: number
    comment!: string
    user?: UserModel
    professor?: ProfessorModel
}