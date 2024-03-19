import { Flex } from '@mantine/core';
import { Sticker } from './Sticker';
import classes from './StickerCard.module.css';

const mockStickerValues = ['Unhinged', 'Beast', 'Hunt'];

export function StickerCard() {
  return (
    <Flex className={classes.stickerCard} gap="sm" direction="column" justify="center" align="center" bg="blue.6" rowGap="xs">
      {mockStickerValues.map((sticker) => (
        <Sticker name={sticker} />
      ))}
    </Flex>
  );
}
