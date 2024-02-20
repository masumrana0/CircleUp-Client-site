import { jwtDecode } from "jwt-decode";
import { authKey } from "@/constants/storageKey";
import { instance as axiosInstance } from "@/helpers/axios/axiosInstance";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { IDecodedToken } from "@/types/auth";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken as string);
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export const getUserInfo = (): IDecodedToken | null => {
  if (isLoggedIn()) {
    const token = getFromLocalStorage(authKey);
    try {
      const userDecodedData = jwtDecode(token as string) as IDecodedToken;
      return userDecodedData;
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  }
  return null;
};

// console.log(getUserInfo());

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await axiosInstance({
    url: `${getBaseUrl()}/auth/refresh-token`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
  });
};
