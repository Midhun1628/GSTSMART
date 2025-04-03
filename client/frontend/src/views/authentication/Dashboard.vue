<script setup lang="ts">
// imported components
// import WelcomeBanner from '../../components/WelcomeBanner.vue';
import { useRouter } from 'vue-router';


import ChartCards from '@/views/widgets/chart/components/ChartCards.vue';
import RepeatCustomer from '@/views/widgets/chart/components/RepeatCustomer.vue';
import ProjectOverview from '@/views/widgets/chart/components/ProjectOverview.vue';
import UserCard from '@/views/widgets/statistics/components/UserCard.vue';
import ProjectCard from '../../components/ProjectCard.vue';
import TransactionCard from '@/views/widgets/data/components/TransactionCard.vue';
import TotalIncome from '@/views/widgets/chart/components/TotalIncome.vue';

const router = useRouter();

</script>

<template>
  <!-- -------------------------------------------------------------------- -->
  <!-- Top Navigation Section -->
  <!-- -------------------------------------------------------------------- -->
  <v-row class="my-0" justify="end">
    <v-col cols="auto">
      <button class="btn">
        <router-link to="/logout" class="btn-link">Logout</router-link>
      </button>
    </v-col>
  </v-row>

  <!-- welcome banner -->
  <!-- -------------------------------------------------------------------- -->
  <v-row class="my-0">
    <v-col cols="12">
      <!-- <WelcomeBanner /> -->
    </v-col>
  </v-row>

  <!-- Button -->
  <v-col cols="12">
    <UiParentCard title="Basic Button">
      <div class="d-flex ga-4 align-center flex-column flex-wrap flex-sm-row fill-height">
        <v-btn v-for="btn in btnsColor" rounded="md" :key="btn" :color="btn">
          {{ btn }}
        </v-btn>
      </div>
    </UiParentCard>
  </v-col>

  <!-- -------------------------------------------------------------------- -->
  <!-- Chart widgets -->
  <!-- -------------------------------------------------------------------- -->
  <ChartCards />

  <v-row class="mb-0">
    <v-col cols="12" xl="9" md="8">
      <v-row>
        <!-- Repeat customer -->
        <v-col cols="12">
          <RepeatCustomer />
        </v-col>

        <!-- Project overview -->
        <v-col cols="12">
          <ProjectOverview />
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12" xl="3" md="4">
      <v-row>
        <!-- Project -->
        <v-col cols="12">
          <ProjectCard />
        </v-col>

        <!-- User card -->
        <v-col cols="12">
          <UserCard />
        </v-col>
      </v-row>
    </v-col>
  </v-row>

  <v-row>
    <!-- Transactions -->
    <v-col cols="12" md="6">
      <TransactionCard />
    </v-col>

    <!-- Total income -->
    <v-col cols="12" md="6">
      <TotalIncome />
    </v-col>
  </v-row>
</template>

<style scoped>
.btn {
  padding: 10px 12px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 15px;
}

.btn:hover {
  background-color: darkred;
}

.btn-link {
  text-decoration: none;
  color: white;
}
</style>
