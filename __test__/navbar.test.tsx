import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '@/app/components/ui/navbar';  // Adjust the import if needed

describe('Navbar', () => {
  it('renders the Navbar with correct items', () => {
    render(<Navbar />);

    // Check if the logo is rendered
    const logo = screen.getByText('PostJob');
    expect(logo).toBeInTheDocument();

    // Check if the links in the desktop navigation are present
    const aiCoverLetterLink = screen.getByText('AI Cover Letter Generator');
    const resumeTemplateLink = screen.getByText('Resume Template');
    const pricingLink = screen.getByText('Pricing');
    expect(aiCoverLetterLink).toBeInTheDocument();
    expect(resumeTemplateLink).toBeInTheDocument();
    expect(pricingLink).toBeInTheDocument();

    // Check if the 'Sign In' and 'Get Started' buttons are present
    const signInButton = screen.getByText('Sign In');
    const getStartedButton = screen.getByText('Get Started');
    expect(signInButton).toBeInTheDocument();
    expect(getStartedButton).toBeInTheDocument();
  });

  
});
