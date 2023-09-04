import Layout from '@/components/layout/layout';
import NavBar from '@/components/navigation/navBar.jsx';
import Title from '@/pages/leaders/[title]';
import Home from '@/pages/index.js';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';

describe('Home Page Navigation', () => {
  it('render Home page with Layout (NavBar)', () => {
    render(
      <Layout>
        <Home />
      </Layout>,
    );
    expect(screen.getByText('Top Stories')).toBeInTheDocument();
  });
});

describe('Clicking navBar Ask Stores', () => {
  it('should find the ask stories button in navBar and click it', async () => {
    render(
      <Layout>
        <Home />
      </Layout>,
    );

    const askStoryButton = screen.getByText('Leaders');
    expect(askStoryButton).toBeInTheDocument();
    fireEvent.click(askStoryButton);
  });
});

describe('Memes', () => {
  it('should have memes', () => {
    render(
      <Layout>
        <Title />
      </Layout>,
    );
    const numofeles = screen.getAllByTestId('gridTest');
    expect(numofeles).toHaveLength(20);
  });
});
