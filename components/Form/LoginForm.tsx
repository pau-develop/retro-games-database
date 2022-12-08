import { useState } from "react";
import FormSection from "../FormSection/FormSection";
import FormStyled from "./FormStyled";

const initialData = {
  userName: "",
  password: "",
  rePassword: "",
  email: "",
};

const LoginForm = (): JSX.Element => {
  const [userData, setUserData] = useState(initialData);

  const handleSubmit = () => {
    //search user
  };

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
        userData={userData}
        actionSubmit={handleSubmit}
      />
    </FormStyled>
  );
};

export default LoginForm;
