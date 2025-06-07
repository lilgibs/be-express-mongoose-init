import { IUserProps } from "../../domain/models/user"
import { UserMongooseRepository } from "../../infrastructure/database/repositories/user-mongoose-repository"
// import fs from "fs";
// import path from "path";

export default class ImportUserCsvUseCase {
  private mongooseRepository: UserMongooseRepository

  constructor(mongooseRepository: UserMongooseRepository) {
    this.mongooseRepository = mongooseRepository
  }

  async execute(data: any[], filePath: string) {
    try {
      const users: IUserProps[] = data.map((item: any) => ({
        number: item["Number"],
        name: item["Name"],
        birthYear: parseInt(item["Age"]),
        gender: item["gender"],
        email: item["Email"],
        phoneNumber: item["No Telp"],
        nameOfLocation: item["Name of Location"],
        date: new Date(item["Date"]),
        loginHour: item["Login Hour"],
        brandDevice: item["Brand Device"],
        digitalInterest: item["Digital Interest"],
        locationType: item["Location Type"]
      }))

      await this.mongooseRepository.bulkCreateUser(users)
    } catch (error) {
      throw error
    } finally {
      // fs.unlinkSync(path.join(filePath))
    }
  }
}