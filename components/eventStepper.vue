<template>
<div>
  <v-stepper
      v-model="currentEventStep"
      vertical
    >
      <div v-for="checkpoint in checkpoints">
      <v-stepper-step
        :complete="currentEventStep > checkpoint['step']"
        :step="checkpoint['step']"
      >
        {{checkpoint['title']}}
        <small>{{checkpoint["description"]}}</small>
      </v-stepper-step>

      <v-stepper-content :step="checkpoint['step']">
        <v-card
          color="grey lighten-1"
          class="mb-12"
          height="200px"
        ></v-card>
        <v-btn
          color="primary"
          @click="clickedContinue()"
        >
          Continue
        </v-btn>
        <v-btn text
        v-if="checkpoint['step'] != 1"
        @click="clickedCancel()"
        class='red mt-2'
          >
          Go Back
        </v-btn>
      </v-stepper-content>
    </div>

    </v-stepper>

  <!-- <v-stepper v-model="currentEventStep"
  vertical>

    <v-stepper-header

    >
      <div v-for="checkpoint in checkpoints">
        <v-stepper-step
          :complete="currentEventStep > checkpoint['step']"
          :step="checkpoint['step']"
          class='green'
        >

        </v-stepper-step>


      </div>

    </v-stepper-header>



    <v-stepper-items >
      <div v-for="checkpoint in checkpoints">
        <v-stepper-content :step='checkpoint["step"]'>
          <v-card
            class="mb-12"
            color="grey lighten-1"
            height="200px"
          >
          {{checkpoint["step"]}}
        </v-card>
        </v-stepper-content>
      </div>
    </v-stepper-items>


    <v-btn
    class='green'
    @click="goForward()"
    >
    Easy Money
    </v-btn>
    <v-btn
    v-if='currentEventStep > 1'
    class='red'
    @click="goBack()"
    >
      Go Back
    </v-btn>

</v-stepper> -->



  <!-- <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1"
      >
        Name of step 1
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step
        :complete="e1 > 2"
        step="2"
      >
        Name of step 2
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        Name of step 3
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 2"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-2"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3"
        >
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-3"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 1"
        >
          Continue
        </v-btn>


      </v-stepper-content>
    </v-stepper-items>
  </v-stepper> -->

</div>
</template>


<script>

export default {
  data() {
    return {
      e1: 1,
      e6: 1,
      currentEventStep: 1,
}


},
  props: {
    checkpoints: Array,
    currentStep: Number,
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
    clickedContinue() {
      this.currentEventStep += 1
    },
    clickedCancel(){
      if (this.currentEventStep > 1){
      this.currentEventStep -= 1
    }

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
