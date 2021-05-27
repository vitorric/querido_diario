<template>
  <v-layout fill-height column class="p-r-15 p-l-15">
    <cs-header :title="$route.meta.header.title" :breadcrumbs="$route.meta.header.breadcrumbs" />
    <router-view />
  </v-layout>
</template>
