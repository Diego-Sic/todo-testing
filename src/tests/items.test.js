import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoList } from '../todoList';
import { v4 as uuidv4 } from 'uuid';
global.crypto = {
  ...global.crypto,
  randomUUID: uuidv4,
};

describe('TodoList', () => {
  const mockToggleTodo = jest.fn();
  const mockDeleteTodo = jest.fn();
  const todos = [
    { id: crypto.randomUUID(), title: 'First Todo', completed: false },
    { id: crypto.randomUUID(), title: 'Second Todo', completed: true },
  ];

  beforeEach(() => {
    render(<TodoList todos={todos} toggleTodo={mockToggleTodo} deleteTodo={mockDeleteTodo} />);
  });

  it('renders the correct number of todos', () => {
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(todos.length);
  });

  it('calls deleteTodo when the delete button is clicked', () => {
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    expect(mockDeleteTodo).toHaveBeenCalledWith(todos[0].id);
  });

  it('calls toggleTodo when the todo item is checked/unchecked', () => {
    const toggleCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(toggleCheckbox);
    expect(mockToggleTodo).toHaveBeenCalledWith(todos[0].id, !todos[0].completed);
  });
});



