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
});
