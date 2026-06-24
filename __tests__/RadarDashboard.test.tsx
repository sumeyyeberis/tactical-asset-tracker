import { render, screen } from '@testing-library/react';
import RadarDashboard from '../app/components/RadarDashboard';
import '@testing-library/jest-dom';

describe('RadarDashboard UI Component', () => {
    it('renders the initial radar loading state', () => {
        render(<RadarDashboard />);
        
        const loadingElement = screen.getByTestId('radar-loading');
        expect(loadingElement).toBeInTheDocument();
        expect(loadingElement).toHaveTextContent('Initializing Radar...');
    });
});