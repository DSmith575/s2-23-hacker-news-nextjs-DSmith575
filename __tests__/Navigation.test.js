import Layout from '@/components/layout/layout.jsx';
import NavBar from '@/components/navigation/navBar.jsx';
import Leaders from '@/pages/leaders/[title].jsx';
import Stories from '@/pages/story/[title].jsx';
import Home from '@/pages/index.js';
import { render, screen, fireEvent } from '@testing-library/react';
import NavDropDown from '@/components/navigation/navDropDown.jsx';

describe('NavBar', () => {
  describe('Rendering', () => {
    it('should render a NavBar with 9 buttons', () => {
      render(<NavBar />);
      const totalButtons = screen.getAllByRole('link');
      expect(totalButtons).toHaveLength(9);
    });

    it('should click hamburg Dropdown and display routes', () => {
      render(<NavDropDown />);

      const hamburgerIcon = screen.getByTitle('Hamburger Icon');
      expect(hamburgerIcon).toBeInTheDocument();
      fireEvent.click(hamburgerIcon);
      expect(screen.getByText('Ask Stories')).toBeInTheDocument();
    });

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
  });
});

describe('Leader page grid', () => {
  it('should render 20 cards in the grid for Leaders', () => {
    render(<Leaders />);

    const eles = screen.getAllByRole('listitem');
    expect(eles).toHaveLength(20);
  });

  it('check if Leader page contains a guaranteed user ', () => {
    render(<Leaders />);
    const test = screen.getByText('tptacek');
    expect(test).toBeInTheDocument();
  });
});
