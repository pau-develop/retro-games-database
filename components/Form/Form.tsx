import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  return (
    <FormStyled>
      <label htmlFor="username">User name</label>
      <input id="username"></input>
      <label htmlFor="password">Password</label>
      <input id="password" type="password"></input>
      <label htmlFor="repassword">Repeat password</label>
      <input id="repassword" type="password"></input>
      <label htmlFor="email">Email</label>
      <input id="email"></input>
    </FormStyled>
  );
};

export default Form;
