import { BASE_URL } from "../consts/URL";

export const checkAuth = async () => {
    const token = JSON.parse(localStorage.getItem('token') || '{}');
    try {
        let res = await fetch(`${BASE_URL}auth/isAuth`, {
            headers: { Authorization: `Bearer ${token?.access_token}` }
        });
        let result = await res.json();
        return result.success;
    } catch(e) {
        console.warn(e)
    }
}

export const useToken = ():HeadersInit => {
    const token = JSON.parse(localStorage.getItem('token') || "");

    return {
       Authorization: `Bearer ${token?.access_token}`,
    };
  };