<template>
<div>
  <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="event_ in events"
          class='green darken-4'
        >
          <v-expansion-panel-header>{{event_['name']}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <eventStepper :checkpoints="event_['checkpoints']"></eventStepper>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
</div>
</template>


<script>

export default {
  data() {
    return {
      events: {
        "event1": {
          "checkpoints": [
            {
              "description": "Go Over BEO With Host",
              "notes": "string",
              "status": "Not Complete",
              "step": "1",
              "time": "2022-10-14 18:00:00",
              "title": "Host Check In"
            },
            {
              "description": "Make sure buffet was succesfully delivered and there are people stuffing their faces with some Chef B Mac 'N Cheese'",
              "notes": "string",
              "status": "Not Complete",
              "step": "2",
              "time": "2022-10-14 18:30:00",
              "title": "Food Check in"
            },
            {
              "description": "Close Out Event. Check for Drink packages, Food Packages, Minimums were met, etc.",
              "notes": "string",
              "status": "Not Complete",
              "step": "3",
              "time": "2022-10-14 20:00:00",
              "title": "Event Check Out"
            },
            {
              "description": "Close Out with admin. Ensure all cash has been collected, notes filled out, and all have been filed with admin.",
              "notes": "string",
              "status": "Not Complete",
              "step": "4",
              "time": "2022-10-14 21:00:00",
              "title": "Event Clock Out"
            }
          ],
  "endingBay": "223",
  "endtime": "2022-10-14 20:00:00",
  "hosts": "Jake and Kirk",
  "key": "yk0e130bragw",
  "name": "Example Party",
  "startingBay": "201",
  "starttime": "2022-10-14 18:00:00"
}
}

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
