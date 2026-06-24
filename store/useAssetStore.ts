import { create } from 'zustand';

export interface Asset {
    id: string;
    latitude: number;
    longitude: number;
    status: 'ACTIVE' | 'WARNING' | 'OFFLINE';
}

interface AssetState {
    assets: Asset[];
    updateAsset: (updatedAsset: Asset) => void;
}

export const useAssetStore = create<AssetState>((set) => ({
    assets: [],
    updateAsset: (updatedAsset) => set((state) => {
        const index = state.assets.findIndex(a => a.id === updatedAsset.id);
        if (index !== -1) {
            const newAssets = [...state.assets];
            newAssets[index] = updatedAsset;
            return { assets: newAssets };
        }
        return { assets: [...state.assets, updatedAsset] };
    })
}));