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

    <div v-if="curFloor == '1'">
      <v-container>
        <v-row>
        <v-col cols=4
        v-for="bay in dataFromAPI['1']"
        >
        <v-btn
        @click='clickedBay(bay.name)'>
          {{bay.name}}
        </v-btn>
        </v-col>
        <v-col cols='8'>
          <v-btn
            color="primary"
            @click="sitBay()"
          >Sit Bay {{curBay}}</v-btn>
        </v-col>
      </v-row>
      </v-container>
    </div>
    <div v-if="curFloor == '2'">
      <v-container>
        <v-row>
        <v-col cols=4
        v-for="bay in dataFromAPI['2']"
        >
        <v-btn
        @click="clickedBay(bay.name)">
          {{bay.name}}
        </v-btn>
        </v-col>
        <v-col cols='8'>
          <v-btn
            color="primary"
            @click="sitBay()"
          >Sit Bay {{curBay}}</v-btn>
        </v-col>
      </v-row>
      </v-container>
    </div>
    <div v-if="curFloor == '3'">
      <v-container>
        <v-row>
        <v-col cols=4
        v-for="bay in dataFromAPI['3']"
        >
        <v-btn
        @click="clickedBay(bay.name)">
          {{bay.name}}
        </v-btn>
        </v-col>
        <v-col cols='8'>
          <v-btn
            color="primary"
            @click="sitBay()"
          >Sit Bay {{curBay}}</v-btn>
        </v-col>
      </v-row>
      </v-container>
    </div>
  </div>



</div>
</template>


<script>

export default {
  data() {
    return {
      curFloor: 2,
      curBay: null,
      status: 'status',
      dataFromAPI: {},
}


},
  props: {

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
    changeFloor(value){
      console.log(this.curFloor)
      this.curFloor = value
      console.log("ChangedCurrentFloor to ", value)
    },
    async grabData(){
      console.log("dbugging")
      const response = await this.$axios.$get('/api/gsView');
      console.log("here")
      this.dataFromAPI = response

    },
    async sitBay(){
      console.log("Sit BAy")
      if(this.curBay != null){
      const ip = await this.$axios.$put('/api/updateBay', {
        name: this.curBay,
        key: this.status,
        val: "0Touch"
      })
    }
    },



    clickedBay(val){
      this.curBay = val
      console.log(val)
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
mounted() {
  console.log("MountedBaby");
  this.grabData();

  console.log("CalledThatData")


}

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
