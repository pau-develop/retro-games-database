import { IUserInput } from "interfaces/interfaces";

const useUserAPI = () => {
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
  const userLogin = async (input: string, input2: string) => {
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
    else return result;
  };

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
  return { checkEmail, checkName, userLogin, userRegister };
};

export default useUserAPI;
