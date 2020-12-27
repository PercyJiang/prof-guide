import { ProfessorModel } from "./professor"
import { UserModel } from "./user"

export class PostModel {
    id?: number
    score!: number
    difficulty!: number
    comment!: String
    user!: UserModel
    professor!: ProfessorModel
}