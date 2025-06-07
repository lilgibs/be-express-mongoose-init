import { Request, Response } from "express";
import { UserMongooseRepository } from "../../../infrastructure/database/repositories/user-mongoose-repository";
import CreateUserUseCase from "../../../use-case/user/create-user-use-case";
import ImportUserCsvUseCase from "../../../use-case/user/import-user-csv-use-case";
import path from "path";
import csv from "csvtojson";
import { queryNumberValidation, queryStringValidation } from "../../../utils/query-validation";
import GetUserBrandDeviceOverviewUseCase from "../../../use-case/user/get-user-brand-device-overview-use-case";
import GetUserGenderOverviewUseCase from "../../../use-case/user/get-user-gender-overview-use-case";
import GetUserLocationTypeOverviewUseCase from "../../../use-case/user/get-user-location-type-overview-use-case";
import GetUserDigitalInterestOverviewUseCase from "../../../use-case/user/get-user-digital-interest-overview-use-case";

const mongooseRepository = new UserMongooseRepository()
const createUserUseCase = new CreateUserUseCase(mongooseRepository)
const importUserCsvUseCase = new ImportUserCsvUseCase(mongooseRepository)
const getUserBrandDeviceOverviewUseCase = new GetUserBrandDeviceOverviewUseCase(mongooseRepository)
const getUserGenderOverviewUseCase = new GetUserGenderOverviewUseCase(mongooseRepository)
const getUserLocationTypeOverviewUseCase = new GetUserLocationTypeOverviewUseCase(mongooseRepository)
const getUserDigitalInterestOverviewUseCase = new GetUserDigitalInterestOverviewUseCase(mongooseRepository)

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await createUserUseCase.execute(req.body)
    return res.status(201).json(user)
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const getUsers = async (req: Request, res: Response) => {
  try {

    const page = queryNumberValidation(req.query.page);
    const limit = queryNumberValidation(req.query.limit);
    const q = queryStringValidation(req.query.q);

    const users = await mongooseRepository.getUsers({
      page: page,
      limit: limit,
      q: q
    })
    return res.status(200).json({
      message: "Users fetched successfully",
      data: users.data,
      pagination: users.pagination
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const importUserCsv = async (req: Request, res: Response): Promise<Response> => {
  if (!req.file) {
    return res.status(400).json({ message: "CSV file is required" });
  }

  const filePath = path.resolve(req.file.path);

  try {
    const jsonArray = await csv().fromFile(filePath);
    await importUserCsvUseCase.execute(jsonArray, filePath)
    return res.status(201).json(
      { message: "CSV file imported successfully" }
    )
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const getUserBrandDeviceOverview = async (req: Request, res: Response) => {
  try {
    const data = await getUserBrandDeviceOverviewUseCase.execute()
    return res.status(200).json({
      message: "User Brand Device Overview fetched successfully",
      data
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const getUserGenderOverview = async (req: Request, res: Response) => {
  try {
    const data = await getUserGenderOverviewUseCase.execute()
    return res.status(200).json({
      message: "User Gender Overview fetched successfully",
      data
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const getUserLocationTypeOverview = async (req: Request, res: Response) => {
  try {
    const data = await getUserLocationTypeOverviewUseCase.execute()
    return res.status(200).json({
      message: "User Location Type Overview fetched successfully",
      data
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}

export const getUserDigitalInterestOverview = async (req: Request, res: Response) => {
  try {
    const data = await getUserDigitalInterestOverviewUseCase.execute()
    return res.status(200).json({
      message: "User Digital Interest Overview fetched successfully",
      data
    })
  } catch (error) {
    return res.status(500).json(error)
  }
}
