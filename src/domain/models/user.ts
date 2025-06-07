export interface IUserProps {
  number: string,
  nameOfLocation: string,
  date: Date,
  loginHour: string,
  name: string,
  birthYear: number,
  gender: string,
  email: string,
  phoneNumber: string,
  brandDevice: 'Samsung' | 'Apple' | 'Huawei' | 'Xiaomi' | 'OnePlus' | 'Google' | 'LG' | 'Sony' | 'Nokia' | 'Motorola',
  digitalInterest: 'Social Media' | 'Gaming' | 'Technology' | 'E-commerce' | 'Podcast' | 'Music' | 'News' | 'Sport',
  locationType: 'urban' | 'rural' | 'sub urban' | 'coastal' | 'Suburban Fringe' | 'metropolitan',
}