<template>
  <h1 class="font-black mb-3">Devices</h1>
  <div class="grid grid-cols-3 gap-4 border border-black ml-0 mr-5 p-3">
    <ul v-for="device in devices" :key="devices.id" class="border border-black">
      <li>
        <router-link
          :to="{
            name: 'device',
            params: { id: device.id },
          }"
        >
          <img :src="device.Photo" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Devices',
  props: {
    manufacturerId: Number,
  },
  data() {
    return {
      devices: [
        { id: 1, DeviceName: 'Asus ROG' },
        { id: 2, DeviceName: 'Dell XP13' },
      ],
    };
  },
  watch: {
    manufacturerId: function (newId, oldId) {
      // watch it
      console.log('Prop changed: ', newId, ' | was: ', oldId);
      this.validateId(newId);
    },
  },

  methods: {
    validateId(id) {
      let uri = 'https://demo.yume-dev.me/devices';

      if (id != 0 || id) {
        uri = ` ${uri}?ManufacturerID=${id}`;
        console.log('uri: ', uri);
        this.getDevices(uri);
      } else {
        this.getDevices(uri);
      }
    },

    // async getDevices() {
    //   const res = await axios.get('https://demo.yume-dev.me/devices');
    //   console.log(res.data);
    //   this.devices = res.data;
    // },

    getDevices(uri) {
      axios.get(uri).then((res) => {
        console.log('D: ', res.data);
        this.devices = res.data;
      });
    },
  },

  created() {
    this.validateId(0);
    console.log('mid', this.manufacturerId);
  },
};
</script>
