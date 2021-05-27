<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12">
        <v-text-field v-model="titulo" label="Título" />
      </v-col>
      <v-col cols="12" md="12">
        <v-textarea
          v-model="explicacao"
          outlined
          name="explicacao"
          label="Explicação do Resultado"
        />
      </v-col>
      <v-col cols="12" md="12">
        <v-btn color="success" @click="salvar()">
          SALVAR
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {
      titulo: '',
      explicacao: ''
    }
  },
  methods: {
    salvar() {
      const body = {
        titulo: this.titulo
      }
      axios.post(`https://script.google.com/macros/s/AKfycbzKNC7vU4kZoOHXWnwrUTZFC0j2cpHxElVWvcfQ1XoyW33o_DP3/exec`, {
        body
      }).then(response => {
        console.log(response)
      }).catch(e => {
        console.log(e)
      })
    }
  },
}
</script>