import React from "react";
import { render } from "@testing-library/react";
import ShoppingCart from "./ShoppingCart";

export const plants = [
  {
    plant_id: "bogus ID",
    plant_img: "bogus img",
    plant_name: "bogus name",
    plant_price: "bogus price",
  },
  {},
  {},
];

test("displays plants in cart", () => {
  const { queryAllByTestId, rerender } = render(<ShoppingCart cart={[]} />);

  expect(queryAllByTestId("testplants")).toStrictEqual([]);
  expect(queryAllByTestId("testplants")).toHaveLength(0);

  rerender(<ShoppingCart cart={plants} />);

  expect(queryAllByTestId("testplants")).toHaveLength(3);
});
