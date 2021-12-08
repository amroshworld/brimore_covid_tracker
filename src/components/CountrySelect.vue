<template>
  <div>
    <select
      @change="onchange()"
      v-model="selected"
      class="form-select mt-10 block w-full border p-3 rounded"
    >
      <option value="0">Select Country</option>
      <option v-for="country in countries" :key="country.ID" :value="country">
        {{ country.Country }}
      </option>
    </select>
    <div class="md:content-around">
      <div id="piechart_3d" style=""></div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "CountrySelect",
  props: ["countries", "status"],
  data() {
    return {
      selected: 0,
    };
  },
  methods: {
    onchange() {
      const country = this.selected;
      this.$emit("get-country", country);
      const newDeaths = country.NewDeaths;
      const totalDeaths = country.TotalDeaths;
      const totalConfirmed = country.TotalConfirmed;
      const newConfirmed = country.NewConfirmed;

      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ["Task", "Hours per Day"],
          ["new Death", newDeaths],
          ["total Deaths", totalDeaths],
          ["total Confirmed", totalConfirmed],
          ["new Confirmed", newConfirmed],
        ]);

        var options = {
          title: "COVID 19",
          is3D: true,
        };

        var chart = new google.visualization.PieChart(
          document.getElementById("piechart_3d")
        );
        chart.draw(data, options);
      }
    },
  },
};
</script>

<style>
</style>