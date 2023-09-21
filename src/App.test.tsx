import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/utils/api";

describe("Initial components", () => {
  it("should render input search", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );
    const inputSearch = screen.getByPlaceholderText(/Enter Username/i);
    expect(inputSearch).toBeInTheDocument();
  });
  it("should render button search", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );
    const buttonSearch = screen.getByRole("button", { name: /Search/i });
    expect(buttonSearch).toBeInTheDocument();
  });
});

describe("Searching for user", () => {
  it("should render input search", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>,
    );
    const inputSearch = screen.getByPlaceholderText(/Enter Username/i);
    const buttonSearch = screen.getByRole("button", { name: /Search/i });
    fireEvent.change(inputSearch, { target: { value: "iamhkmid" } });
    fireEvent.click(buttonSearch);
    const usernameText = screen.getByText(/Showing users for "iamhkmid"/i);
    expect(usernameText).toBeInTheDocument();
  });
});
