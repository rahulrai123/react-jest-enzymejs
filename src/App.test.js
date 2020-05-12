import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});
test("renders learn react counter app", () => {
  expect(wrapper.find("h1").text()).toContain("Counter App");

  /* const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
});

test("render `Increment` counter button", () => {
  expect(wrapper.find("#increment-btn").text()).toBe("Increment");
});

test("render `Decrement` counter button", () => {
  expect(wrapper.find("#decrement-btn").text()).toBe("Decrement");
});

test("render initial `counter` value", () => {
  expect(wrapper.find("#counter-value").text()).toBe("0");
});

test("render incremented `counter` value", () => {
  wrapper.find("#increment-btn").simulate("click");
  expect(wrapper.find("#counter-value").text()).toBe("1");
});

test("render decremented `counter` value", () => {
  wrapper.find("#increment-btn").simulate("click");
  wrapper.find("#decrement-btn").simulate("click");
  expect(wrapper.find("#counter-value").text()).toBe("0");
});
test("render  `counter` value should be greter than `0`", () => {
  wrapper.find("#decrement-btn").simulate("click");
  expect(wrapper.find("#counter-value").text()).toBe("0");
});
