import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export default function HamburgerNav() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        variant="outline"
        onClick={() => onToggle()}
      />
      <MenuList>
        <MenuItem>
          <Link as={NextLink} href="/service">
            Service
          </Link>
        </MenuItem>
        <MenuItem>
          <Link as={NextLink} href="/templates">
            Templates
          </Link>
        </MenuItem>
        <MenuItem>
          <Link as={NextLink} href="/contacts">
            Contacts
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
