import { decodeToken } from "../database/authentication";
import { IUser, IUserInput } from "interfaces/interfaces";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../store/actions";
import { useRouter } from "next/router";
import { useCallback } from "react";

const useUserAPI = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const checkEmail = async (input: string) => {
    const result = await fetch("/api/checkEmail", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(input),
    });
    if (result.status === 403) return false;
    return true;
  };
  const checkName = async (input: string) => {
    const result = await fetch("/api/checkName", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(input),
    });
    if (result.status === 403) return false;
    return true;
  };

  const userLogin = async (
    input: string,
    input2: string,
    stayLogged: boolean
  ) => {
    const loginInfo = {
      userName: input,
      password: input2,
    };
    const result = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    });
    if (result.status === 403) return false;

    const data = await result.json();
    const user = decodeToken(data.token);
    dispatch(loginUserAction(user));
    if (stayLogged) localStorage.setItem("token", user.token);
    sessionStorage.setItem("token", user.token);
    return true;
  };

  const userLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    const user = {
      userName: "",
      email: "",
      token: "",
      verified: false,
      country: "",
      birthDate: "",
      memberSince: "",
    };
    dispatch(loginUserAction(user));
    router.push("/home");
  };
  const updateName = async (newName: string) => {
    const token = sessionStorage.getItem("token");
    const result = await fetch("/api/updateName", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newName),
    });
    if (result.status === 403) return false;
    return true;
  };

  const updateEmail = async (newEmail: string) => {
    const token = sessionStorage.getItem("token");
    const result = await fetch("/api/updateEmail", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newEmail),
    });
    if (result.status === 403) return false;
    return true;
  };

  const updateCountry = async (country: string) => {
    const token = sessionStorage.getItem("token");
    const result = await fetch("/api/updateCountry", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(country),
    });
    if (result.status === 403) return false;
    return true;
  };

  const updateCard = async (card: string) => {
    const token = sessionStorage.getItem("token");
    const result = await fetch("/api/updateCard", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(card),
    });
    if (result.status === 403) return false;
    return true;
  };

  const getLoggedUser = useCallback(async () => {
    const token = sessionStorage.getItem("token");
    const result = await fetch("/api/getLoggedUser", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (result.status === 200) {
      const { user } = await result.json();
      dispatch(loginUserAction(user));
      return true;
    }
    return false;
  }, []);

  const userRegister = async (userData: IUserInput) => {
    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return result;
  };
  return {
    checkEmail,
    checkName,
    userLogin,
    userRegister,
    userLogout,
    updateName,
    updateEmail,
    getLoggedUser,
    updateCountry,
    updateCard,
  };
};

export default useUserAPI;
