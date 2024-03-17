import { ActionIcon, Button, Group, useMantineColorScheme } from '@mantine/core';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

export function DarkModeToggle(props: { size: string }) {
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  return (
    <ActionIcon {...{ props }}>
      {colorScheme === 'light' ? (
        <MdDarkMode onClick={() => setColorScheme('dark')} />
      ) : (
        <MdOutlineDarkMode onClick={() => setColorScheme('light')} />
      )}
    </ActionIcon>
  );
}
