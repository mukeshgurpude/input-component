import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import App from '../App';

const getNext = (current) => current === 'dark' ? 'light' : 'dark';

test('Theme shall be applied automatically', () => {
  render(<App/>)
  expect(localStorage.getItem('theme')).toBe('auto')
})

test('Dark mode toggle is working fine', () => {
  localStorage.setItem('theme', 'dark');
  render(<App/>)
  const button = screen.getByRole('button', {
    name: /(light|dark)/i
  })
  let current = button.getAttribute('title')
  let next = getNext(current)

  userEvent.click(button)

  expect(button.getAttribute('title')).toBe(next)
  expect(localStorage.getItem('theme')).toBe(next)
})

test('Check if palletes are changing with the toggler', () => {
  localStorage.setItem('theme', 'light');
  render(<App/>)
  const button = screen.getByRole('button', {
    name: /(light|dark)/i
  })
  const root = document.documentElement

  expect(root.getAttribute('color-scheme')).toBe('light')
  userEvent.click(button)
  setTimeout(() => {
    expect(root.getAttribute('color-scheme')).toBe('dark')
  }, 1000)
})
