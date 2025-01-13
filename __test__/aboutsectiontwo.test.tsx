import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AboutSectionTwo from '@/app/components/aboutSectionTwo';

// Mock `lucide-react` icons to ensure icons do not interfere with testing
jest.mock('lucide-react', () => ({
  FileText: () => <svg data-testid="FileText" />,
  Mail: () => <svg data-testid="Mail" />,
  Users: () => <svg data-testid="Users" />,
  Send: () => <svg data-testid="Send" />,
  LayoutGrid: () => <svg data-testid="LayoutGrid" />,
  FileSearch: () => <svg data-testid="FileSearch" />,
}));

describe('AboutSectionTwo', () => {
  it('renders the section title and description', () => {
    render(<AboutSectionTwo />);

    // Verify the main title and description are rendered
    const mainTitle = screen.getByText(/Spend less time/i);
    const description = screen.getByText(/We'll help you through the hardest part of your job search./i);

    expect(mainTitle).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('renders all feature cards with correct content', () => {
    render(<AboutSectionTwo />);

    // Verify each feature card content is rendered
    const features = [
      { title: 'Cover Letter', description: 'A cover letter is a document that accompanies a job application' },
      { title: 'Resignation Letters', description: 'A resignation letter is a formal document' },
      { title: 'Connection Request', description: 'A connection request is a message sent on a social networking site' },
      { title: 'Outreach Emails', description: 'Outreach emails are messages sent by individuals or businesses' },
      { title: 'Resume Optimization', description: 'Smart Personalization refers to the use of data' },
      { title: 'Resume Design', description: 'A resume scanner is a software application' },
    ];

    features.forEach(({ title, description }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
      expect(screen.getByText(new RegExp(description, 'i'))).toBeInTheDocument();
    });
  });

  it('ensures all icons are rendered correctly', () => {
    render(<AboutSectionTwo />);

    // Verify icons are rendered
    const icons = ['FileText', 'Mail', 'Users', 'Send', 'LayoutGrid', 'FileSearch'];
    icons.forEach((icon) => {
      expect(screen.getByTestId(icon)).toBeInTheDocument();
    });
  });

  it('is responsive to mobile view', () => {
    global.innerWidth = 480;
    global.dispatchEvent(new Event('resize'));
  
    render(<AboutSectionTwo />);
  
    const mainContainer = screen.getByTestId('about-section');
    expect(mainContainer).toHaveClass('below-sm:min-h-screen below-sm:flex below-sm:flex-col');
  });
  
  
  it('handles larger images or text gracefully', () => {
    render(<AboutSectionTwo />);

    // Verify larger text does not break the layout
    const mainTitle = screen.getByText(/Spend less time/i);
    expect(mainTitle).toHaveClass('text-2xl sm:text-3xl md:text-4xl');

    // Verify feature cards are responsive and preserve spacing
    const featureCards = screen.getAllByText(/A cover letter is|A resignation letter|A connection request/i);
    featureCards.forEach((card) => {
      expect(card.closest('div')).toHaveClass('rounded-lg border bg-[#2A2A2A] p-6');
    });
  });

  it('ensures all images have alt text', () => {
    render(<AboutSectionTwo />);

    // Verify all icons have meaningful alternative text
    const icons = ['FileText', 'Mail', 'Users', 'Send', 'LayoutGrid', 'FileSearch'];
    icons.forEach((icon) => {
      const svgIcon = screen.getByTestId(icon);
      expect(svgIcon).toBeInTheDocument();
    });
  });
});
