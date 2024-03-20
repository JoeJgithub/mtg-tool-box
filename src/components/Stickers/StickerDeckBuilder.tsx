import { Flex } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { stickerSheets } from './stickers.ts';
import type { StickerSheet } from './stickers.ts';
import { StickerCard } from './StickerCard.js';
import { useMainStore } from '@/store.ts';

export function StickerDeckBuilder() {
  const stickerDeck = useMainStore((state) => state.stickerDeck);
  const addToStickerDeck = useMainStore((state) => state.addToStickerDeck);
  const removeFromStickerDeck = useMainStore((state) => state.removeFromStickerDeck);
  const toggleSelectedSticker = (sheet: StickerSheet) => {
    if (stickerDeck.includes(sheet)) {
      removeFromStickerDeck(sheet);
    } else if (!addToStickerDeck(sheet)) {
      notifications.show({
        message: "You've already added the maximum number of stickers to your deck!",
      });
    }
  };

  const sortedSheets: StickerSheet[] = stickerSheets.sort(
    (a, b) => Number(stickerDeck.includes(b)) - Number(stickerDeck.includes(a)) || a.id - b.id
  );

  return (
    <Flex wrap="wrap" gap="lg" direction="row" justify="center" align="center">
      {sortedSheets.map((sheet) => (
        <a
          key={sheet.id}
          role="button"
          tabIndex={0}
          onClick={() => toggleSelectedSticker(sheet)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') toggleSelectedSticker(sheet);
          }}
        >
          <StickerCard selected={stickerDeck.includes(sheet)} {...{ sheet }} />
        </a>
      ))}
    </Flex>
  );
}
