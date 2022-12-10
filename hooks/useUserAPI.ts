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
  return { checkEmail, checkName };
};

export default useUserAPI;
