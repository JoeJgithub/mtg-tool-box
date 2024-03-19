import { useState } from 'react';
import { Group, Text, Code, rem } from '@mantine/core';
import { useMove } from '@mantine/hooks';
import { StickerCard } from '@/components/Stickers/StickerCard';

export function StickerPage() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: rem(800),
            height: rem(400),
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: `calc(${value.x * 100}% - ${rem(8)})`,
              top: `calc(${value.y * 100}% - ${rem(8)})`,
              width: rem(16),
              height: rem(16),
              backgroundColor: active
                ? 'var(--mantine-color-teal-7)'
                : 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>
      <Text ta="center" mt="sm">
        Values <Code>{`{ x: ${Math.round(value.x * 100)}, y: ${Math.round(value.y * 100)} }`}</Code>
      </Text>
      <StickerCard />
    </>
  );
}
