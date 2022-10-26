<template>
<div>
  <v-container>
    <v-spacer></v-spacer>
  <v-btn-toggle mandatory v-model="curFloor">


    <v-btn
    value='1'
    @click="changeFloor(1)"
    >
    Floor 1
    </v-btn>

    <v-btn
    value='2'
    @click="changeFloor(2)"
    >
    Floor 2
    </v-btn>

    <v-btn
    value = '3'
    @click="changeFloor(3)"
    >
    Floor 3
    </v-btn>



  </v-btn-toggle>
    <v-spacer></v-spacer>
  </v-container>
</div>
</template>


<script>

export default {
  data() {
    return {
      curFloor: 1,

}


},
  props: {

  },
  computed: {

  },
  watch: {

  },


  methods: {
    changeFloor(floor){
      this.curFloor = floor
    }

},


};

</script>

<style scoped>




</style>
