<template>
  <div id="sidenav-collapse-main" class="collapse navbar-collapse">
    <ul class="navbar-nav">
      <li class="nav-item d-flex align-items-center">
        <i class="ri-dashboard-line"></i>
        <SidenavItem to="/dashboards" text="Dashboards" />
      </li>
      <li class="nav-item d-flex align-items-center">
        <i class="ri-group-2-line"></i>
        <SidenavItem to="/dashboards" text="Distributor" />
      </li>
      <li class="nav-item">
        <SidenavCollapse collapse-ref="dashboardsExamples" nav-text="Support System"
          :class="getRoute === 'dashboards' ? 'active' : ''">
          <i class="ri-customer-service-line"></i>
          <template #list>
            <ul class="nav ms-4">
              <SidenavItem to="/dashboards" text="Default" />
            </ul>
          </template>
        </SidenavCollapse>
      </li>
      <li class="nav-item d-flex align-items-center">
        <i class="ri-group-line"></i>
        <SidenavItem to="/dashboards" text="Customers" />
      </li>
      <li class="nav-item d-flex align-items-center">
        <i class="ri-truck-line"></i>
        <SidenavItem to="/dashboards" text="Delivery Agents" />
      </li>
      <li class="nav-item d-flex align-items-center">
        <i class="ri-shopping-bag-3-line"></i>
        <SidenavItem to="/product" text="Products" />
      </li>
      <li class="nav-item d-flex align-items-center">
        <i class="ri-shield-user-line"></i>
        <SidenavItem to="/onboarding" text="Manage Admins" />
      </li>
      <li class="nav-item d-flex align-items-center">
        <i class="ri-map-pin-5-line"></i>
        <SidenavItem to="/zones" text="Zones" />
      </li>
      <li class="nav-item d-flex align-items-center">
        <i class="ri-secure-payment-line"></i>
        <SidenavItem to="/dashboards" text="Transactions" />
      </li>
      <li class="nav-item d-flex align-items-center">
        <i class="ri-file-chart-line"></i>
        <SidenavItem to="/dashboards" text="Reports" />
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
        <i class="ri-settings-5-line"></i>
        <SidenavItem to="/dashboards" text="Settings" />
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