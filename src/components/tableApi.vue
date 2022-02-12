<template>
  <div>
    <!-- fillter -->
    <b-row>
      <b-col lg="6" class="mt-0">
        <b-form-group
          label="Filter"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <!-- filter -->
    <b-table
      :fields="fields"
      :items="data" 
      :filter-included-fields="filterOn"
      :filter="filter" 
      responsive 
      striped 
      hover 
      caption-top
      small
      class="mb-5"
    >
      <template #table-caption>Temp data connect API : https://jsonplaceholder.typicode.com/users</template>
      <template v-slot:cell(address)="row">
        <p class="mt-0 mb-1"><small class="text-muted">street :</small></p>
        <p class="mt-0 mb-1">{{ row.item.address.street }}</p>
        <p class="mt-0 mb-1 text-sm"><small class="text-muted">city :</small></p>
        <p class="mt-0 mb-1">{{ row.item.address.city }}</p>
        <p class="mt-0 mb-1"><small class="text-muted">zipcode :</small></p>
        <p class="mt-0 mb-1">{{ row.item.address.zipcode }}</p>
      </template>
      <template v-slot:cell(company)="row">
        <p class="mt-0 mb-1">{{ row.item.company.name }}</p>
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      fields: ["id", "name", "username","email","address","phone","website","company"],
      filter: null,
      filterOn: [],
    };
  },
  computed: {
    // sortOptions() {
    //   // Create an options list from our fields
    //   return this.fields
    //     .filter(f => f.sortable)
    //     .map(f => {
    //       return { text: f.label, value: f.key }
    //     })
    // }
  },
  mounted() {
    this.getApi();
  },
  methods: {
    async getApi() {
      this.data = [];
      try {
        const res = await this.$http.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        if (res.status === 200) {
          this.data = res.data.map((item) => ({ ...item }));
        } else {
          throw { res };
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>