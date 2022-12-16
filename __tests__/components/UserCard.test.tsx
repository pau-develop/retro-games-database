import UserCard from "@/components/UserCard/UserCard";
import { render, screen } from "@testing-library/react";
import { mockUser } from "../../mocks/testMocks";

describe("Given a UserCard component", () => {
  describe("When instantiated", () => {
    test("It should filter out the user country from an array of countries received as props and display its flag on an image tag", () => {
      const mockCountryList = [
        { name: { common: "Spain" }, flags: { svg: "fakeSource" } },
      ];
      render(<UserCard user={mockUser} countries={mockCountryList} />);
      const result = screen.getByAltText("Spain's flag");
    });
  });
});
