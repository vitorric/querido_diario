<template>
  <section>
    <h1 class="w100 text-center">
      BEM VINDO {{ getAuth.user.name }}, AO MEU <b>QUERIDO DIÁRIO!</b>
    </h1>
    <h2 class="w100 text-center">
      Crie anotações ou descreva sobre como foi o seu dia!
    </h2>
  </section>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAuth"]),
  },
};
</script>