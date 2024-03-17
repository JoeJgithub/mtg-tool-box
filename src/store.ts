import { create } from 'zustand';
import { shuffle } from './helper';

type MainStore = {
  stickerDeck: number[]; // Add sticker object and type later
  addToStickerDeck: (id: number) => void;
  removeFromStickerDeck: (id: number) => void;
  resetStickerDeck: () => void;
  shuffleStickerDeck: () => void;
  drawFromStickerDeck: () => void;
};

export const useMainStore = create<MainStore>((set) => ({
  stickerDeck: [],
  addToStickerDeck: (id: number) => {
    set((state) => ({ stickerDeck: [...state.stickerDeck, id] }));
  },
  removeFromStickerDeck: (id: number) => {
    set((state) => ({ stickerDeck: state.stickerDeck.filter((s) => s !== id) }));
  },
  resetStickerDeck: () => {
    set({ stickerDeck: [] });
  },
  shuffleStickerDeck: () => {
    set((state) => ({ stickerDeck: shuffle(state.stickerDeck) }));
  },
  drawFromStickerDeck: () => {},
}));
