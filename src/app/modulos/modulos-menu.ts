import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'MENU',
    group: true,
  },
  {
    title: 'Proveedores',
    icon: 'people-outline',
    children: [
      {
        title: 'Gestion de proveedores',
        link: '/modulos/proveedores/gestion',
      },
      {
        title: 'Lista de Proveedores',
        link: '/modulos/proveedores/lista',
      },      
    ],
  },
  {
    title: 'Pagos',
    icon: 'archive-outline',
    children: [
      {
        title: 'Registro de pagos',
        link: '/pages/layout/stepper',
      },
      {
        title: 'Reporte de pagos',
        link: '/pages/layout/list',
      },      
    ],
  },

  {
    title: 'Admin',
    icon: 'person-outline',   
    children: [
      {
        title: 'Nuevo usuario',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Lista de usuarios',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Permisos',
        link: '/pages/ui-features/typography',
      },     
    ],
  },
];
