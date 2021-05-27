<template>
  <header class="header" :class="breadcrumbs.length > 1 ? 'breadcrumb-space':''">
    <v-layout row justify-space-between>
      <h1>{{ title }}</h1>
      <v-btn v-if="breadcrumbs.length > 1" @click="$router.go(-1)">
        <i class="fa fa-caret-left" aria-hidden="true" /> Voltar
      </v-btn>
    </v-layout>
    <div class="breadcrumb-list">
      <span v-for="(item, i) in breadcrumbs" :key="item" :class="`breadcrumb-item ${isCurrentPage(i) ? 'cursor-pointer' : 'actived'}`" @click="goBack(i + 1)">{{ item }}</span>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    breadcrumbs: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    isCurrentPage (i) {
      return i !== (this.breadcrumbs.length - 1)
    },
    goBack (i) {
      if (i !== this.breadcrumbs.length) {
        this.$router.go(i - this.breadcrumbs.length)
      }
    }
  }
}
</script>
