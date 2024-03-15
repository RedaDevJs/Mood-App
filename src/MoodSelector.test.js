import React from 'react';
import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import MoodSelector from './MoodSelector';
import expect from "expect";

describe('MoodSelector Component', () => {
    it('should render component correctly', () => {
        render(<MoodSelector />);
        expect(screen.getByText('Sélectionnez votre humeur')).toBeInTheDocument();
    });

    it('should select mood when button is clicked', () => {
        render(<MoodSelector />);
        const happyButton = screen.getByText('😊 Heureux');

        fireEvent.click(happyButton);

        expect(happyButton).toHaveClass('selected');
    });

    it('should submit mood when submit button is clicked', async () => {
        const handleSubmit = jest.fn();
        render(<MoodSelector onSubmit={handleSubmit} />);
        const happyButton = screen.getByText('😊 Heureux');
        const submitButton = screen.getByText('Soumettre');

        fireEvent.click(happyButton);
        fireEvent.click(submitButton);

        await waitFor(() => expect(handleSubmit).toHaveBeenCalledWith('heureux'));
    });

    it('should display confirmation message after submission', async () => {
        render(<MoodSelector />);
        const submitButton = screen.getByText('Soumettre');

        fireEvent.click(submitButton);

        await screen.findByText('Merci pour votre humeur!');
    });

});
