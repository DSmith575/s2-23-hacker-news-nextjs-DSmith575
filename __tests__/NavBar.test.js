import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '@/components/navigation/navBar.jsx';

describe('NavBar', () => {
  describe('Rendering', () => {
    it('should render a NavBar with 9 buttons', () => {
      render(<NavBar />);
      const totalButtons = screen.getAllByRole('link');
      expect(totalButtons).toHaveLength(9);
    });

    it('should render normal screen NavBar and have a Home button', () => {
      render(<NavBar />);
      expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('should render normal screen NavBar and find a Leaders button', () => {
      render(<NavBar />);
      expect(screen.getByText('Leaders')).toBeInTheDocument();
    });
  });
});
