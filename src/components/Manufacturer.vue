<template>
  <div class="grid grid-cols-2 gap-4 border-black">
    <div class="ml-10 mr-0">
      <h1 class="font-black mb-3">Manufacturer</h1>
      <ul
        v-for="manufacture in manufacturer"
        :key="manufacture.id"
        class="border border-black"
      >
        <li>
          <button @click="changeManufacturerId(manufacture.id)">
            <img :src="manufacture.Logo" width="100" />
          </button>
        </li>
      </ul>
    </div>
    <div>
      <slot :factId="currentManufactID"></slot>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Manufacturer',
  data() {
    return {
      currentManufactID: 0,
      manufacturer: [
        { id: 1, Title: 'Asus' },
        { id: 2, Title: 'Dell' },
      ],
    };
  },
  methods: {
    // getManufacturer() {
    //   axios.get('https://demo.yume-dev.me/manufacturers').then((res) => {
    //     console.log(res);
    //   });
    // },

    async getManufacturer() {
      const res = await axios.get('https://demo.yume-dev.me/manufacturers');
      console.log('M: ', res.data);
      this.manufacturer = res.data;
    },

    changeManufacturerId(id) {
      this.currentManufactID = id;
      console.log(`id : ${id}`);
    },
  },

  created() {
    this.getManufacturer();
  },
};
</script>
