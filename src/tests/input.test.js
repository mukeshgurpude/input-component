import { render, screen, cleanup } from "@testing-library/react";
import Input from "../components/input";

test('Should accept multiline', () => {
  render(<Input multiline />)
  let input = screen.getAllByRole('textbox')[0]
  expect(input.tagName).toBe('TEXTAREA')

  cleanup()
  render(<Input />)
  input = screen.getAllByRole('textbox')[0]
  expect(input.tagName).toBe('INPUT')
})
