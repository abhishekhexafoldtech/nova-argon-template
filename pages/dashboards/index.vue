<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div
            v-for="{
              title,
              value,
              description,
              icon: { component, background, shape },
            } of cardData"
            :key="title"
            class="col-lg-3 col-md-6 col-12"
          >
            <MiniStatisticsCard
              :title="title"
              :value="value"
              :description="description"
              :icon="{
                component: component,
                background: background,
                shape: shape,
              }"
            />
          </div>
        </div>
        
        <!-- Graphs and Chats  -->
        <div class="row">
          <div class="col-lg-6 mb-lg">
            <div class="card z-index-2">
              <div class="mb-0 pb-0 card-header">
                <h6>Sales Overview</h6>
                <p class="text-sm">
                  <i class="fa fa-arrow-up text-success"></i>
                  <span class="font-weight-bold ms-1">4% more</span> in 2021
                </p>
              </div>
              <div class="p-0 card-body">
                <div class="chart">
                  <GradientLineChart
                    :chart-options="{
                      chart: {
                        type: 'area',
                      },
                      colors: ['#4BB543'],
                      labels: [
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ],
                      dataLabels: {
                        enabled: false,
                      },
                      stroke: {
                        curve: 'smooth',
                      },
                      legend: {
                        show: false,
                      },
                    }"
                    :series="[
                      {
                        name: 'Mobile Apps',
                        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                      },
                    ]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 mb-lg">
            <div class="card z-index-2">
              <div class="mb-0 pb-0 card-header">
                <h6>Sales Overview</h6>
                <p class="text-sm">
                  <i class="fa fa-arrow-up text-success"></i>
                  <span class="font-weight-bold ms-1">4% more</span> in 2021
                </p>
              </div>
              <div class="p-0 card-body">
                <div class="chart">
                  <GradientLineChart
                    :chart-options="{
                      chart: {
                        type: 'area',
                      },
                      colors: ['#4BB543'],
                      labels: [
                        'Apr',
                        'May',
                        'Jun',
                        'Jul',
                        'Aug',
                        'Sep',
                        'Oct',
                        'Nov',
                        'Dec',
                      ],
                      dataLabels: {
                        enabled: false,
                      },
                      stroke: {
                        curve: 'smooth',
                      },
                      legend: {
                        show: false,
                      },
                    }"
                    :series="[
                      {
                        name: 'Mobile Apps',
                        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                      },
                    ]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Card  -->
        <div class="row mt-4">
          <div
            v-for="{
              title,
              value,
              description,
              icon: { component, background, shape },
            } of cardData"
            :key="title"
            class="col-lg-3 col-md-6 col-12"
          >
            <MiniStatisticsCard
              :title="title"
              :value="value"
              :description="description"
              :icon="{
                component: component,
                background: background,
                shape: shape,
              }"
            />
          </div>
        </div>
        
        <!-- Tabel  -->
        <div class="row mt-4">
          <div class="col-12 col-md-12 mb-12 mb-md-12">
            <AuthorsTable />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import image2 from "@/assets/img/img-2.jpg";
import image1 from "@/assets/img/img-1.jpg";
import image3 from "@/assets/img/img-3.jpg";

import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team5 from "@/assets/img/team-5.jpg";
import team4 from "@/assets/img/team-4.jpg";

import jira from "@/assets/img/small-logos/logo-jira.svg";
import asana from "@/assets/img/small-logos/logo-asana.svg";
import spotify from "@/assets/img/small-logos/logo-spotify.svg";
import bootstrap from "@/assets/img/small-logos/bootstrap.svg";
import invision from "@/assets/img/small-logos/logo-invision.svg";
import slack from "@/assets/img/small-logos/logo-slack.svg";
import adobe from "@/assets/img/small-logos/logo-xd.svg";

import US from "@/assets/img/icons/flags/US.png";
import DE from "@/assets/img/icons/flags/DE.png";
import GB from "@/assets/img/icons/flags/GB.png";
import BR from "@/assets/img/icons/flags/BR.png";

import CategoriesList from "@/components/cards/CategoriesList.vue";
import MiniStatisticsCard from "@/components/cards/MiniStatisticsCard.vue";
import GradientLineChart from "@/components/charts/GradientLineChart.vue";
import Carousel from "@/components/dashboards/default/Carousel.vue";
import MemberCard from "@/components/dashboards/default/MemberCard.vue";
import AuthorsTable from "@/components/dashboards/default/AuthorsTable.vue";
import PostCard from "@/components/cards/PostCard.vue";
import TodoList from "@/components/dashboards/default/TodoList.vue";
import ProgressTrackCard from "@/components/dashboards/default/ProgressTrackCard.vue";
import ProjectCard from "@/components/dashboards/default/ProjectCard.vue";
import CreditCard from "@/components/dashboards/default/CreditCard.vue";
import InfoCard from "@/components/dashboards/default/InfoCard.vue";

definePageMeta({
  layout: "default",
});
const cardData = [
  {
    title: "Today's Money",
    value: "$53,000",
    description: `<span
                  class='text-sm font-weight-bolder text-success'
                  >+55%</span> since yesterday`,
    icon: {
      component: "ni ni-money-coins",
      background: "bg-gradient-primary",
      shape: "rounded-circle",
    },
  },
  {
    title: "Today's Users",
    value: "2,300",
    description: `<span
                  class='text-sm font-weight-bolder text-success'
                  >+3%</span> since last week`,
    icon: {
      component: "ni ni-world",
      background: "bg-gradient-danger",
      shape: "rounded-circle",
    },
  },
  {
    title: "New Clients",
    value: "+3,462",
    description: `<span
                  class='text-sm font-weight-bolder text-danger'
                  >-2%</span> since last quarter`,
    icon: {
      component: "ni ni-paper-diploma",
      background: "bg-gradient-success",
      shape: "rounded-circle",
    },
  },
  {
    title: "Sales",
    value: "$103,430",
    description: `<span
                  class='text-sm font-weight-bolder text-success'
                  >+5%</span> than last month`,
    icon: {
      component: "ni ni-cart",
      background: "bg-gradient-warning",
      shape: "rounded-circle",
    },
  },
];

const sales = {
  us: {
    country: "United States",
    sale: 2500,
    value: "$230,900",
    bounce: "29.9%",
    flag: US,
  },
  germany: {
    country: "Germany",
    sale: "3.900",
    value: "$440,000",
    bounce: "40.22%",
    flag: DE,
  },
  britain: {
    country: "Great Britain",
    sale: "1.400",
    value: "$190,700",
    bounce: "23.44%",
    flag: GB,
  },
  brasil: {
    country: "Brasil",
    sale: "562",
    value: "$143,960",
    bounce: "32.14%",
    flag: BR,
  },
};
</script>
  