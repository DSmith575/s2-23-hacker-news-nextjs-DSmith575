import { render, screen } from '@testing-library/react';
import Leaders from '@/pages/leaders/[title].jsx';

describe('Leader page grid', () => {
  describe('rendering', () => {
  it('should render 20 cards in the grid for Leaders', () => {
    render(<Leaders />);

    const list = screen.getAllByRole('listitem');
    expect(list).toHaveLength(20);
  });

  it('should find the username tptacek in the grid', () => {
    render(<Leaders />);
    const userName = screen.getByText('tptacek');
    expect(userName).toBeInTheDocument();
  });

});
});
