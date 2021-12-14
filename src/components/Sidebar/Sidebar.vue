<template>
  <div class="sidebar-wrapper">
    <nav
        :class="{sidebar: true, sidebarStatic, sidebarOpened}"
        @mouseenter="sidebarMouseEnter"
        @mouseleave="sidebarMouseLeave"
    >
      <header class="logo">
        <router-link to="/app/dashboard"><span class="primary-word">MakitiPlus</span> <span class="secondary-word"> SAS</span></router-link>
      </header>


      <h5 class="navTitle first">
       
      </h5>
      <ul class="nav">
        <NavLink
            :activeItem="activeItem"
            header="Dashboard"
            link="/app/dashboard"
            iconName="flaticon-home"
            index="dashboard"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Products"
            link="/app/typography"
            iconName="flaticon-gift"
            index="typography"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Shops"
            link="/app/tables"
            iconName="flaticon-house"
            index="tables"
            isHeader
        />
        <NavLink
            :activeItem="activeItem"
            header="Customers"
            link="/app/notifications"
            iconName="flaticon-user"
            index="notifications"
            isHeader
        />
      
      
          <NavLink
            :activeItem="activeItem"
            header="Aggrigations"
            link="/app/components"
            iconName="flaticon-network"
            index="components"
            :childrenLinks="[
              { header: 'Analytics', link: '/app/components/charts' },
            ]"
        />
        <NavLink
            :activeItem="activeItem"
            header="User Management"
            link="/app/components"
            iconName="flaticon-users"
            index="components"
            :childrenLinks="[
              { header: 'Staff', link: '/app/components/staff ' },
              { header: 'Roles', link: '/app/components/roles' },
              { header: 'Permissions', link:'/app/components/permission' },
            ]"
        />
           <NavLink
            :activeItem="activeItem"
            header="Support Center"
            link="/app/components"
            iconName="flaticon-help"
            index="components"
            :childrenLinks="[
              { header: 'Tickets', link: '/app/components/tickets' },
              { header: 'FAQ', link: '/app/components/faq' },
            ]"
        />
           <NavLink
            :activeItem="activeItem"
            header="InvoiceManagement"
            link="/app/components"
            iconName="flaticon-briefcase"
            index="components"
            :childrenLinks="[
              { header: 'Invoices', link: '/app/components/invoices' },
              { header: ' GenerateInvoices', link: '/app/components/craeteinvoice' }

             
            ]"
        />
      </ul>
      
    
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import isScreen from '@/core/screenHelper';
import NavLink from './NavLink/NavLink';

export default {
  name: 'Sidebar',
  components: { NavLink },
  data() {
    return {
      alerts: [
        {
          id: 0,
          title: 'Sales Report',
          value: 15,
          footer: 'Calculating x-axis bias... 65%',
          color: 'danger',
        },
        {
          id: 1,
          title: 'Personal Responsibility',
          value: 20,
          footer: 'Provide required notes',
          color: 'primary',
        },
      ],
    };
  },
  methods: {
    ...mapActions('layout', ['changeSidebarActive', 'switchSidebar']),
    setActiveByRoute() {
      const paths = this.$route.fullPath.split('/');
      paths.pop();
      this.changeSidebarActive(paths.join('/'));
    },
    sidebarMouseEnter() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(false);
        this.setActiveByRoute();
      }
    },
    sidebarMouseLeave() {
      if (!this.sidebarStatic && (isScreen('lg') || isScreen('xl'))) {
        this.switchSidebar(true);
        this.changeSidebarActive(null);
      }
    },
  },
  created() {
    this.setActiveByRoute();
  },
  computed: {
    ...mapState('layout', {
      sidebarStatic: state => state.sidebarStatic,
      sidebarOpened: state => !state.sidebarClose,
      activeItem: state => state.sidebarActiveElement,
    }),
  },
};
</script>

<!-- Sidebar styles should be scoped -->
<style src="./Sidebar.scss" lang="scss" scoped/>
