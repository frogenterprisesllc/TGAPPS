
<template>
  <div>
    <v-container>
  <v-row >
    <v-spacer></v-spacer>
    <v-col cols="4" >
    <!-- <v-img src="/TrashWithBackground.png" contain max-width="150" max-height="150"> </v-img> -->
    <v-img :src="imgurl" contain max-width="75" max-height="75" > </v-img>

  </v-col>
  <v-spacer></v-spacer>
  <v-col cols="4">
    <v-menu transition="slide-x-transition">
      <template v-slot:activator="{ on, attrs }">
      <!-- <template v-slot:activator="show1"> -->

<v-btn
v-if="firstTime == true"
fab
dark

v-bind="attrs"
v-on="on"
:color="theColor"
class="mt-3"


>

 </v-btn>
 <v-btn
 v-else
 fab
 dark

 v-bind="attrs"
 v-on="on"
 :color="color"
 class="mt-3"


 >

  </v-btn>





      </template>
      <v-list>
        <v-list-item
        >
        <v-btn
    class="mx-2"
    fab
    dark
    small
    v-bind="attrs"
    v-on="on"
    color="red"
    @click="clickedRed"
    > </v-btn>
        </v-list-item>
        <v-list-item
        >
        <v-btn
    class="mx-2"
    fab
    dark
    small
    v-bind="attrs"
    v-on="on"
    color="yellow"
    @click='clickedYellow'
    > </v-btn>
        </v-list-item>
        <v-list-item
        >
        <v-btn
    class="mx-2"
    fab
    dark
    small
    v-bind="attrs"
    v-on="on"
    color="green"
    @click='clickedGreen'
    > </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-col>
  </v-row>
</v-container>
  </div>
  </template>



<script>

export default {
  data() {
    return {
      isGreen: true,
      isYellow: false,
      isRed: false,
      show1: false,
      firstTime: true,
      on: null,
      attrs: null,
      color: 'purple',

}


},
  props: {
    //the parameters the comopnet accepst
    imgurl: String,
    theColor: String,
    theBay: String,
    theKey: String

  },
  setup(props, context){
    // this.color = props['theColor']
    console.log(props['theColor'])

  },
  computed: {
    computedColorVariable: function() {
      if (this.firstTime == true){
        console.log("HIHIHIlkas;dfja;lksdfjas;dlkjfl;kajdsf")
        return this.theColor
      }
      else {
        console.log("asdssd")

        return this.color
      }
    }
    // fullName: function () {
    //   return this.fistName + ' ' + this.lastName
  },
  watch: {
    //called when firstname changes value
    // firstName: function (value, oldValue) {...}

  },


  methods: {
    openMenu(){
      show1 = true
    },
    async clickedRed() {
        this.firstTime = false
        this.color = 'red';
      const ip = await this.$axios.$put('/api/updateBC', {
        name: this.theBay,
        key: this.theKey,
        val: "red"
      })
      this.ip = ip

    },
    async clickedYellow() {

      this.firstTime = false
        this.color = 'yellow';
        const ip = await this.$axios.$put('/api/updateBC', {
          name: this.theBay,
          key: this.theKey,
          val: "yellow"
        })
        this.ip = ip

    },
    async clickedGreen() {
this.firstTime = false
        this.color = 'green';
        const ip = await this.$axios.$put('/api/updateBC', {
          name: this.theBay,
          key: this.theKey,
          val: "green"
        })
        this.ip = ip


    },

},

//Lifecycle Hooks: beforeCreate, created, beforeMount, mounted, beforeUPdate, updated, beforeDestroy, destroyed
beforeCreate() {


},
updated() {
  console.log('updated')
},
mounted() {


}

};

</script>

<style scoped>
/* .white{
  background-color: white;

}
#white{
  background-color: white;
} */
</style>
