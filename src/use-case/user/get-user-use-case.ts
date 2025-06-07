import { IUserProps } from "../../domain/models/user"
import { UserMongooseRepository } from "../../infrastructure/database/repositories/user-mongoose-repository"

export default class GetUserUseCase {
  private mongooseRepository: UserMongooseRepository

  constructor(mongooseRepository: UserMongooseRepository) {
    this.mongooseRepository = mongooseRepository
  }

  async execute(props: { page?: number, limit?: number, q?: string }) {
    return await this.mongooseRepository.getUsers(props)
  }
}