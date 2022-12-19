import UserCard from "@/components/UserCard/UserCard";
import { render, screen } from "@testing-library/react";
import { mockUser } from "../../mocks/testMocks";
const mockCountryList = [{ name: "Spain", flags: { svg: "fakeSource" } }];

describe("Given a UserCard component", () => {
  describe("When instantiated", () => {
    test("It should filter out the user country from an array of countries received as props and display its flag on an image tag", () => {
      render(<UserCard user={mockUser} countries={mockCountryList} />);
      const result = screen.getByAltText("Spain's flag");
    });
  });
});
