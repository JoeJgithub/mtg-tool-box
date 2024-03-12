import '@mantine/core/styles.css';
import { AppShell, Burger, Flex, MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { useDisclosure } from '@mantine/hooks';
import { DarkModeToggle } from './components/DarkModeToggle/DarkModeToggle';

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        <AppShell.Header
          style={{padding: 15}}
        >
          <Flex
            direction="row"
            gap="sm"
          >
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <DarkModeToggle size="md" />
          </Flex>
        </AppShell.Header>

        <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

        <AppShell.Main><Router /></AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
