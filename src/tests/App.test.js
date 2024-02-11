import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test('should render App', () => {
    render(<App/>); // Render the App component
    const todoElement = screen.getByTestId('todo-app');
    expect(todoElement).toBeInTheDocument();
});
