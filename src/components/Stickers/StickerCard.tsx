import { Flex } from '@mantine/core';
import { Sticker } from './Sticker';
import classes from './StickerCard.module.css';
import { StickerSheet } from './stickers';
import { useMainStore } from '@/store';

interface StickerCardProps {
  sheet: StickerSheet;
  selected?: boolean;
  inHand?: boolean;
}

export function StickerCard({ sheet, selected, inHand }: StickerCardProps) {
  const updateSheetInHand = useMainStore((state) => state.updateSheetInHand);

  return (
    <Flex
      className={classes.stickerCard}
      gap="sm"
      direction="column"
      justify="center"
      align="center"
      bg={selected ? 'green.3' : 'blue.3'}
      rowGap="xs"
    >
      {sheet.names.map((sticker) => (
        <Sticker
          key={sticker}
          stickerClicked={() => {
            if (inHand) {
              const updatedSheet = { ...sheet };
              updatedSheet.names = updatedSheet.names.filter((n) => n !== sticker);
              updateSheetInHand(updatedSheet);
            }
          }}
          name={sticker}
          disabled={!inHand}
        />
      ))}
    </Flex>
  );
}
