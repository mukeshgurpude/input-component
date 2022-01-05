import Main from "../components/main";
import { render, screen } from '@testing-library/react'

test('Title exists', () => {
  render(<Main />)
  const title = screen.getByRole('heading', {level: 3})
  expect(title).toBeInTheDocument()
})
