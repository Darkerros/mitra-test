export interface IUser {
    id: number;
    username: string;
    email: string;
    address: IAdress;
    phone: string;
    website: string;
    company: ICompany;
}

interface IAdress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
        lat: string;
        lng: string;
    }
}

interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}