export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}
export interface User {
  id: 1;
  name: string;
  username: string;
  email: string;
  address: PaymentAddress;
  phone: string;
  website: string;
  company: Company;
}
