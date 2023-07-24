<template>
  <aside id="sidenav-main" class="sidenav navbar navbar-vertical navbar-expand-xs"
    :class="`fixed-start ${navStore.sidenavType}`">
    <div class="sidenav-header">
      <!-- <i
        id="iconSidenav"
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
      ></i> -->
      <NuxtLink class="navbar-brand" to="/">
        <img src="../../assets/nova_logo2.png" class="navbar-brand-img " alt="main_logo" />

        <span class="ms-2 font-weight-bold h6" :class="navStore.sidenavType === 'bg-default bg-transparent' && 'text-white'
          "></span>
      </NuxtLink>
      <NuxtLink class="nav_admin" to="/">
        Admin
      </NuxtLink>
    </div>

    <SidenavList />

    <div class="mt-3 nav-item">
      <hr class="mt-0 horizontal dark" />
    </div>
    <div class="bootom_nav">
      <div class="bn_left">
        <img src="../../assets/img/team-2.jpg" alt="">
        <div class="bn_left_con">
          <h5>John Doe</h5>
          <p>johndoe@gmail.com</p>
        </div>
      </div>
      <NuxtLink class="setting_btn" to="/">
        <i class="ri-settings-4-fill"></i>
      </NuxtLink>
    </div>
  </aside>
</template>

<script setup>
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/nova_logo2.png";
import { useNavStore } from "@/stores/NavStore";
const navStore = useNavStore();
</script>
