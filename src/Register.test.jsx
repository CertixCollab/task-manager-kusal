import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('Registration functionality', () => {
  it('shows a personalized welcome message after registering', async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.type(screen.getByLabelText(/name/i), 'Kasun');
    await user.click(screen.getByRole('button', { name: /register/i }));

    expect(screen.getByText('Welcome, Kasun')).toBeInTheDocument();
  });
});
