import { Box, Button } from '@mantine/core';
import classes from './Sticker.module.css';

interface StickerProps {
  name: string;
  stickerClicked: () => void;
  disabled?: boolean;
}

export function Sticker({ name, stickerClicked, disabled }: StickerProps) {
  return disabled ? (
    <Box onClick={stickerClicked} className={classes.sticker}>
      {name}
    </Box>
  ) : (
    <Button onClick={stickerClicked} className={classes.sticker}>
      {name}
    </Button>
  );
}
