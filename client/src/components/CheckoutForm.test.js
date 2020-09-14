import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  const header = getByText(/Checkout Form/i);
});

test("form shows success message on submit with form details", () => {
//   const { getByText } = render(<CheckoutForm />);
const { getByTestId } = render(<CheckoutForm />);
  const checkoutSubmit = getByTestId(/checkoutButton/i);
  expect(checkoutSubmit).toBeInTheDocument();
  fireEvent.click(checkoutSubmit);

  const successMessage = getByTestId(/successMessage/i);
  expect(successMessage).toBeInTheDocument();
});
