import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test('should render the title', () => {
    render(<App/>); // Render the App component
    const title = screen.getByTestId('todo-app');
    expect(title).toBeInTheDocument();
});
