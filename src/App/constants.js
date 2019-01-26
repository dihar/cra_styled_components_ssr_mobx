import routeList from '../routes/list';

const isAuthVisible = auth => Boolean(auth);


export const MenuItems = [
  {
    label: 'Home',
    router: routeList.home,
  },
  {
    label: 'Admin',
    router: routeList.admin,
    isVisible: isAuthVisible
  },
  {
    label: 'Login',
    router: routeList.login,
    isVisible: auth => !auth
  },
  {
    label: 'Logout',
    router: routeList.logout,
    isVisible: isAuthVisible
  }
];
