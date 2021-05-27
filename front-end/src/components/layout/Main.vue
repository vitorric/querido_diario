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
          <div>
            <v-list-item link :to="{ name: 'home' }" :color="'white'">
              <v-list-item-action>
                <v-icon>mdi-home</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="{ name: 'perfil' }" :color="'white'">
              <v-list-item-action>
                <v-icon>mdi-account</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Perfis</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="{ name: 'formulario' }" :color="'white'">
              <v-list-item-action>
                <v-icon>mdi-form-select</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Formulários</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item link :to="{ name: 'trilha' }" :color="'white'">
              <v-list-item-action>
                <v-icon>mdi-stairs-up</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Trilhas</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </div>
        </v-navigation-drawer>
  
        <v-app-bar
          :clipped-left="primaryDrawer.clipped"
          app
        >
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
  
        <v-footer
          :inset="footer.inset"
          app
        >
          <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
      </v-app>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'Main',

  data: () => ({
    primaryDrawer: {
      clipped: true,
    },
    footer: {
      inset: true,
    },
  })
}
</script>
