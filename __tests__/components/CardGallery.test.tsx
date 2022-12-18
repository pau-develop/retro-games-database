import CardGallery from "@/components/CardGallery/CardGallery";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
});

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

const mockArray = [
  { url: "fakeurl", asset_id: "1" },
  { url: "fakeurl", asset_id: "2" },
  { url: "fakeurl", asset_id: "3" },
];

const mockSetState = jest.fn();
const mockState = mockArray;

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: () => [mockState, mockSetState],
}));

const mockFetchImages = jest.fn().mockReturnValue(mockArray);

jest.mock("../../hooks/useCloud", () => () => ({
  ...jest.requireActual("../../hooks/useCloud"),

  fetchImages: () => mockFetchImages(),
}));

describe("Given a CardGallery component", () => {
  describe("When instantiated", () => {
    test("It should call the getImages function (which returns an array of image links) and display a list item for each image in the array", () => {
      jest.useFakeTimers();
      render(<CardGallery action={() => null} type="card" />, {
        wrapper: Wrapper,
      });
      jest.advanceTimersByTime(2000);

      const listItems = screen.getAllByRole("listitem");
    });
  });
});
