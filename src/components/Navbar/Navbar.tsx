import { useState } from 'react';
import { Group, Title, Image } from '@mantine/core';
import { GiGoblinHead, GiRuleBook } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import MtgHelperLogo from '@/favicon-32x32.png';
import classes from './Navbar.module.css';

interface NavbarItem {
  route: string;
  label: string;
  icon: IconType;
  iconClass: string;
}

const data: NavbarItem[] = [
  { route: '/', label: 'Home', icon: FaHome, iconClass: classes.homeNavIcon },
  { route: '/stickers', label: 'Stickers & Attractions', icon: GiGoblinHead, iconClass: classes.stickersNavIcon },
  { route: '/rules', label: 'Rules Finder', icon: GiRuleBook, iconClass: classes.rulesNavIcon },
];

export function Navbar() {
  const [active, setActive] = useState('Home');
  const navigate = useNavigate();
  const handleClick = (item: NavbarItem) => {
    setActive(item.label);
    navigate(item.route);
  };

  const links = data.map((item) => (
    <a
      role="menuitem"
      tabIndex={0}
      className={classes.link}
      data-active={item.label === active || undefined}
      key={item.label}
      onClick={() => handleClick(item)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleClick(item);
      }}
    >
      <item.icon
        className={`${classes.linkIcon} ${item.iconClass}`}
        stroke="1.5"
      />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header}>
          <Image src={MtgHelperLogo} />
          <Title order={2}>MTG Helper</Title>
        </Group>
        <nav role="navigation">{links}</nav>
      </div>
    </nav>
  );
}
