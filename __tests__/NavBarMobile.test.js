import { render, screen, fireEvent } from '@testing-library/react';
import NavDropDown from '@/components/navigation/navDropDown.jsx';

describe('NavBar', () => {
  describe('Rendering', () => {
    it('should click hamburg Dropdown and display 6 list item routes', () => {
      render(<NavDropDown />);

      const hamburgerIcon = screen.getByTitle('Icon-Hamburger');
      expect(hamburgerIcon).toBeInTheDocument();
      fireEvent.click(hamburgerIcon);
      const routes = screen.getAllByRole('listitem');
      expect(routes).toHaveLength(6);
    });

    it('should only have 2 routes (home/leaders icons) when the hamburger is not clicked', () => {
      render(<NavDropDown />);
      const routes = screen.getAllByRole('link');
      expect(routes).toHaveLength(2);
    });

    it('should have 8 links when the hamburger is open', () => {
      render(<NavDropDown />);
      const hamburgerIcon = screen.getByTitle('Icon-Hamburger');
      expect(hamburgerIcon).toBeInTheDocument();
      fireEvent.click(hamburgerIcon);
      const routes = screen.getAllByRole('link');
      expect(routes).toHaveLength(8);
    });

    it('should click hamburger icon and then test if icon is not there once clicked', () => {
      render(<NavDropDown />);

      const hamburg = screen.getByTitle('Icon-Hamburger');
      expect(hamburg).toBeInTheDocument();
      fireEvent.click(hamburg);
      expect(hamburg).not.toBeInTheDocument();
    });

    it('should click hamburger icon, check for a route, then click x icon', () => {
      render(<NavDropDown />);

      const hamburgerIcon = screen.getByTitle('Icon-Hamburger');
      expect(hamburgerIcon).toBeInTheDocument();

      fireEvent.click(hamburgerIcon);

      const showStories = screen.getByText('Show Stories');
      expect(showStories).toBeInTheDocument();

      const crossIcon = screen.getByTitle('Icon-Cross');
      expect(crossIcon).toBeInTheDocument();
      fireEvent.click(crossIcon);

      expect(showStories).not.toBeInTheDocument();
    });

    it('should not find cross icon on initial render', () => {
      render(<NavDropDown />);

      expect(screen.queryByTitle('Icon-Cross')).not.toBeInTheDocument();
    });

    it('should click hamburg Dropdown and find Ask Stories', () => {
      render(<NavDropDown />);

      const hamburgerIcon = screen.getByTitle('Icon-Hamburger');
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
