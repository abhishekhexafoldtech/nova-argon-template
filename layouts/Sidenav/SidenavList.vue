<template>
  <div id="sidenav-collapse-main" class="collapse navbar-collapse">
    <h4 class="menu_title">Basics</h4>
    <ul class="navbar-nav">
      <li class="nav-item">
        <SidenavItem to="/dashboards" text="Dashboards" :icon-img="iconImgDashboard" icon="ri-dashboard-line"/>
      </li>
      <li class="nav-item">
        <SidenavItem to="/dashboards" text="Distributor" :icon-img="iconImgDistributor" icon="ri-group-2-line"/>
      </li>
      <li class="nav-item">
        <SidenavCollapse collapse-ref="dashboardsExamples" nav-text="Support System"
          :class="getRoute === 'dashboards' ? 'active' : ''" :icon-img="iconImgCollapseSupportSystem" icon="ri-group-2-line">          
          <template #list>
            <ul class="sub_menu">
              <SidenavItem to="/dashboards" text="Default" :icon-img="iconImgDefault" icon="ri-group-2-line"/>
            </ul>
          </template>
        </SidenavCollapse>
      </li>
      <li class="nav-item">
        <SidenavItem to="/dashboards" text="Customers" :icon-img="iconImgCustomer" icon="ri-group-line"/>
      </li>
      <li class="nav-item">
        <SidenavItem to="/dashboards" text="Delivery Agents" :icon-img="iconImgDeliveryAgent" icon="ri-truck-line"/>
      </li>
      <li class="nav-item">
        <SidenavItem to="/product" text="Products" :icon-img="iconImgProduct" icon="ri-shopping-bag-3-line"/>
      </li>
      <li class="nav-item">
        <SidenavItem to="/onboarding" text="Manage Admins" :icon-img="iconImgAdmin" icon="ri-shield-user-line"/>
      </li>
      <li class="nav-item">
        <SidenavItem to="/zones" text="Zones" :icon-img="iconImgZone" icon="ri-map-pin-5-line" />
      </li>
    </ul>

    <h4 class="menu_title">Operations</h4>
    <ul class="navbar-nav">
      <li class="nav-item">
        <SidenavItem to="/dashboards" text="Transactions" :icon-img="iconImgTransaction" icon="ri-secure-payment-line"/>
      </li>
      <li class="nav-item">
        <SidenavItem to="/dashboards" text="Reports" :icon-img="iconImgReport" icon="ri-file-chart-line"/>
      </li>
      <li class="nav-item">
        <SidenavItem to="/dashboards" text="Settings" :icon-img="iconImgSettings" icon="ri-settings-5-line"/>
      </li>
    </ul>
  </div>
</template>
<script setup>
import SidenavCollapse from "./SidenavCollapse.vue";
import SidenavCollapseItem from "./SidenavCollapseItem.vue";
import SidenavItem from "./SidenavItem.vue";
import { useNavStore } from "@/stores/NavStore";
const navStore = useNavStore();

import iconImgDashboard from '@/assets/img/team-2.jpg'
import iconImgCollapseSupportSystem from '@/assets/img/team-2.jpg'
import iconImgDefault from '@/assets/img/team-2.jpg'
import iconImgDistributor from '@/assets/img/team-2.jpg'
import iconImgCustomer from '@/assets/img/team-2.jpg'
import iconImgDeliveryAgent from '@/assets/img/team-2.jpg'
import iconImgProduct from '@/assets/img/team-2.jpg'
import iconImgAdmin from '@/assets/img/team-2.jpg'
import iconImgZone from '@/assets/img/team-2.jpg'
import iconImgTransaction from '@/assets/img/team-2.jpg'
import iconImgReport from '@/assets/img/team-2.jpg'
import iconImgSettings from '@/assets/img/team-2.jpg'

const sidenavType = computed(() => {
  return navStore.sidenavType === "bg-white" ? "text-dark" : "text-white";
});
const getRoute = computed(() => {
  const route = useRoute();
  return route.path.split("/")[1];
});
defineProps({
  isRTL: {
    type: Boolean,
    default: false,
  },
});
</script>