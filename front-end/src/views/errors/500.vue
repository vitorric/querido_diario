<template>
  <error-layout>
    <v-card class="p-t-25 p-r-10 p-l-10">
      <v-flex
        xs12
        class="text-center m-t-10 m-b-20"
      >
        <h2 class="uppercase f-size-30">
          Erro 500
        </h2>
      </v-flex>
      <v-flex
        xs12
        class="m-b-20 f-bold text-center f-size-16"
      >
        <span class="w-100">Ops, ocorreu algum erro</span>
      </v-flex>
      <v-flex
        xs12
        class="m-b-20 text-center f-size-16 f-bold"
      >
        <v-btn
          color="error"
          class="uppercase"
          depressed
          @click="$router.go(-1)"
        >
          Voltar
        </v-btn>
      </v-flex>
    </v-card>
  </error-layout>
</template>

<script>
export default {
  name: 'Error500'
}
</script>