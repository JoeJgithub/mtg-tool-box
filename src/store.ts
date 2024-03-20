import { create } from 'zustand';
import { shuffle } from './helper';
import type { StickerSheet } from './components/Stickers/stickers';

const MAX_DECK_SIZE = 10;

type MainStore = {
  stickerDeck: StickerSheet[];
  stickerHand: StickerSheet[];
  addToStickerDeck: (sheet: StickerSheet) => boolean;
  removeFromStickerDeck: (sticker: StickerSheet) => void;
  resetStickerDeck: () => void;
  shuffleStickerDeck: () => void;
  drawFromStickerDeck: () => void;
  updateSheetInHand: (newSheet: StickerSheet) => boolean;
};

export const useMainStore = create<MainStore>((set) => ({
  stickerDeck: [],
  stickerHand: [],
  addToStickerDeck: (sheet: StickerSheet) => {
    if (useMainStore.getState().stickerDeck.length < MAX_DECK_SIZE) {
      set((state) => ({ stickerDeck: [...state.stickerDeck, sheet] }));
      return true;
    }
    return false;
  },
  removeFromStickerDeck: (sticker: StickerSheet) => {
    set((state) => ({ stickerDeck: state.stickerDeck.filter((s) => s !== sticker) }));
  },
  resetStickerDeck: () => {
    set({ stickerDeck: [] });
  },
  shuffleStickerDeck: () => {
    set((state) => ({ stickerDeck: shuffle(state.stickerDeck) }));
  },
  drawFromStickerDeck: () => {
    if (useMainStore.getState().stickerDeck.length === 10) {
      set((state) => ({
        stickerHand: state.stickerDeck.slice(0, 3),
      }));
      return true;
    }
    return false;
  },
  updateSheetInHand: (newSheet: StickerSheet) => {
    const tmpHand = [...useMainStore.getState().stickerHand];
    const idx = tmpHand.findIndex((s) => s.id === newSheet.id);
    if (idx >= 0) {
      tmpHand[idx] = newSheet;
      set({ stickerHand: tmpHand });
      return true;
    }
    return false;
  },
}));
