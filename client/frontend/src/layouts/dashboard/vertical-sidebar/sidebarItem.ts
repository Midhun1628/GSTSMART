export interface menu {
  header?: string;
  title?: string;
  to?: string;
  icon?:string
}

const sidebarItem: menu[] = [
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    to: '/dashboard'
  },
  {
    title: 'User Management',
    icon: 'mdi-account-group',
    to: '/user-management'
  },
  {
    title: 'Product Management',
    to: '/product-management'
  }
];

export default sidebarItem;