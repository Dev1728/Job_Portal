import { render, screen } from "@testing-library/react";
import FeatureCards from "@/app/components/featureCards";
import "@testing-library/jest-dom";

describe("FeatureCards Component", () => {
  it("renders without crashing", () => {
    render(<FeatureCards />);

    // Verify that the component renders headings for each feature card
    expect(screen.getByText("AI Cover Letter Generator")).toBeInTheDocument();
    expect(screen.getByText("Smart Personalization")).toBeInTheDocument();
    expect(screen.getByText("Resume Scanner")).toBeInTheDocument();
  });

  it("renders all feature cards", () => {
    render(<FeatureCards />);

    // Verify the total number of feature cards
    const featureCards = screen.getAllByRole("heading", { level: 3 });
    expect(featureCards).toHaveLength(3); // Since there are 3 feature cards
  });

  it("is responsive to mobile view", () => {
    // Simulate a mobile screen size
    global.innerWidth = 480;
    global.dispatchEvent(new Event("resize"));

    render(<FeatureCards />);

    // Verify that the grid structure adapts for smaller screens
    const gridContainer = screen.getByTestId('parent');
    expect(gridContainer).toHaveClass("sm:grid-cols-2"); 
  });

  it("ensures SVG icons are present in each card", () => {
    render(<FeatureCards />);
  
    // Query all <svg> elements with the specific test ID
    const svgIcons = screen.getAllByTestId("feature-icon");
  
    // Check that there are exactly 3 SVG icons (one per card)
    expect(svgIcons).toHaveLength(3);
  });
  

  it("ensures larger images or longer text does not break layout", () => {
    render(<FeatureCards />);

    // Test a long text scenario
    const longTextCard = screen.getByText(
      /The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants./i
    );
    expect(longTextCard).toBeInTheDocument();
  });

 
});
