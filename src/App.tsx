import { AppShell, Burger, Flex, MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@mantine/core/styles.css';
import classes from './App.module.css';
import { theme } from './theme';
import { DarkModeToggle } from './components/DarkModeToggle/DarkModeToggle';
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './pages/Home.page';
import { StickerPage } from './pages/Stickers.page';
import { RulesPage } from './pages/Rules.page';

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: '300',
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
          }}
          padding="md"
        >
          <AppShell.Header className={classes.header}>
            <Flex direction="row" gap="sm">
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <DarkModeToggle size="md" />
            </Flex>
          </AppShell.Header>

          <AppShell.Navbar>
            <Navbar />
          </AppShell.Navbar>

          <AppShell.Main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/stickers" element={<StickerPage />} />
              <Route path="/rules" element={<RulesPage />} />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
}
