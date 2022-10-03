<template>
<div>
<v-container>


<v-row class='grey darken-4'>
  <v-spacer></v-spacer>
  <v-col cols=4 >
  <span>  First </span>
  </v-col>
  <v-col cols=4>
    <span> Second  </span>
  </v-col>
  <v-col cols=4>
    <span>  Third  </span>
  </v-col>
</v-row>

<v-row class='grey darken-4'>

<v-col
v-for="buscart in correctOrder"
cols=4

>
<v-btn v-if="dataFromAPI[buscart] == 'open'"

        rounded
        color="green"
        dark
        >
        <div v-if="buscart == 'Terrace'">
            T
  </div>
  <div v-else-if="buscart == 'Mainbar'">
      MB
</div>
<div v-else-if="buscart == 'Lounge'">
    L
</div>
        <div v-else>
  {{buscart}}
</div>
</v-btn>
<v-btn v-else

      rounded
      color="red"
      dark
      >
      <div v-if="buscart == 'Terrace'">
          T
</div>
<div v-else-if="buscart == 'Mainbar'">
    MB
</div>
<div v-else-if="buscart == 'Lounge'">
  L
</div>
      <div v-else>
{{buscart}}
</div>
</v-btn>
</v-col>


</v-row>


</v-container>
</div>
</template>


<script>

export default {
  data() {
    return {
      testColor: 'red',
      testLabel: 'closed',
      busCartsRemaining: 12,
      firstFloorData: ['open', 'closed'],
      secondFloorData: ['closed', 'open'],
      thirdFloorData: ['open', 'open'],
      dataFromAPI: {},
      timer: null,
      correctOrder: ['102', '202','302','108', '208','308','115', '215','315','122', '222','322','128', '228','328','132', '232','332','Lounge', 'Mainbar','Terrace'],


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

    async getData() {
      const response = await this.$axios.$get('/api/dishpitView');
      this.dataFromAPI= response

    },

    async updateData() {

      const response = await this.$axios.$get('/api/dishpitView');
      this.dataFromAPI= response
    }


},
//Lifecycle Hooks: beforeCreate, created, beforeMount, mounted, beforeUPdate, updated, beforeDestroy, destroyed
mounted () {
  this.getData()

},


// beforeUpdate () {
//   this.timer = setInterval(() => {
//     this.getData()
//   }, 10000)
//   console.log("Updated")
//
// },
// updated () {
//
//   clearInterval(this.timer)
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
