import { useEffect } from 'react';
import { useAssetStore } from '../store/useAssetStore';

export const useTelemetryStream = () => {
    const updateAsset = useAssetStore((state) => state.updateAsset);

    useEffect(() => {
        // Simulating a high-frequency real-time data stream
        const interval = setInterval(() => {
            updateAsset({
                id: 'UAV-ALPHA-1',
                latitude: 39.9207 + (Math.random() * 0.05),
                longitude: 32.8541 + (Math.random() * 0.05),
                status: Math.random() > 0.85 ? 'WARNING' : 'ACTIVE'
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [updateAsset]);
};