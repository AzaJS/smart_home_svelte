export interface IUserLogin {
    email: string;
    password: string;
};

export interface IUserCreate {
	username: string;
	email: string;
	password: string;
	is_admin: number;
}