import { render, screen, fireEvent } from '@testing-library/react';
import NavDropDown from '@/components/navigation/navDropDown.jsx';

describe('NavBar', () => {
  describe('Rendering', () => {
    it('should click hamburg Dropdown and display 6 routes', () => {
      render(<NavDropDown />);

      const hamburgerIcon = screen.getByTitle('Hamburger Icon');
      expect(hamburgerIcon).toBeInTheDocument();
      fireEvent.click(hamburgerIcon);
      const routes = screen.getAllByRole('link');
      expect(routes).toHaveLength(6);
    });

    it('should click hamburger icon, then click x icon', () => {
      render(<NavDropDown />);

      const hamburgerIcon = screen.getByTitle('Hamburger Icon');
      expect(hamburgerIcon).toBeInTheDocument();

      fireEvent.click(hamburgerIcon);

      const homeLink = screen.getByText('Show Stories');
      expect(homeLink).toBeInTheDocument();

      const crossIcon = screen.getByTitle('Cross Icon');
      expect(crossIcon).toBeInTheDocument();
      fireEvent.click(crossIcon);

      expect(homeLink).not.toBeInTheDocument();
    });

    it('should click hamburger icon and then test if icon is not there once clicked', () => {
      render(<NavDropDown />);

      const hamburg = screen.getByTitle('Hamburger Icon');
      expect(hamburg).toBeInTheDocument();
      fireEvent.click(hamburg);
      expect(hamburg).not.toBeInTheDocument();
    });

    it('should click hamburg Dropdown and display routes', () => {
      render(<NavDropDown />);

      const hamburgerIcon = screen.getByTitle('Hamburger Icon');
      expect(hamburgerIcon).toBeInTheDocument();
      fireEvent.click(hamburgerIcon);
      expect(screen.getByText('Ask Stories')).toBeInTheDocument();
    });

    it('should not find a Home link in dropdown', () => {
      render(<NavDropDown />);
      expect(screen.queryByText('Home')).not.toBeInTheDocument();
    });

    it('should not find Leaders link in dropdown', () => {
      render(<NavDropDown />);
      expect(screen.queryByText('Leaders')).not.toBeInTheDocument();
    });
  });
});
