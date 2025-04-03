export interface menu {
  header?: string;
  title?: string;
  to?: string;
  chip?: string;
  chipColor?: string;
  chipVariant?: string;
}

const sidebarItem: menu[] = [
  { header: 'Main Navigation' },
  {
    title: 'Dashboard',
    to: '/dashboard',
  },
  {
    title: 'User Management',
    to: '/users',
  },
  {
    title: 'Product Management',
    to: '/products',
  },
];

export default sidebarItem;

