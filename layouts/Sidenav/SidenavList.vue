<template>
  <div id="sidenav-collapse-main" class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item d-flex align-items-center">
        <SidenavItem to="/dashboards" text="Dashboards" icon="ri-dashboard-line"/>
      </li>
      <li class="nav-item d-flex align-items-center">
        <SidenavItem to="/dashboards" text="Distributor" icon="ri-group-2-line"/>
      </li>
      <li class="nav-item">
        <SidenavCollapse collapse-ref="dashboardsExamples" nav-text="Support System"
          :class="getRoute === 'dashboards' ? 'active' : ''">
          <template #list>
            <ul class="nav ms-4">
              <SidenavItem to="/dashboards" text="Default" icon="ri-customer-service-line"/>
            </ul>
          </template>
        </SidenavCollapse>
      </li>
      <li class="nav-item d-flex align-items-center">
        <SidenavItem to="/dashboards" text="Customers" icon="ri-group-line"/>
      </li>
      <li class="nav-item d-flex align-items-center">
        <SidenavItem to="/dashboards" text="Delivery Agents" icon="ri-truck-line"/>
      </li>
      <li class="nav-item d-flex align-items-center">
        <SidenavItem to="/product" text="Products" icon="ri-shopping-bag-3-line"/>
      </li>
      <li class="nav-item d-flex align-items-center">
        <SidenavItem to="/onboarding" text="Manage Admins" icon="ri-shield-user-line"/>
      </li>
      <li class="nav-item d-flex align-items-center">
        <SidenavItem to="/zones" text="Zones" icon="ri-map-pin-5-line" />
      </li>
      <li class="nav-item d-flex align-items-center">
        <SidenavItem to="/dashboards" text="Transactions" icon="ri-secure-payment-line"/>
      </li>
      <li class="nav-item d-flex align-items-center">
        <SidenavItem to="/dashboards" text="Reports" icon="ri-file-chart-line"/>
      </li>


      <!-- <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="isRTL ? 'me-4' : 'ms-2'"
        >
          PAGES
        </h6>
      </li>
   
      <li class="nav-item d-flex align-items-center">
        <i class="ni ni-align-left-2 text-info text-sm opacity-10"></i>
        <SidenavItem to="/applications/data-tables" text="Data Tables" />
      </li> -->


      <li class="mt-3 nav-item">
        <hr class="mt-0 horizontal dark" />
      </li>

      <li class="nav-item d-flex align-items-center">
        <SidenavItem to="/dashboards" text="Settings" icon="ri-settings-5-line"/>
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
<style scoped>
#sidenav-collapse-main {
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}
</style>