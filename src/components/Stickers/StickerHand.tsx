import { Flex } from '@mantine/core';
import { StickerCard } from './StickerCard';
import { useMainStore } from '@/store';

export function StickerHand() {
  const stickerHand = useMainStore((state) => state.stickerHand);

  return (
    <Flex direction="row" wrap="wrap" gap="lg" justify="center" align="center">
      {stickerHand.map((sheet) => (
        <StickerCard key={sheet.id} inHand {...{ sheet }} />
      ))}
    </Flex>
  );
}
