export interface Login {
  accessToken: string;
  refreshToken: string;
}


export interface LoginForm {
  phoneNumber: string;
  password: string;
}



export interface Products {
  id: string;
  name: string;
  price: number
}