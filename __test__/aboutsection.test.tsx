import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AboutSectionOne from '@/app/components/aboutSectionOne';
import Image from 'next/image';

// Mock the Image component from Next.js for testing purposes
jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  default: ({ alt, src, width, height, className }: any) => (
    <Image alt={alt} src={src} width={width} height={height} className={className} />
  ),
}));

describe('AboutSectionOne', () => {
  it('renders the section title and text content', () => {
    render(<AboutSectionOne />);

    // Check for section title and description text
    const title = screen.getByText(/Submit Better Job Application/i);
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText(/10x faster/i);
    expect(subtitle).toBeInTheDocument();

    const description = screen.getByText(/AI cover letter generator, resume keyword checker, outreach, message writer, and Powered by GPT/i);
    expect(description).toBeInTheDocument();
  });

  it('renders the image with correct alt text and class', () => {
    render(<AboutSectionOne />);

    // Ensure the image is rendered with the correct alt text and class
    const image = screen.getByAltText('imgDashboard');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('shadow-lg');
  });

  it('should adjust text size and layout on mobile devices', () => {
    // Mock mobile viewport size
    global.innerWidth = 480; // Simulate mobile view
    global.dispatchEvent(new Event('resize'));

    render(<AboutSectionOne />);

    // Check for mobile-specific styles
    const mobileTitle = screen.getByText(/Submit Better Job Application/i);
    expect(mobileTitle).toHaveClass('below-sm:text-lg');

    const mobileSubtitle = screen.getByText(/10x faster/i);
    expect(mobileSubtitle).toHaveClass('below-sm:text-3xl');
  });

  it('should adjust text size and layout on desktop devices', () => {
    // Mock desktop viewport size
    global.innerWidth = 1200; // Simulate desktop view
    global.dispatchEvent(new Event('resize'));

    render(<AboutSectionOne />);

    // Check for desktop-specific styles
    const desktopTitle = screen.getByText(/Submit Better Job Application/i);
    expect(desktopTitle).toHaveClass('lg:text-4xl');

    const desktopSubtitle = screen.getByText(/10x faster/i);
    expect(desktopSubtitle).toHaveClass('lg:text-6xl');
  });
});
