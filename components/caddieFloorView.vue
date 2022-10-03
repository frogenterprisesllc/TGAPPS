<template>
  <div>
  <v-container

  >
  <div >
    <v-row class='grey darken-3 pt-1 '>
      <v-spacer></v-spacer>
    <span> Dishes </span>
    <v-spacer></v-spacer>
  </v-row>
    <v-row class='grey darken-3 mb-2'>
      <v-spacer></v-spacer>
      <v-col v-for="dish in dishes"
            :class="dish"
            cols='1'>

      </v-col>
      <v-spacer></v-spacer>
    </v-row>
</div>
    <v-row class="grey darken-3  pt-1 mt-2">
      <v-spacer></v-spacer>
    <span> Silverware </span>
    <v-spacer></v-spacer>
  </v-row>
    <v-row class='grey darken-3 mb-2'>
      <v-spacer></v-spacer>
      <v-col v-for="silver in silverware"
            :class="silver"
            cols='1'>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row class='grey darken-3 pt-1 mt-2'>
      <v-spacer></v-spacer>
    <span> Liquids </span>
    <v-spacer></v-spacer>
  </v-row>
    <v-row class='grey darken-3 mb-2'>
      <v-spacer></v-spacer>
      <v-col v-for="liquid in liquids"
            :class="liquid"
            cols='1'>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row class='grey darken-3 pt-1 mt-2'>
      <v-spacer></v-spacer>
    <span> Trash </span>
    <v-spacer></v-spacer>
  </v-row>
    <v-row class='grey darken-3 mb-2'>
      <v-spacer></v-spacer>
      <v-col v-for="bag in trash"
            :class="bag"
            cols='1'
            >
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row class='grey darken-3 pt-1 mt-2'>
      <v-spacer></v-spacer>
    <span> Linens </span>
    <v-spacer></v-spacer>
  </v-row>
    <v-row class='grey darken-3 mb-2'>
      <v-spacer></v-spacer>
      <v-col v-for="linen in linens"
            :class="linen"
            cols='1'
            >
      </v-col>
      <v-spacer></v-spacer>
    </v-row>

    <v-row class='grey darken-3 pt-1 mt-2'>
      <v-spacer></v-spacer>
    <span> Cups </span>
    <v-spacer></v-spacer>
  </v-row>
    <v-row class='grey darken-3 mb-2'>
      <v-spacer></v-spacer>
      <v-col v-for="cup in cups"
            :class="cup"
            cols='1'
            >
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

}


},
  props: {
    floor: Object,


//     "202": {
// "name": "202",
// "status": "Open",
// "floor": 2,
// "dishes": "g",
// "silverware": "red",
// "liquids": "r",
// "trash": "green",
// "linens": "g",
// "cups": "g"
// },
},
  computed: {
    dishes: function () {
      try {
      return this.floor.dishes
    }
    catch (error){
      return ['green','yellow','red','purple','blue','orange','black']
    }
  },
  silverware: function () {
    try {
    return this.floor.silverware
  }
  catch (error){
    return ['green','yellow','red','purple','blue','orange','black']
  }
},
  liquids: function () {
    try {
    return this.floor.liquids
  }
  catch (error){
    return ['green','yellow','red','purple','blue','orange','black']
  }
},
  trash: function () {
    try {
    return this.floor.trash
  }
  catch (error){
    return ['green','yellow','red','purple','blue','orange','black']
  }
},
  linens: function () {
    try {
    return this.floor.linens
  }
  catch (error){
    return ['green','yellow','red','purple','blue','orange','black']
  }
},
  cups: function () {
    try {
    return this.floor.cups
  }
  catch (error){
    return ['green','yellow','red','purple','blue','orange','black']
  }
},
  },
  watch: {
    //called when firstname changes value
    // firstName: function (value, oldValue) {...}
  },


  methods: {
    launchGraph(){

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
mounted () {

    var yAxis = ['Dishes', 'Silverware', 'Liquids', 'Trash', 'Linens', 'Cups', ];
    var xAxis = ['Buscart1', 'Buscart2','Buscart3','Buscart4','Buscart5']
    // var xAxis = ['Buscart1', 'Buscart2','Buscart3','Buscart4','Buscart5','Buscart6','Buscart7',]

    var dataDict = {
      'Buscart1': {
        'Dishes': 'green',
        'Silverware': 'green',
        'Liquids': 'green',
        'Trash': 'green',
        'Linens': 'green',
        'Cups': 'green',

      },
      'Buscart2': {
        'Dishes': 'yellow',
        'Silverware': 'yellow',
        'Liquids': 'red',
        'Trash': 'red',
        'Linens': 'green',
        'Cups': 'green',
      },
    }//dataDict




}
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

#div1{
  background-color: red,
}
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
