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

  <v-container>
    <events></events>
  </v-container>

  <v-container class=' mt-2'>
    <v-row justify="center">
        <v-expansion-panels popout >
          <v-expansion-panel
          class='blue darken-4'
          >
            <v-expansion-panel-header>Bays: Zero Touches</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-chip v-for='bay in zeroTouches'
              class='red black--text'
              @click="touched0Bay(bay)"
              >
                {{bay}}

              </v-chip>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    <v-row>
      <v-spacer></v-spacer>

  <v-spacer></v-spacer>
  </v-row>
  </v-container>

  <v-container class=' mt-2'>
    <v-row justify="center">
        <v-expansion-panels popout>
          <v-expansion-panel
          class='blue darken-4'
          >
            <v-expansion-panel-header> Bays: One Touch </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-chip v-for='bay in oneTouch'
              class='blue black--text'
              >
                {{bay}}

              </v-chip>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    <v-row>
      <v-spacer></v-spacer>

  <v-spacer></v-spacer>
  </v-row>
  </v-container>

  <v-container class=' mt-2'>
    <v-row justify="center">
        <v-expansion-panels popout >
          <v-expansion-panel
          class='blue darken-4'
          >
            <v-expansion-panel-header>Bays: 2+ Touches </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-chip v-for='bay in twoTouch'
              class='yellow accent-2 black--text'
              >
                {{bay}}

              </v-chip>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    <v-row>
      <v-spacer></v-spacer>

  <v-spacer></v-spacer>
  </v-row>
  </v-container>

  <v-container class=' mt-2'>
    <v-row justify="center">
        <v-expansion-panels popout >
          <v-expansion-panel
          class='blue darken-4'
          >
            <v-expansion-panel-header>Bays: Empty </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-chip v-for='bay in emptyBays'
              class='white black--text'
              >
                {{bay}}

              </v-chip>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    <v-row>
      <v-spacer></v-spacer>

  <v-spacer></v-spacer>
  </v-row>
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
    },
    async touched0Bay(bay){
      console.log("double clicked zero")
      this.zeroTouches = this.zeroTouches.filter(function(item){
        return item !== bay
      });
      this.oneTouch.push(bay)
      const ip = await this.$axios.$put('/api/updateBay', {
        name: bay,
        key: 'status',
        val: "1Touch"
      })

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




</style>
