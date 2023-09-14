<template>
  <div>
    <el-row :gutter="30">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <div class="cd_box">
          <h4 class="cd_heading">Personal Details</h4>
          <div class="cd_list">
            <div class="cd_item">
              <img :src="Calender" alt="icon" />
              <h4>Joining Date<span>2020/12/15</span></h4>
            </div>
            <div class="cd_item">
              <img :src="Location" alt="icon" />
              <h4>Address:<span>Agbogba-ashongman road</span></h4>
       
            </div>
            <div class="cd_item">
              <img :src="Phone" alt="icon" />
              <h4>Phone number<span>0277400000</span></h4>
            </div>
            <div class="cd_item">
              <img :src="District" alt="icon" />
              <h4>District<span>Ghana</span></h4>
            </div>
            <div class="cd_item">
              <img :src="Email" alt="icon" />
              <h4>Email<span>yawboafo@gmail.com</span></h4>
            </div>
            <div class="cd_item">
              <img :src="Region" alt="icon" />
              <h4>Region<span>Accra</span></h4>
           
            </div>
            <div class="cd_item">
              <img :src="Zone" alt="icon" />
              <h4>Zone<span>Northern</span></h4>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <div class="cd_box">
          <h4 class="cd_heading">Uploaded documents</h4>
          <div class="up_doc">
            <div class="doc_item">
              <img src="@/assets/img/card-visa.jpg" alt="image" />
              <h4>
                <span>Voter ID</span>
                Uploaded on 11/08/2023
              </h4>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import {
  Calendar,
  PhoneFilled,
  MapLocation,
  ChatDotSquare,
  Place,
} from "@element-plus/icons-vue";
import District from "@/assets/svg/district.svg";
import Email from "@/assets/svg/email.svg";
import Location from "@/assets/svg/location.svg";
import Region from "@/assets/svg/region.svg";
import Zone from "@/assets/svg/zone.svg";
import Calender from "@/assets/svg/calender.svg";
import Phone from "@/assets/svg/phone.svg";
</script>
<style scoped></style>
