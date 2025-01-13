import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AIOptimization from '@/app/components/AIOptimization'; 
describe('AIOptimization Component', () => {
    it('should render the component correctly', () => {
        render(<AIOptimization />);
        
        // Check if the Hero Section and  the Resume Section is rendered correctly
        const longText = screen.getByText(/By optimizing keywords in your resume, you can increase/i);
        expect(longText).toBeInTheDocument();
        expect(screen.getByText(/A free AI cover letter generator powered by GPT is a tool/i)).toBeInTheDocument();
     
        // Check if images have alt text
        const images = screen.getAllByAltText(/AI Cover Letter Generator illustration/i);
        expect(images).toHaveLength(1);
        expect(images[0]).toHaveAttribute('alt', 'AI Cover Letter Generator illustration');
        
        const resumeImages = screen.getAllByAltText(/Resume Optimization illustration/i);
        expect(resumeImages).toHaveLength(1);
        expect(resumeImages[0]).toHaveAttribute('alt', 'Resume Optimization illustration'); 
      });
      

  it('should ensure large text or image does not break the layout', () => {
    render(<AIOptimization />);
    
    // Check for proper handling of long text
    const longText = screen.getByText(/By optimizing keywords in your resume, you can increase/i);
    expect(longText).toBeInTheDocument();
    expect(longText).toHaveClass('overflow-wrap: break-word');  // Assuming this style is applied

    // Ensure that images fit properly
    const img = screen.getByAltText('AI Cover Letter Generator illustration');
    expect(img).toHaveClass('object-contain rounded-lg');  // Ensuring the image doesn't overflow its container
  });

  it('should render correctly on mobile view', async () => {
    // Set the viewport to mobile size (e.g., 320px)
    global.innerWidth = 320;
    global.innerHeight = 568;
    window.dispatchEvent(new Event('resize'));
  
    // Render the component
    render(<AIOptimization />);
  
    // Check that the order of elements switches on mobile (assuming the order changes based on screen size)
    const image = screen.getByTestId('parent');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('order-1 lg:order-2 below-sm:mb-0');  // Assuming the image is displayed in the first position on mobile
  
    const button = screen.getByText(/Try For Free Now/i);
    expect(button).toBeInTheDocument();
  });
  

  
  
  it('should handle button functionality (e.g., click event)', () => {
    render(<AIOptimization />);
    
    // Find the button and simulate a click event
    const button = screen.getByText(/Try For Free Now/i);
    expect(button).toBeInTheDocument();
    
    // Simulate the click event
    button.click();
    

  });
});
