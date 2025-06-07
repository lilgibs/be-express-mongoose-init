import { IUserProps } from "../../domain/models/user"
import { UserMongooseRepository } from "../../infrastructure/database/repositories/user-mongoose-repository"

export default class CreateUserUseCase {
  private mongooseRepository: UserMongooseRepository

  constructor(mongooseRepository: UserMongooseRepository) {
    this.mongooseRepository = mongooseRepository
  }

  async execute(data: IUserProps) {
    return await this.mongooseRepository.createUser(data)
  }
}