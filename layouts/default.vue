<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer />

    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} Frog Enterprises LLC</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'updateBusCart',
          to: '/updateBusCart'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Dishpit View',
          to: '/dishpit'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Caddie View',
          to: '/caddieView'
        },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Caddie Report',
        //   to: '/caddieReport'
        // },
        {
          icon: 'mdi-chart-bubble',
          title: 'GS View',
          to: '/golfServicesView'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Manager View',
          to: '/managerView'
        },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'BuildingWalk',
        //   to: '/buildingWalk'
        // }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'One Team'
    }
  }
}
</script>
