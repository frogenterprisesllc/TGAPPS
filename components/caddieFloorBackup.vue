<template>
  <div>

<v-btn @click="LaunchGraph()"> launchGraph</v-btn>

<div id='myPlot'></div>

<div id='myDiv'></div>


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
    // fullName: function () {
    //   return this.fistName + ' ' + this.lastName
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
    var country = ['Dishes', 'Silverware', 'Liquids', 'Trash', 'Linens', 'Cups', ];
    var votingPop = [40, 45.7, 52, 53.6, 54.1, 54.2,];
    var regVoters = [49.1, 42, 52.7, 84.3, 51.7, 61.1,];

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
    }
    function getColor(data) {
      // enter your conditional coloring code here
      if (data.id === 'kitkat' && data.value > 0) {
        return '#0000FF'
      }
      return '#FF0000';
    }


    // const conditions = ["green", "yellow", "red"];
    // const traces = conditions.map(condition => {
    //   const filteredData = dataDict.filter(d => d.condition === condition);
    //   return {
    //     x: filteredData.map(d => d.id),
    //     y: filteredData.map(d => d.value),
    //     name: condition,
    //     mode: 'markers',
    //     type: 'scatter',
    //     marker: {
    //       color: filteredData.map(d => getColor(d))
    //     }
    //   };
    // });
    //
    // Plotly.newPlot('myPlot', traces, {showlegend: false});






    const data = [
      {
        "id": "kitkat",
        "value": 12,
        "condition": "CM"
      },
      {
        "id": "kitkat",
        "value": 4,
        "condition": "ECM"
      },
      {
        "id": "kitkat",
        "value": -23,
        "condition": "SAX"
      },
      {
        "id": "milkyway",
        "value": 12,
        "condition": "CM"
      },
      {
        "id": "milkyway",
        "value": 4,
        "condition": "ECM"
      },
      {
        "id": "milkyway",
        "value": -23,
        "condition": "SAX"
      }
    ];

const conditions = ["CM", "ECM", "SAX"];

function getColor(data) {
  // enter your conditional coloring code here
  if (data.id === 'kitkat' && data.value > 0) {
    return '#0000FF'
  }
  return '#FF0000';
}

const traces = conditions.map(condition => {
  const filteredData = data.filter(d => d.condition === condition);
  return {
    x: filteredData.map(d => d.id),
    y: filteredData.map(d => d.value),
    name: condition,
    mode: 'markers',
    type: 'scatter',
    marker: {
      color: filteredData.map(d => getColor(d))
    }
  };
});

// Plotly.newPlot('myPlot', traces, {showlegend: false});




    var trace1 = {
    type: 'scatter',
    x: votingPop,
    y: country,
    mode: 'markers',
    name: 'Percent of estimated voting age population',
    marker: {
    color: 'rgba(156, 165, 196, 0.95)',
    line: {
      color: 'green',
      width: 1,
    },
    symbol: 'circle',
    size: 16
    }
    };

    var trace2 = {
    x: regVoters,
    y: country,
    mode: 'markers',
    name: 'Percent of estimated registered voters',
    marker: {
    color: 'rgba(204, 204, 204, 0.95)',
    line: {
      color: 'green',
      width: 1,
    },
    symbol: 'circle',
    size: 16
    }
    };

    var dataa = [trace1, trace2];

    var layout = {
      showlegend: false,

    xaxis: {
    showgrid: false,
    showline: true,
    linecolor: 'rgb(102, 102, 102)',
    titlefont: {
      font: {
        color: 'rgb(204, 204, 204)'
      }
    },
    tickfont: {
      font: {
        color: 'rgb(102, 102, 102)'
      }
    },
    autotick: false,
    dtick: 10,
    ticks: 'outside',
    tickcolor: 'rgb(102, 102, 102)'
    },
    margin: {
    l: 140,
    r: 40,
    b: 50,
    t: 80
    },
    legend: {
    font: {
      size: 0,
    },
    yanchor: 'middle',
    xanchor: 'left'
    },
    width: 300,
    height: 600,
    paper_bgcolor: 'rgb(254, 247, 234)',
    plot_bgcolor: 'rgb(254, 247, 234)',
    hovermode: 'closest'
};

// Plotly.newPlot('myDiv', dataa, layout, {staticPlot: true});
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
