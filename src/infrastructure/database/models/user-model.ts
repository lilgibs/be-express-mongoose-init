import { model, Schema } from "mongoose";
import { IUserProps } from "../../../domain/models/user";

const UserSchema = new Schema<IUserProps>({
  number: {
    type: String,
    required: true
  },
  nameOfLocation: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  loginHour: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  birthYear: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String
  },
  brandDevice: {
    type: String,
    enum: ['Samsung', 'Apple', 'Huawei', 'Xiaomi', 'OnePlus', 'Google', 'LG', 'Sony', 'Nokia', 'Motorola']
  },
  digitalInterest: {
    type: String,
    enum: ['Social Media', 'Gaming', 'Technology', 'E-commerce', 'Podcast', 'Music', 'News', 'Sport']
  },
  locationType: {
    type: String,
    enum: ['urban', 'rural', 'sub urban', 'coastal', 'Suburban Fringe', 'metropolitan']
  }
})

export default model<IUserProps>("User", UserSchema);