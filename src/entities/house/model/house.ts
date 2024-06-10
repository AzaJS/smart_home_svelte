import { useToken } from "../../../shared/api/auth/checkAuth";
import { BASE_URL } from "../../../shared/api/consts/URL";
import type { ICreateHouse } from "./types";

export const createHouse = async (obj: ICreateHouse) => {
    console.log(useToken())
    const res = await fetch(`${BASE_URL}house/create`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: useToken()
    });
    const result = await res.json();
    return result;
};

export const deleteHouse = async (id: number) => {
    const res = await fetch(`${BASE_URL}house/delete/${id}`, {
        method: 'DELETE',
        headers: useToken()
    });
    const result = res.json();
    return result;
};

export const getAllHouses = async () => {
    const res = await fetch(`${BASE_URL}house/`, {
        headers: useToken()
    });
    const result = await res.json();
    return result;
};