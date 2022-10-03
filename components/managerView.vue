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

  <v-container class='grey darken-4'>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols=5>
    <span> Zero Touches </span>
  </v-col>
  <v-spacer></v-spacer>
  </v-row>
    <v-chip v-for='bay in zeroTouches'
    class='red black--text'
    >
      {{bay}}

    </v-chip>
  </v-container>

  <v-container class='grey darken-4 mt-2'>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols=5>
    <span> One Touch </span>
  </v-col>
  <v-spacer></v-spacer>
  </v-row>
    <v-chip v-for='bay in oneTouch'
    class='blue black--text'
    >
      {{bay}}

    </v-chip>
  </v-container>

  <v-container class='grey darken-4 mt-2'>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols=5>
    <span> 2+ Touches </span>
  </v-col>
  <v-spacer></v-spacer>
  </v-row>
    <v-chip v-for='bay in twoTouch'
    class='green black--text'
    >
      {{bay}}

    </v-chip>
  </v-container>

  <v-container class='grey darken-4 mt-2'>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols=5>
    <span> Empty Bays </span>
  </v-col>
  <v-spacer></v-spacer>
  </v-row>
    <v-chip v-for='bay in emptyBays'
    class='white black--text'
    >
      {{bay}}

    </v-chip>
  </v-container>
</div>
</template>


<script>

export default {
  data() {
    return {
      curFloor: '2',
      emptyBays: ['101','102','103','104','105','106','107','108','109','110','111'],
      zeroTouches: ['112','113','114','115','116','117','118','119'],
      oneTouch: ['120','121','122','123','124','125','126','127','128'],
      twoTouch: ['129','130','131','132','133','134']

}


},
  props: {
    //the parameters the comopnet accepst
    // message: String,
    // product: Object,
    // email: {
      // type: String
      // required: true,
      // default: 'none'
      // validator: function (value) {
      //   return true if valid
//       String
// Number
// Boolean
// Array
// Object
// Date
// Function
// Symbol
      // }
  },
  computed: {
    // fullName: function () {
    //   return this.fistName + ' ' + this.lastName
  },
  watch: {
    //called when firstname changes value
    // firstName: function (value, oldValue) {...}
  },


  methods: {
    changeFloor(val){
      this.curFloor = val
    }
// fetching Data
    // async grabBCData() {
    //   const response = await this.$axios.$get('/api/readAllBusCarts');
    //   this.bcData = response
    //
    //   const startingBay = '202'
    //   this.changeBayParent(startingBay)
    // }

},
//Lifecycle Hooks: beforeCreate, created, beforeMount, mounted, beforeUPdate, updated, beforeDestroy, destroyed
// mounted() {
//   console.log("MountedBaby");
//   this.grabBCData();
//
//   console.log("CalledThatData")
//
//
// }

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
