import Leaders from '@/pages/leaders/[title].jsx';
import { render, screen, fireEvent } from '@testing-library/react';
describe('Leader page grid', () => {
    it('should render 20 cards in the grid for Leaders', () => {
      render(
          <Leaders/>
      );
    
      const list = screen.getAllByRole('listitem');
      expect(list).toHaveLength(20);
    
    })
    
    it('should do the roar', () => {
      render(<Leaders/>);
      const userName = screen.getByText('tptacek');
      expect(userName).toBeInTheDocument();
    })
    })