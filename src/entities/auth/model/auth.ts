import { BASE_URL } from "../../../shared/api/consts/URL";
import type { IUserCreate, IUserLogin } from "./types";

export const register = async (obj: IUserCreate) => {
	try {
		const res = await fetch(`${BASE_URL}user/create/`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            }
        });
		// console.log(res);
        let result = await res.json();
        return result;
	} catch (error) {
		console.log(error);
		// setError("Error occured");
	}
};

export const login = async (obj: IUserLogin) => {
	try {
		const res = await fetch(`${BASE_URL}auth`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            }
        });
        let result = await res.json();
        let { data } = result;
        if(result.success){
            localStorage.setItem('token', JSON.stringify(data));
        }
        return result;
	} catch (error) {
		console.log(error);
	}
};

export const logout = () => {
	localStorage.removeItem("token");
};
