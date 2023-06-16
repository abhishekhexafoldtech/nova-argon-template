<template>
  <div
    id="sidenav-collapse-main"
    class="collapse navbar-collapse w-auto h-auto h-100"
  >
    <ul class="navbar-nav">
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <i class="ni ni-shop text-primary text-sm opacity-10"></i>
        <SidenavItem to="/dashboards" mini-icon="D" text="Dashboards" />
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <i class="ni ni-shop text-primary text-sm opacity-10"></i>
        <SidenavItem to="/dashboards" mini-icon="D" text="Distributor" />
      </li>
      
      <li class="nav-item">
        <SidenavCollapse
          collapse-ref="dashboardsExamples"
          nav-text="Support System"
          :class="getRoute === 'dashboards' ? 'active' : ''"
        >
          <template #icon>
            <i class="ni ni-shop text-primary text-sm opacity-10"></i>
          </template>
          <template #list>
            <ul class="nav ms-4">
              <SidenavItem
                to="/dashboards"
                mini-icon="D"
                text="Default"
              />
            </ul>
          </template>
        </SidenavCollapse>
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <i class="ni ni-shop text-primary text-sm opacity-10"></i>
        <SidenavItem to="/dashboards" mini-icon="C" text="Customers" />
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <i class="ni ni-shop text-primary text-sm opacity-10"></i>
        <SidenavItem to="/dashboards" mini-icon="D" text="Delivery Agents" />
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <i class="ni ni-shop text-primary text-sm opacity-10"></i>
        <SidenavItem to="/dashboards" mini-icon="P" text="Products" />
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <i class="ni ni-shop text-primary text-sm opacity-10"></i>
        <SidenavItem to="/dashboards" mini-icon="M" text="Manage Admins" />
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <i class="ni ni-shop text-primary text-sm opacity-10"></i>
        <SidenavItem to="/dashboards" mini-icon="Z" text="Zones" />
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <i class="ni ni-shop text-primary text-sm opacity-10"></i>
        <SidenavItem to="/dashboards" mini-icon="T" text="Transactions" />
      </li>
      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <i class="ni ni-shop text-primary text-sm opacity-10"></i>
        <SidenavItem to="/dashboards" mini-icon="R" text="Reports" />
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
        <SidenavItem to="/applications/data-tables" mini-icon="D" text="Data Tables" />
      </li> -->
     
      
      <li class="mt-3 nav-item">
        <hr class="mt-0 horizontal dark" />
      </li>

      <li class="nav-item d-flex align-items-center mx-4 px-2">
        <i class="ni ni-shop text-primary text-sm opacity-10"></i>
        <SidenavItem to="/dashboards" mini-icon="S" text="Settings" />
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
