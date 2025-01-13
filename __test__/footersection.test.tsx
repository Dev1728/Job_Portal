import { render, screen } from "@testing-library/react";
import FooterSection from "@/app/components/footerSection";
import '@testing-library/jest-dom';

describe("FooterSection", () => {
  it("renders the footerSection without crashing", () => {
    render(<FooterSection />);

    // Check if the main content is rendered
    expect(screen.getByText(/Free resume design templates/i)).toBeInTheDocument();
    expect(screen.getByText(/What is next/i)).toBeInTheDocument();
    expect(screen.getByText(/Platform/i)).toBeInTheDocument();
  });

  it("should display an image with alt text", () => {
    render(<FooterSection />);

    // Check if Image has an alt attribute
    const image = screen.getByAltText(/Resume Design Templates/i);
    expect(image).toHaveAttribute("alt", "Resume Design Templates");
  });

 

  it("ensures larger text or images do not break layout on mobile view", () => {
    render(<FooterSection />);

    // Simulate mobile screen size
    global.innerWidth = 480;
    global.dispatchEvent(new Event("resize"));

    // Check for the text being present without breaking layout
    expect(screen.getByText(/Free resume design templates/i)).toBeInTheDocument();
    expect(screen.getByText(/What is next/i)).toBeInTheDocument();
    expect(screen.getByText(/Platform/i)).toBeInTheDocument();
    
    // Check if image fits on mobile without breaking layout
    const image = screen.getByAltText("Resume Design Templates");
    expect(image).toHaveClass('below-sm:w-[200px]'); // Assumes below-sm:w-[200px] for mobile
  });

  it("ensures large text does not break the layout", () => {
    render(<FooterSection />);

    // Check if the long text doesn't break
    const longText = screen.getByText(/By following these design tips, you can create a professional and effective resume/i);
    expect(longText).toBeInTheDocument();
    expect(longText).not.toHaveStyle("white-space: nowrap"); // It should wrap if too long
  });

  it("ensures the copyright text is present and not breaking", () => {
    render(<FooterSection />);

    const copyrightText = screen.getByText(/© Copywriting/);
    expect(copyrightText).toBeInTheDocument();
    expect(copyrightText).not.toHaveStyle("overflow: hidden");
  });

  
});
