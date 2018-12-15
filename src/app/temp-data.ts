export interface CampList {
  title: string ;
  venue: string ;
  time: string ;
  description: string ;
  date: string ;
  month: string ;
  image: string ;
}

export interface Users {
  name: string;
  last_name: string;
  eid: string;
  password1: string;
  password_confirmation: string;
  gender: string;
  date: Date;
  phn: number;
  adress: {
      street: string;
      city: string;
      state: string;
      pincode: number;
  };
}
