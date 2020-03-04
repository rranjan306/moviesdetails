interface IGeo {
	lat: string;
	lng: string;
}

interface IAddress {
	street: string;
	suit: string;
	city: string;
	zipcode: string;
	geo: IGeo
}

interface ICompany {
	name: string;
	catchPhrase: string;
	bs: string;
}

export interface IUsers {
	id: number;
	name: string;
	username: string;
	email: string;
	address: IAddress;
	phone: string;
	website: string;
	company: ICompany
}
