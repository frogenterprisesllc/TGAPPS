<template>
<div>
  <v-container>

    <v-row
    v-for="row in rows"
    >
    <v-col
    cols=3>
      <v-btn

    outlined
    color="white"

    @click="changeBay(row[0])"
    >
    <div v-if="row[0] === 'Lounge'">
      L </div>
      <div v-else>
    {{row[0]}}
  </div>
    </v-btn>
    </v-col>
    <v-spacer></v-spacer>
    <v-col
    cols=3>
      <v-btn

    outlined
    color="white"

    @click="changeBay(row[1])"
    >

    <div v-if="row[1] === 'Mainbar'">
      MB </div>
      <div v-else>
    {{row[1]}}
  </div>
    </v-btn>
    </v-col>
    <v-spacer></v-spacer>
    <v-col
    cols=3>
      <v-btn

    outlined
    color="white"

    @click="changeBay(row[2])"
    >
    <div v-if="row[2] === 'Terrace'">
      T </div>
      <div v-else>
    {{row[2]}}
  </div>
    </v-btn>
    </v-col>
    <v-spacer></v-spacer>
    </v-row>



  </v-container>

</div>
</template>


<script>

export default {
  data() {
    return {
      rows: {
        "row1": ["102", "202", "302"],
        "row2": ['108','208','308'],
        "row3": ["115", "215", "315"],
        "row4": ['122','222','322'],
        "row5": ["128", "228", "328"],
        "row6": ['132','232','332'],
        "row7": ["Lounge", "Mainbar", "Terrace"],

      }

}


},
  props: {
    //the parameters the comopnet accepst
    // 102 108 115 122 128 132 Lounge Mainbar Terrace
    // message: String,
    // product: Object,
    // email: {
      // type: String
      // required: true,
      // default: 'none'
      // validator: function (value) {
      //   return true if valid
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
    changeBay(bay) {
      console.log("inChildBay: ", bay)
      this.$emit('changeBay', bay)
      console.log("inChild")
    }

},
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
