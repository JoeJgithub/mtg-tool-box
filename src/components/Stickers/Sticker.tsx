import { Box } from '@mantine/core';
import classes from './Sticker.module.css';

interface StickerProps {
  name: string;
}

export function Sticker({ name }: StickerProps) {
  return <Box className={classes.sticker}>{name}</Box>;
}
