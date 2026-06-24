'use client';

import { useTelemetryStream } from '../../hooks/useTelemetryStream';
import { useAssetStore } from '../../store/useAssetStore';

export default function RadarDashboard() {
    // Initialize the simulated data stream
    useTelemetryStream();
    
    // Select only the necessary state to prevent over-rendering
    const assets = useAssetStore((state) => state.assets);

    if (assets.length === 0) {
        return <div data-testid="radar-loading" className="text-gray-400 font-mono">Initializing Radar...</div>;
    }

    return (
        <div className="p-8 bg-slate-950 min-h-screen text-white font-mono flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-8 tracking-widest text-emerald-500 border-b border-emerald-500 pb-2">
                TACTICAL ASSET TRACKER
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                {assets.map((asset) => (
                    <div 
                        key={asset.id} 
                        className={`p-6 rounded border ${asset.status === 'WARNING' ? 'border-red-500 bg-red-950' : 'border-emerald-800 bg-slate-900'} shadow-xl transition-colors duration-500`}
                    >
                        <h2 className="text-xl font-bold mb-4">{asset.id}</h2>
                        <div className="space-y-2 text-sm">
                            <p className="flex justify-between">
                                <span className="text-slate-400">LAT:</span> 
                                <span>{asset.latitude.toFixed(6)}</span>
                            </p>
                            <p className="flex justify-between">
                                <span className="text-slate-400">LNG:</span> 
                                <span>{asset.longitude.toFixed(6)}</span>
                            </p>
                            <p className="flex justify-between mt-4 pt-4 border-t border-slate-700">
                                <span className="text-slate-400">STATUS:</span> 
                                <span className={`font-bold ${asset.status === 'WARNING' ? 'text-red-500 animate-pulse' : 'text-emerald-500'}`}>
                                    {asset.status}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}