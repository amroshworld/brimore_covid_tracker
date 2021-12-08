<template>
  <div>
    <main v-if="covid">
      <data-title :text="title" :dataDate="dataDate" />
      <data-appearance :status="status" />
      <countries-select
        @get-country="getCountryData"
        :countries="countries"
        :status="status"
      />
    </main>
    <main class="flex flex-col align-center justify-center text-center" v-else>
      <div class="text-gray-500 text-3xl mt-10 mb-6">fetching data</div>
      <img :src="loadingImage" class="w-24 m-auto" alt="" />
    </main>
  </div>
</template>

<script>
import DataTitle from "../components/DataTitle.vue";
import DataAppearance from "../components/DataAppearance.vue";
import CountriesSelect from "../components/CountrySelect.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    DataTitle,
    DataAppearance,
    CountriesSelect,
  },
  data() {
    return {
      title: "Global",
      loadingImage: require("../assets/hourglass.gif"),
    };
  },
  computed: {
    ...mapState(["covid", "dataDate", "status", "countries", "loading"]),
  },
  methods: {
    getCountryData(country) {
      this.title = country.Country;
      this.$store.state.status = country;
    },
  },
};
</script>
