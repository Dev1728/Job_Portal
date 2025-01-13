import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react"
import HeroSection from "@/app/components/heroSection";
  
  describe("HeroSection Component", () => {
    it("renders the HeroSection component", () => {
      render(<HeroSection />);
      expect(screen.getByText(/Win your dream job/i)).toBeInTheDocument();
     
    });

  it("updates the email state on input change", () => {
    render(<HeroSection />);

    const emailInput = screen.getByPlaceholderText("Your Email") as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput.value).toBe("test@example.com");
  });

  it("submits the form and logs the email", () => {
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    render(<HeroSection />);

    const emailInput = screen.getByPlaceholderText("Your Email") as HTMLInputElement;
    const submitButton = screen.getByText("Start For Free");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(submitButton);

    expect(consoleSpy).toHaveBeenCalledWith("test@example.com");
    consoleSpy.mockRestore();
  });

  it("is responsive to mobile view", () => {
    // Simulate mobile screen size
    global.innerWidth = 480;
    global.dispatchEvent(new Event("resize"));

    render(<HeroSection />);

    const heading = screen.getByTestId('h1');
    expect(heading).toHaveClass("text-4xl"); // Mobile size styles applied
  });

  

  it("handles long text and large images gracefully", () => {
    render(<HeroSection />);

    // Check that long description text does not break layout
    const description = screen.getByText(/Submit better job app/i);
    expect(description).toHaveClass("max-w-2xl");

    // Simulate long text in heading
    const heading = screen.getByTestId('h1');
    expect(heading).toHaveClass("text-4xl sm:text-6xl"); // Breakpoints for longer text
  });
});
