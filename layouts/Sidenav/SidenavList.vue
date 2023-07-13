<template>
  <div
    id="sidenav-collapse-main"
    class="collapse navbar-collapse w-auto h-auto h-100"
  >
    <ul class="navbar-nav">
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <img src="@/assets/svg/dashboard_home_icon.svg" alt="">
        <SidenavItem to="/dashboards"    text="Dashboards" />
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <img src="@/assets/svg/distributor_dashboard_icon.svg" alt="">
        <SidenavItem to="/dashboards"    text="Distributor" />
      </li>
      <li class="nav-item">
        <SidenavCollapse
          collapse-ref="dashboardsExamples"
          nav-text="Support System"
          class="gap-3"
          :class="getRoute === 'dashboards' ? 'active' : ''"
        >
          <template #icon>
            <img src="@/assets/svg/support_system_dashboard_icon.svg" class="" alt="">
          </template>
          <template #list>
            <ul class="nav ms-4">
              <SidenavItem
                to="/dashboards"
                text="Default"
              />
            </ul>
          </template>
        </SidenavCollapse>
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <img src="@/assets/svg/customer_dashboard_icon.svg" alt="">
        <SidenavItem to="/dashboards"    text="Customers" />
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <img src="@/assets/svg/delivery_agent_dashboard_icon.svg" alt="">
        <SidenavItem to="/dashboards"    text="Delivery Agents" />
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <img src="@/assets/svg/products_dashboard_icon.svg" alt="">
        <SidenavItem to="/product"    text="Products" />
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <img src="@/assets/svg/manage_admin_dashboard_icon.svg" alt="">
        <SidenavItem to="/onboarding"    text="Manage Admins" />
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <img src="@/assets/svg/zones_dashboard_icon.svg" alt="">
        <SidenavItem to="/zones"    text="Zones" />
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
       <img src="@/assets/svg/transactions_dashboard_icon.png" alt="">
        <SidenavItem to="/dashboards"    text="Transactions" />
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <img src="@/assets/svg/report_admin_dashboard_icon.svg" alt="">
        <SidenavItem to="/dashboards"    text="Reports" />
      </li>


      <!-- <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="isRTL ? 'me-4' : 'ms-2'"
        >
          PAGES
        </h6>
      </li>
   
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <i class="ni ni-align-left-2 text-info text-sm opacity-10"></i>
        <SidenavItem to="/applications/data-tables"    text="Data Tables" />
      </li> -->
     
      
      <li class="mt-3 nav-item">
        <hr class="mt-0 horizontal dark" />
      </li>

      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <img src="@/assets/svg/settings_dashboard_icon.svg" alt="">
        <SidenavItem to="/dashboards"    text="Settings" />
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
#sidenav-collapse-main{
  overflow-y: hidden !important;
  overflow-x: hidden !important;
}
</style>