import { IUserProps } from "../../../domain/models/user"
import UserModel from "../models/user-model"

export class UserMongooseRepository {
  async createUser(data: IUserProps) {
    const newUser = new UserModel(data)
    return await newUser.save()
  }

  async bulkCreateUser(users: IUserProps[]) {
    return await UserModel.insertMany(users)
  }

  async getUsers(props: { page?: number, limit?: number, q?: string }) {

    const page = props.page || 1;
    const limit = props.limit || 10;

    const data = await UserModel.find().skip((page - 1) * limit).limit(limit || 10).exec()
    const totalData = await UserModel.countDocuments();

    let pagination: {
      page: number,
      limit: number,
      totalPages: number,
      totalDisplayedRows: number,
      totalRows: number,
      nextPage: number | null,
      prevPage: number | null
    } = {
      page: 1,
      limit: 10,
      totalPages: 1,
      totalDisplayedRows: 0,
      totalRows: totalData,
      nextPage: null,
      prevPage: null
    }

    if (page && limit) {
      pagination.page = page || 1;
      pagination.totalPages = Math.ceil(totalData / limit);
      pagination.totalDisplayedRows = ((page - 1) * limit) + data.length;
      pagination.nextPage = page !== pagination.totalPages ? page + 1 : null;
      pagination.prevPage = page !== 1 ? page - 1 : null;
    }

    return {
      data,
      pagination
    }
  }

  async getUserBrandDeviceOverview() {
    const result = await UserModel.aggregate([
      {
        $group: {
          _id: "$brandDevice",
          value: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
          value: 1
        }
      }
    ]);

    return result;
  }

  async getUserGenderOverview() {
    const result = await UserModel.aggregate([
      {
        $group: {
          _id: "$gender",
          value: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
          value: 1
        }
      }
    ]);

    return result;
  }

  async getUserDigitalInterestOverview() {
    const result = await UserModel.aggregate([
      {
        $group: {
          _id: "$digitalInterest",
          value: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
          value: 1
        }
      }
    ]);

    return result;
  }

  async getUserLocationTypeOverview() {
    const result = await UserModel.aggregate([
      {
        $group: {
          _id: "$locationType",
          value: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
          value: 1
        }
      }
    ]);

    return result;
  }
}