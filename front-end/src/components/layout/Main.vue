<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="sandbox">
        <v-navigation-drawer
          v-model="primaryDrawer.model"
          :color="'gray'"
          :clipped="primaryDrawer.clipped"
          :floating="primaryDrawer.floating"
          :mini-variant="primaryDrawer.mini"
          app
          overflow
          absolute
          dark
        >
          <div class="name-user">
            <span>{{ getAuth.user.name }}</span>
          </div>
          <div>
            <v-list-item link :to="{ name: 'home' }" :color="'white'">
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="{ name: 'meu-diario' }" :color="'white'">
              <v-list-item-action>
                <v-icon>mdi-book</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Meu Diário</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>

          <template #append>
            <div class="pa-2">
              <v-btn block color="error" @click="logout()">
                Sair
              </v-btn>
            </div>
          </template>
        </v-navigation-drawer>

        <v-app-bar :clipped-left="primaryDrawer.clipped" app>
          <v-app-bar-nav-icon
            @click.stop="primaryDrawer.model = !primaryDrawer.model"
          />
          <v-toolbar-title>Querido Diário</v-toolbar-title>
        </v-app-bar>

        <v-main>
          <v-container fluid>
            <router-view />
          </v-container>
        </v-main>

        <v-footer :inset="footer.inset" app>
          <span class="px-4"><strong>Querido Diário</strong> &copy;
            {{ new Date().getFullYear() }}</span>
        </v-footer>
      </v-app>
    </v-app>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    primaryDrawer: {
      clipped: true,
    },
    footer: {
      inset: true,
    },
  }),
  computed: {
    ...mapGetters(["getAuth"]),
  },
  methods: {
    ...mapActions([ 'logout' ])
  }
};
</script>
