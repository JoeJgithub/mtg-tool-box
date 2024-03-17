import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

interface DarkModeToggleProps {
  size: string;
}

export function DarkModeToggle(props: DarkModeToggleProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { size } = props;

  return (
    <ActionIcon {...{ size }} onClick={toggleColorScheme}>
      {colorScheme === 'light' ? <MdDarkMode /> : <MdOutlineDarkMode />}
    </ActionIcon>
  );
}
