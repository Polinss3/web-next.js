// __tests__/Home.test.tsx

jest.mock("next/navigation", () => ({
  usePathname: () => "@/app/components/page",
}));

import { render, screen } from "@testing-library/react";
import Components from "@/app/components/page";

// Test básico para renderizar la página principal
describe("Home Page", () => {
  it("renders the page header with title and description", () => {
    render(<Components />);

    // Asegúrate de que el título se renderiza
    expect(screen.getByText("Components Next.js")).toBeInTheDocument();

    // Asegúrate de que la descripción se renderiza
    expect(
      screen.getByText(
        "This is a page to show the components and their variations of Next.js"
      )
    ).toBeInTheDocument();
  });

  it("renders BentoGrid component", () => {
    render(<Components />);

    // Asegúrate de que el componente BentoGrid tiene los elementos deseados
    const automatedPostingElements = screen.getAllByText("Automated Posting");
    expect(automatedPostingElements.length).toBeGreaterThan(0);

    const analyticsElements = screen.getAllByText("Analytics Dashboard");
    expect(analyticsElements.length).toBeGreaterThan(0);

    const contentCalendarElements = screen.getAllByText("Content Calendar");
    expect(contentCalendarElements.length).toBeGreaterThan(0);
  });

  it("renders Card components with titles", () => {
    render(<Components />);

    // Verifica que los títulos de las tarjetas se muestren
    expect(screen.getByText("Card 1")).toBeInTheDocument();
    expect(screen.getByText("Card 2")).toBeInTheDocument();
    expect(screen.getByText("Card 3")).toBeInTheDocument();
    expect(screen.getByText("Card 4")).toBeInTheDocument();
  });

  it("renders BigList with items", () => {
    render(<Components />);

    // Verifica algunos elementos de BigList para asegurarse de que se renderizan
    expect(screen.getByText("AI Superpowers")).toBeInTheDocument();
    expect(screen.getByText("Offline mode")).toBeInTheDocument();
    expect(screen.getByText("Collaboration")).toBeInTheDocument();
  });
});
