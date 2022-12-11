import useUserAPI from "../../hooks/useUserAPI";

describe("Given a useAPI hook", () => {
  describe("When its function 'checkEmail' is called", () => {
    test("If the email already exists on the database it should return false", async () => {
      const { checkEmail } = useUserAPI();
      global.fetch = jest.fn().mockResolvedValue({
        status: 403,
      });
      const result = await checkEmail("fake@email.com");
      expect(result).toBe(false);
    });
    test("If the email doesn't exists on the database it should return true", async () => {
      const { checkEmail } = useUserAPI();
      global.fetch = jest.fn().mockResolvedValue({
        status: 200,
      });
      const result = await checkEmail("fake@email.com");
      expect(result).toBe(true);
    });
  });
  describe("When its function 'checkName' is called", () => {
    test("If the name already exists on the database it should return false", async () => {
      const { checkName } = useUserAPI();
      global.fetch = jest.fn().mockResolvedValue({
        status: 403,
      });
      const result = await checkName("fake user name");
      expect(result).toBe(false);
    });
    test("If the name doesn't exists on the database it should return true", async () => {
      const { checkName } = useUserAPI();
      global.fetch = jest.fn().mockResolvedValue({
        status: 200,
      });
      const result = await checkName("fake user name");
      expect(result).toBe(true);
    });
  });

  describe("When its function 'userLogin' is called", () => {
    test("If either the user name or password are wrong, it will return false", async () => {
      const { userLogin } = useUserAPI();
      global.fetch = jest.fn().mockResolvedValue({
        status: 403,
      });
      const result = await userLogin("test", "Test1");
      expect(result).toBe(false);
    });
    test("If all info is correct, it should return the response", async () => {
      const { userLogin } = useUserAPI();
      global.fetch = jest.fn().mockResolvedValue({
        status: 200,
      });
      const result = await userLogin("test", "Test1");
      expect(result).toStrictEqual({ status: 200 });
    });
  });

  describe("When its function 'userRegister' is called", () => {
    const userData = {
      userName: "tester",
      password: "Test1",
      rePassword: "Test1",
      email: "test@test.com",
    };
    test("It will return ", async () => {
      const { userRegister } = useUserAPI();
      global.fetch = jest.fn().mockResolvedValue({
        status: 200,
      });
      const result = await userRegister(userData);
      expect(result).toStrictEqual({ status: 200 });
    });
  });
});
