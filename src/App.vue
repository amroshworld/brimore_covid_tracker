<template>
  <div id="app">
    <Header />
    <div class="container">
      <div></div>

      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },

  computed: {
    ...mapState(["covid", "dataDate", "status", "countries"]),
  },
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("fetchCovidData");
  },
};
</script>
