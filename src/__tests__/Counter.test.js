import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';
import * as api from '../api/api';

jest.mock('../api/api');

describe("Counter Component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render the counter with an initial count of 0", () => {
        render(<Counter />);
        expect(screen.getByText("0")).toBeInTheDocument();
    });

    it("should increment the counter", () => {
        render(<Counter />);

        const incrementButton = screen.getByText("Increment");
        fireEvent.click(incrementButton);

        expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("should decrement the counter", () => {
        render(<Counter />);

        const decrementButton = screen.getByText("Decrement");
        fireEvent.click(decrementButton);

        expect(screen.getByText("-1")).toBeInTheDocument();
    });

    it("should fetch and set a random value on randomize", async () => {
        api.fetchInitialValue.mockResolvedValue({ data: { initialValue: 42 } });

        render(<Counter />);

        const randomizeButton = screen.getByText("Randomize");
        fireEvent.click(randomizeButton);

        await screen.findByText("42");
    });
});
