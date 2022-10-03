<template>
<div>
  <div>
    <v-expansion-panels v-model="panel" focusable>
      <v-expansion-panel>

        <v-expansion-panel-header>
          <span align='center' justify='center'>
            {{buscartNum}}
          </span>
        </v-expansion-panel-header>


        <v-expansion-panel-content v-if='showContent'>
          <buscartPicker @changeBay='changeBayParent'></buscartPicker>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>

  <div>
    <v-container class="px-0" fluid>
      <v-row>
        <v-spacer>
        </v-spacer>
        <v-col cols=3 class="pl-3 mt-2">
          Status
        </v-col>
        <v-spacer></v-spacer>
        <v-switch v-model="switch1" :label="statusLabel" @click="switchStatus"></v-switch>
        <v-spacer></v-spacer>
      </v-row>

    </v-container>
  </div>



  <div>
    <redYellowGreenSelector imgurl="/plates.png" theKey="dishes" :theColor='platesColor' :theBay='buscartNum' class='grey darken-3'></redYellowGreenSelector>

    <redYellowGreenSelector imgurl="/silverware.png" theKey="silverware" :theColor='silverwareColor' :theBay='buscartNum' class='grey darken-3 mt-2'></redYellowGreenSelector>
    <redYellowGreenSelector imgurl="/trash.png" theKey="trash" :theColor='trashColor' :theBay='buscartNum' class='grey darken-3 mt-2  '></redYellowGreenSelector>
    <redYellowGreenSelector imgurl="/linens.png" theKey="linens" :theColor='linensColor' :theBay='buscartNum' class='grey darken-3 mt-2 '></redYellowGreenSelector>
    <redYellowGreenSelector imgurl="/liquids.png" theKey="liquids" :theColor='liquidsColor' :theBay='buscartNum' class='grey darken-3 mt-2 '></redYellowGreenSelector>
    <redYellowGreenSelector imgurl="/cup.png" theKey="cups" :theColor='cupColor' :theBay='buscartNum' class='grey darken-3 mt-2'></redYellowGreenSelector>
</div>


</div>
</template>


<script>
export default {
  data() {
    return {
      buscartNum: '102',
      bay: null,
      panel: [],
      switch1: true,
      statusLabel: null,
      showAllBays: false,
      platesColor: null,
      silverwareColor: null,
      trashColor: null,
      linensColor: null,
      liquidsColor: null,
      cupColor: null,
      showContent: 'true',
      bcData: {},



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
    changeBayParent(bay) {
      console.log("changeBAyParent")
      this.buscartNum = bay
      this.panel = []
      this.platesColor = this.bcData[bay]['dishes']
      this.silverwareColor = this.bcData[bay]['silverware']
      this.trashColor = this.bcData[bay]['trash']
      this.linensColor = this.bcData[bay]['linens']
      this.liquidsColor = this.bcData[bay]['liquids']
      this.cupColor = this.bcData[bay]['cups']
      this.statusLabel = this.bcData[bay]['status']
      if (this.statusLabel == "closed" || this.statusLabel == "Closed"){
        this.switch1 = false
      }
      else if (this.statusLabel == 'open' || this.statusLabel == "Open"){
        this.switch1 = true
      }
    },
    async switchStatus() {
      var closed = false
      if (this.statusLabel == 'open' || this.statusLabel == 'Open') {
        this.statusLabel = 'closed'


      } else {
        this.statusLabel = 'open'
        closed = true
      }
      if (closed == false){
      const ip = await this.$axios.$put('/api/updateBC', {
        name: this.buscartNum,
        key: 'status',
        val: "closed"
      })
    }
    else {
      const ip = await this.$axios.$put('/api/updateBC', {
        name: this.buscartNum,
        key: 'status',
        val: "open"
      })
    }

    },

    async grabBCData() {
      const response = await this.$axios.$get('/api/readAllBusCarts');
      this.bcData = response

      const startingBay = '102'
      this.changeBayParent(startingBay)
    }

  },
  //Lifecycle Hooks: beforeCreate, created, beforeMount, mounted, beforeUPdate, updated, beforeDestroy, destroyed
  mounted() {
    console.log("MountedBaby");
    this.grabBCData();

    console.log("CalledThatData")


  }
};
</script>

<style scoped>

</style>
