import { render, screen } from '@testing-library/react';
import Sidebar from '../components/sidebar.jsx'

test('Has a logo', () => {
  render(<Sidebar />)
  const logo = screen.getByText(/Devchallenges.io/i)
  expect(logo).toBeInTheDocument()
})
test('Has a list of links', () => {
  render(<Sidebar />)
  const list = screen.getByRole('list')
  expect(list).toBeInTheDocument()
})
