const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const passwordRegex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{5,15}$/);
const userNameRegex = new RegExp(/^[a-zA-Z0-9]{3,15}$/);

export const validatePassword = (
  currentInput: HTMLInputElement,
  currentInput2: HTMLInputElement
) => {
  let strings = new Array();
  if (currentInput.value.length === 0) {
    currentInput.value = "";
    currentInput2.value = "";
    return ["⚠ Password field is mandatory"];
  }
  if (currentInput.value.length < 4 || currentInput.value.length > 14)
    strings = ["⚠ Must be 5-15 characters long"];
  if (!/\d/.test(currentInput.value))
    strings = [...strings, "⚠ Must contain one number"];
  if (!/[A-Z]/.test(currentInput.value))
    strings = [...strings, "⚠ Must contain one upper case character"];
  if (!/[a-z]/.test(currentInput.value))
    strings = [...strings, "⚠ Must contain one lower case character"];

  if (passwordRegex.test(currentInput.value)) {
    return 0;
  }

  currentInput.focus();
  currentInput.value = "";
  currentInput2.value = "";
  return strings;
};

export const validateName = (currentInput: HTMLInputElement) => {
  let strings = new Array();
  if (currentInput.value.length === 0) {
    currentInput.value = "";
    return ["⚠ user name field is mandatory"];
  }

  if (currentInput.value.length < 3 || currentInput.value.length > 15) {
    strings = ["⚠ Must be 3-15 characters long"];
  }

  if (/[!@#$%^&*(),.?":{}|<>]/.test(currentInput.value))
    strings = [...strings, "⚠ Only letters and numbers allowed"];

  if (userNameRegex.test(currentInput.value)) {
    return 0;
  }

  currentInput.focus();
  currentInput.value = "";
  return strings;
};

export const validateEmail = (currentInput: HTMLInputElement) => {
  if (currentInput.value.length === 0) {
    currentInput.focus();
    currentInput.value = "";
    return ["⚠ Email field is mandatory"];
  } else if (emailRegex.test(currentInput.value)) return 0;

  currentInput.focus();
  currentInput.value = "";
  return ["⚠ That is not a valid email address"];
};

export const revalidatePassword = (
  currentInput: HTMLInputElement,
  currentInput2: HTMLInputElement
) => {
  if (currentInput.value === currentInput2.value) return 0;

  currentInput2.focus();
  currentInput2.value = "";
  return "⚠ Passwords do not match";
};
