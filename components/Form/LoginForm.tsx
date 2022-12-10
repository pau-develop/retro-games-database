import useUserAPI from "hooks/useUserAPI";
import { useCallback, useEffect, useState } from "react";
import FormSectionStyled from "./FormSectionStyled";
import FormStyled from "./FormStyled";
import LoginFormInputs from "./LoginFormInputs";

const LoginForm = (): JSX.Element => {
  const { userLogin } = useUserAPI();

  const handleSubmit = useCallback(async (input: string, input2: string) => {
    const result = await userLogin(input, input2);
    if (result) console.log("LOGGED");
    else console.log("FAIL");
  }, []);

  return (
    <FormStyled>
      <LoginFormInputs actionSubmit={handleSubmit} />
    </FormStyled>
  );
};

export default LoginForm;
