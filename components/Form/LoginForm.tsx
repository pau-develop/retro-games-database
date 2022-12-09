import { useCallback, useEffect, useState } from "react";
import FormSection from "../FormSection/FormSection";
import FormStyled from "./FormStyled";

const LoginForm = (): JSX.Element => {
  const handleSubmit = useCallback(async (input: string, input2: string) => {
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
    const status = result.status;
    return result.status;
  }, []);

  return (
    <FormStyled>
      <FormSection
        text={"User name"}
        id={"username"}
        message={"Enter user information"}
        text2={"Password"}
        id2={"password"}
        currentForm={0}
        formType="login"
        actionLogin={handleSubmit}
      />
    </FormStyled>
  );
};

export default LoginForm;
