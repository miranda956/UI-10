import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';
// Core
import TypographyPage from '@/pages/Typography/Typography';
import FAQ from '@/pages/supportCenter/FAQ'
// Tables
import TablesBasicPage from '@/pages/Tables/Basic';
import CreateStaff from '@/pages/userManagement/Createstaff'
// Maps
import GoogleMapPage from '@/pages/Maps/Google';
import Permission from '@/pages/userManagement/Permission'
import Staff from '@/pages/userManagement/staff'
// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';
import AddPermission from '@/pages/userManagement/addPermission'
// Charts
import ChartsPage from '@/pages/Charts/Charts';
import NewShop  from '@/pages/Tables/NewShop';
// Ui
import Tickets from '@/pages/supportCenter/tickets'
import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';
import AddProduct from '@/pages/Typography/newProduct'
import Roles from '@/pages/userManagement/Roles'
import Invoice from '@/pages/InvoiceManagement/Invoices'
import CreateInvoice from  '@/pages/InvoiceManagement/CreateInvoice';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/error',
      name: 'Error',
      component: ErrorPage,
    },
    {
      path: '/app',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: 'dashboard',
          name: 'AnalyticsPage',
          component: AnalyticsPage,
        },
        {
          path: 'typography',
          name: 'TypographyPage',
          component: TypographyPage,
        },
        {
          path: 'components/icons',
          name: 'IconsPage',
          component: IconsPage,
        },
        {
          path: 'notifications',
          name: 'NotificationsPage',
          component: NotificationsPage,
        },
        {
          path: 'components/charts',
          name: 'ChartsPage',
          component: ChartsPage,
        },
        {
          path: 'components/invoices',
          name: 'Invoice',
          component: Invoice,
        },
         {
          path: 'components/craeteinvoice',
          name: 'newInvoice',
          component: CreateInvoice,
        },
        {
          path: 'components/faq',
          name: 'FAQ',
          component: FAQ,
        },
        {
          path: 'tables',
          name: 'TablesBasicPage',
          component: TablesBasicPage,
        },
        {
          path: '/error',
          name: 'Error',
          component: ErrorPage,
        },
        {
          path: 'components/maps',
          name: 'GoogleMapPage',
          component: GoogleMapPage,
        },
        {
          path: 'components/staff',
          name: 'Staff',
          component: Staff,
        },
        {
          path: 'components/tickets',
          name: 'Tickets',
          component: Tickets,
        },
        {
          path: 'components/newproduct',
          name: 'addproduct',
          component: AddProduct,
        },
        {
          path: 'components/newshop',
          name: 'addshop',
          component: NewShop,
        },
        {
          path: 'components/permission',
          name: 'Permission',
          component:Permission,
        },

        {
          path: 'components/addpermission',
          name: 'addPermission',
          component: AddPermission,
        },
        {
          path: 'components/createstaff',
          name: 'createstaff',
          component: CreateStaff,
        },
        {
          path: 'components/roles',
          name: 'Roles',
          component: Roles,
        },
        
      ],
    },
  ],
});
