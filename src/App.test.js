import { render, screen } from '@testing-library/react';
import App from './App';

test('check Monthly Rewards link', () => {
  render(<App />);
  const MonthlyText = screen.getByText(/Monthly Rewards/i);
  expect(MonthlyText).toBeInTheDocument();
});

test('check Total Rewards',()=>{
  render(<App/>);
  const TotalRewardText = screen.getByText(/Total Rewards/i);
  expect(TotalRewardText).toBeInTheDocument();
})

test('check All transactions',()=>{
  render(<App/>);
  const TotalRewardText = screen.getByText(/All transactions/i);
  expect(TotalRewardText).toBeInTheDocument();
})
