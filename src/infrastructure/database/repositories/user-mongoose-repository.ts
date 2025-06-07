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
    const total = await UserModel.countDocuments();

    let pagination = {
      currentPage: 1,
      totalPage: 1,
      totalDisplayedRows: 0,
      totalRows: total,
      nextPage: null,
      prevPage: null
    }

    if (page && limit) {
      pagination.currentPage = page || 1;
      pagination.totalPage = Math.ceil(total / limit);
      pagination.totalDisplayedRows = ((page - 1) * limit) + data.length;
      pagination.nextPage = page !== pagination.totalPage ? page + 1 : null;
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