import useUserAPI from "hooks/useUserAPI";
import { useCallback, useEffect, useState } from "react";
import FormSectionStyled from "./FormSectionStyled";
import FormStyled from "./FormStyled";
import LoginFormInputs from "./LoginFormInputs";

const LoginForm = (): JSX.Element => {
  return (
    <FormStyled>
      <LoginFormInputs />
    </FormStyled>
  );
};

export default LoginForm;
