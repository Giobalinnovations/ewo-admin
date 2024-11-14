import { ISidebarMenus } from './../types/menu-types';
import {
  Dashboard,
  Categories,
  Coupons,
  Orders,
  Pages,
  Products,
  Profile,
  Reviews,
  Setting,
  Leaf,
  StuffUser,
} from '@/svg';

const sidebar_menu: Array<ISidebarMenus> = [
  {
    id: 1,
    icon: Dashboard,
    link: '/dashboard',
    title: 'Dashboard',
  },
  {
    id: 2,
    icon: Products,
    link: '/product-list',
    title: 'Products',
    subMenus: [
      { title: 'Product List', link: '/product-list' },
      { title: 'Product Grid', link: '/product-grid' },
      { title: 'Add Product', link: '/add-product' },
    ],
  },
  {
    id: 3,
    icon: Categories,
    link: '/category',
    title: 'Category',
  },
  {
    id: 4,
    icon: Categories,
    link: '/blog-category',
    title: 'Blog Category',
  },
  {
    id: 5,
    icon: Orders,
    link: '/orders',
    title: 'Orders',
  },
  {
    id: 6,
    icon: Leaf,
    link: '/brands',
    title: 'Brand',
  },
  {
    id: 7,
    icon: Reviews,
    link: '/reviews',
    title: 'Reviews',
  },
  {
    id: 8,
    icon: Coupons,
    link: '/coupon',
    title: 'Coupons',
  },
  {
    id: 9,
    icon: Profile,
    link: '/profile',
    title: 'Profile',
  },
  {
    id: 10,
    icon: Setting,
    link: '#',
    title: 'Online store',
  },
  {
    id: 11,
    icon: StuffUser,
    link: '/our-staff',
    title: 'Our Staff',
  },
  {
    id: 12,
    icon: Pages,
    link: '/dashboard',
    title: 'Pages',
    subMenus: [
      { title: 'Register', link: '/register' },
      { title: 'Login', link: '/login' },
      { title: 'Forgot Password', link: '/forgot-password' },
    ],
  },
];

export default sidebar_menu;
