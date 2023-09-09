import { render, screen } from '@testing-library/react';
import NavBar from '@/components/navigation/navBar.jsx';

describe('NavBar', () => {
  describe('Rendering', () => {
    it('should render a NavBar with 8 list button routes', () => {
      render(<NavBar />);
      const totalButtons = screen.getAllByRole('listitem');
      expect(totalButtons).toHaveLength(8);
    });

    it('should render normal screen NavBar and have a Home button', () => {
      render(<NavBar />);
      expect(screen.getByText('Home')).toBeInTheDocument();
    });

    it('should render normal screen NavBar and have a Leaders button', () => {
      render(<NavBar />);
      expect(screen.getByText('Leaders')).toBeInTheDocument();
    });

    it('should render normal screen NavBar and find a Top Stories button', () => {
      render(<NavBar />);
      expect(screen.getByText('Top Stories')).toBeInTheDocument();
    });
  });
});
