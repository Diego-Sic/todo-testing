import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoList } from '../todoList';

describe('TodoList', () => {
  const mockToggleTodo = jest.fn();
  const mockDeleteTodo = jest.fn();
  const todos = [
    { id: 'todo1', title: 'First Todo', completed: false },
    { id: 'todo2', title: 'Second Todo', completed: true },
  ];

  beforeEach(() => {
    render(<TodoList todos={todos} toggleTodo={mockToggleTodo} deleteTodo={mockDeleteTodo} />);
  });

  test('renders the correct number of todos', () => {
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(todos.length);
  });

  test('calls deleteTodo when the delete button is clicked', () => {
    const deleteButtons = screen.getAllByText('Delete');
    fireEvent.click(deleteButtons[0]);
    expect(mockDeleteTodo).toHaveBeenCalledWith(todos[0].id);
  });

  test('calls toggleTodo when the todo item is checked/unchecked', () => {
    const toggleCheckbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(toggleCheckbox);
    expect(mockToggleTodo).toHaveBeenCalledWith(todos[0].id, !todos[0].completed);
  });
});
