<template>
<div>
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
  <v-container>


  </v-container>
  <div v-if="curFloor == 2">
  <caddieFloorView :floor="dataFromAPI['2']"

   > </caddieFloorView>
 </div>
 <div v-else-if="curFloor == 1">
 <caddieFloorView :floor="dataFromAPI['1']"

  > </caddieFloorView>
</div>
<div v-else-if="curFloor == 3">
<caddieFloorView :floor="dataFromAPI['3']"

 > </caddieFloorView>
</div>

</div>
</template>


<script>

export default {
  data() {
    return {
      curFloor: 2,
      dataFromAPI: {},
      dishes: ["red ma-2", "yellow ma-2", "green ma-2","red ma-2", "yellow ma-2", "green ma-2","green ma-2"],
      silverware: ["red ma-2", "yellow ma-2", "green ma-2","red ma-2", "yellow ma-2", "green ma-2","green ma-2"],
      liquids: ["red ma-2", "yellow ma-2", "green ma-2","red ma-2", "yellow ma-2", "green ma-2","green ma-2"],
      trash: ["red ma-2", "yellow ma-2", "green ma-2","red ma-2", "yellow ma-2", "green ma-2","green ma-2"],
      linens: ["red ma-2", "yellow ma-2", "green ma-2","red ma-2", "yellow ma-2", "green ma-2","green ma-2"],
      cups: ["red ma-2", "yellow ma-2", "green ma-2","red ma-2", "yellow ma-2", "green ma-2","green ma-2"],

      }




},
  props: {

  },
  computed: {

  },
  watch: {

  },


  methods: {
    async getData(){
      const response = await this.$axios.$get('/api/caddieView');
      this.dataFromAPI= response

    },
    changeFloor(value){
      console.log(this.curFloor)
      this.curFloor = value
      console.log("ChangedCurrentFloor to ", value)
    }
},
mounted () {
  this.getData()
}
//Lifecycle Hooks: beforeCreate, created, beforeMount, mounted, beforeUPdate, updated, beforeDestroy, destroyed
};

</script>

<style scoped>


/*
vuetify styling

ranges from 0-16
{property} {direction} -{size}
property is type of spacing, m for margin p for padding
direction designates the side the property applies to
t (top)
b (bottom)
l (left)
r (right)
x (left and right )
y (top and bottom)
a (all directions)
size (1-16)
1 is 4px, 2 is 8 px, n1 is -4 px or auto

with breakpoints for screen sizes, xs, sm, md, lg, xl

{property}{direction}-{breakpoint}-{size} */


</style>
