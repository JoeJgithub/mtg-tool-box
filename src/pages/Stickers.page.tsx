import { Button, Flex, Collapse, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Stickers.page.module.css';
import { StickerDeckBuilder } from '@/components/Stickers/StickerDeckBuilder';
import { StickerHand } from '@/components/Stickers/StickerHand';
import { useMainStore } from '@/store';

export function StickerPage() {
  const [opened, { toggle }] = useDisclosure(false);
  const shuffleStickerDeck = useMainStore((state) => state.shuffleStickerDeck);
  const drawFromStickerDeck = useMainStore((state) => state.drawFromStickerDeck);

  return (
    <>
      <Flex
        className={classes.buttonGroup}
        direction="row"
        gap="xl"
        justify="center"
        align="center"
      >
        <Button size="md" className={classes.stickerDeckButton} onClick={toggle}>
          Edit Deck
        </Button>
        <Button
          size="md"
          className={classes.stickerDeckButton}
          onClick={() => {
            if (opened) toggle();
            shuffleStickerDeck();
            drawFromStickerDeck();
          }}
        >
          Shuffle & Draw
        </Button>
      </Flex>
      <Collapse in={opened} className={classes.deckBuilderCollapsible} p="sm">
        <Title order={4} p="sm" className={classes.deckBuilderTitle}>
          Select up to 10 cards for your deck
        </Title>
        <StickerDeckBuilder />
      </Collapse>
      <StickerHand />
    </>
  );
}
