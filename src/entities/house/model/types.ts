export interface IHouseData {
    readonly id: number;
    name: string;
    readonly date_added: string;
    readonly date_modified: string;
}

export interface ICreateHouse {
	name: string;
	// user_id: number;
}