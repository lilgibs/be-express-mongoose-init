import { UserMongooseRepository } from "../../infrastructure/database/repositories/user-mongoose-repository"

export default class GetUserLocationTypeOverviewUseCase {
  private mongooseRepository: UserMongooseRepository

  constructor(mongooseRepository: UserMongooseRepository) {
    this.mongooseRepository = mongooseRepository
  }

  async execute() {
    return await this.mongooseRepository.getUserLocationTypeOverview()
  }
}