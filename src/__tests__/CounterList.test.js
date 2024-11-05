import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CounterList from '../components/CounterList';

describe("CounterList Component", () => {
    it("should render the initial counter", () => {
        render(<CounterList />);
        const counter = screen.getByText("0");
        expect(counter).toBeInTheDocument();
    });

    it("should add a new counter on button click", () => {
        render(<CounterList />);

        const addButton = screen.getByText("Add Counter");
        fireEvent.click(addButton);

        const counters = screen.getAllByText("0");
        expect(counters.length).toBe(2);
    });
});
