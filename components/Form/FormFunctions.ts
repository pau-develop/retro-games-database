const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
const passwordRegex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{5,15}$/);
const userNameRegex = new RegExp(/^[a-zA-Z0-9]{3,15}$/);

export const validatePassword = (currentInput: HTMLInputElement) => {
  if (passwordRegex.test(currentInput.value)) return 0;
  let strings = new Array();
  if (currentInput.value.length < 4 || currentInput.value.length > 14)
    strings = ["⚠ Must be 5-15 characters long"];
  if (!/\d/.test(currentInput.value))
    strings = [...strings, "⚠ Must contain one number"];
  if (!/[A-Z]/.test(currentInput.value))
    strings = [...strings, "⚠ Must contain one upper case character"];
  if (!/[a-z]/.test(currentInput.value))
    strings = [...strings, "⚠ Must contain one lower case character"];

  return strings;
};

export const validateName = (currentInput: HTMLInputElement) => {
  if (userNameRegex.test(currentInput.value)) return 0;
  let strings = new Array();
  if (currentInput.value.length < 3 || currentInput.value.length > 15) {
    strings = ["⚠ Must be 3-15 characters long"];
  }
  if (/[!@#$%^&*(),.?":{}|<>]/.test(currentInput.value))
    strings = [...strings, "⚠ Only letters and numbers allowed"];

  return strings;
};

export const validateEmail = (currentInput: HTMLInputElement) => {
  if (emailRegex.test(currentInput.value)) return 0;
  return ["⚠ That is not a valid email address"];
};

export const revalidatePassword = (
  currentInput: HTMLInputElement,
  currentInput2: HTMLInputElement
) => {
  if (currentInput.value === currentInput2.value) return 0;
  return ["⚠ Passwords do not match"];
};

export const setValue = (box: HTMLInputElement, value: string) => {
  return (box.value = value);
};
