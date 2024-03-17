import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

interface DarkModeToggleProps {
  size: string;
}

export function DarkModeToggle(props: DarkModeToggleProps) {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const { size } = props;

  return (
    <ActionIcon {...{ size }}>
      {colorScheme === 'light' ? (
        <MdDarkMode onClick={() => setColorScheme('dark')} />
      ) : (
        <MdOutlineDarkMode onClick={() => setColorScheme('light')} />
      )}
    </ActionIcon>
  );
}
