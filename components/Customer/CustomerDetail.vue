<template>
        <el-row>
            <el-col class="border rounded-1 shadow-lg p-4" :xs="24" :sm="24" :md="12" :lg="12">
            <h4>Personal details</h4>
            <el-row :gutter="20" >
                <el-col class="p-3" :xs="24" :sm="24" :md="12" :lg="12">
                <span class="fs-6 text-bold"><img :src="Calender" alt="icon"> <span class="ms-1">Joining date</span></span>
                <p class="ms-4 text-dark fw-bolder ps-1">2020/12/15</p>
                <br/>
                <span class="fs-6 text-bold"><img :src="Phone" alt="icon"> <span class="ms-1">Phone number</span></span>
                <p class="ms-4 text-dark fw-bolder ps-1">2020/12/15</p>
                <br/>
                <span class="fs-6 text-bold"><img :src="Email" alt="icon"> <span class="ms-1">Email</span></span>
                <p class="ms-4 text-dark fw-bolder ps-1">2020/12/15</p>
                <br/>
                <span class="fs-6 text-bold"><img :src="Zone" alt="icon"> <span class="ms-1">Zone</span></span>
                <p class="ms-4 text-dark fw-bolder ps-1">2020/12/15</p>
                </el-col>


                <el-col class="p-3" :xs="24" :sm="24" :md="12" :lg="12">
                <span class="fs-6 text-bold"> <img :src="Location" alt="icon"> <span class="ms-1">Address:</span></span>
                <p class="ms-4 text-dark fw-bolder ps-1">2020/12/15</p>
                <br/>
                <span class="fs-6 text-bold"><img :src="District" alt="icon"> <span class="ms-1">District</span></span>
                <p class="ms-4 text-dark fw-bolder ps-1">2020/12/15</p>
                <br/>
                <span class="fs-6 text-bold"><img :src="Region" alt="icon"> <span class="ms-1">Region</span></span>
                <p class="ms-4 text-dark fw-bolder ps-1">2020/12/15</p>
                </el-col>
            </el-row>
            </el-col>

            <el-col :offset="1" class="border rounded-1 shadow-lg p-4" :xs="24" :sm="24" :md="11" :lg="11">
           <div>
               <img class="rounded img-fluid" width="300"  src="@/assets/img/card-visa.jpg" alt="image">
               <p class=" text-dark fs-5 fw-bolder mt-2">Voter ID</p>
               <p class="fs-5 text-boldtext-dark">Uploaded on 11/08/2023</p>
               
           </div>
            </el-col>
        </el-row>
</template>
<script setup>

import { Calendar,PhoneFilled,MapLocation,ChatDotSquare,Place, } from '@element-plus/icons-vue';
import District from '@/assets/svg/district.svg'
import Email from '@/assets/svg/email.svg'
import Location from '@/assets/svg/location.svg'
import Region from '@/assets/svg/region.svg'
import Zone from '@/assets/svg/zone.svg'
import Calender from '@/assets/svg/calender.svg'
import Phone from '@/assets/svg/phone.svg'

</script>
<style scoped>
</style>