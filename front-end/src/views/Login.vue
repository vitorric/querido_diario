<template>
  <v-main>
    <v-container fluid class="container-login">
      <v-row>
        <v-img :src="'https://via.placeholder.com/1920x340'" />
      </v-row>
      <v-row class="p-r-30 p-l-30">
        <v-flex xs12 sm6 md6 col="6">
          <div :color="'white'" class="p-20">
            <p><b>What is Lorem Ipsum?</b></p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md6 col="6">
          <form class="w100" @submit.prevent="acessarSite">
            <v-card class="elevation-12">
              <v-toolbar dark flat>
                <v-toolbar-title class="w-100 text-align-center">
                  Acessar
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-text-field v-if="telaCadastro" v-model="name" label="Nome" placeholder="Nome" name="name"
                              prepend-icon="mdi-account" type="text" required
                              :rules="[v => !!v || 'Campo obrigatório' ]"
                />
                <v-text-field v-model="email" label="Email" placeholder="Email" name="login" prepend-icon="mdi-email"
                              type="text" required
                              :rules="[ v => !!v || 'Campo obrigatório', v => /.+@.+/.test(v) || 'Digite um email válido' ]"
                />
                <v-text-field v-model="password" label="Senha" placeholder="Senha" name="password" prepend-icon="mdi-lock"
                              type="password" required
                              :rules="[ v => !!v || 'Campo obrigatório' ]"
                />
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" class="btn-login" type="submit" :loading="isLoading">
                  {{ telaCadastro ? 'Cadastrar' : 'Acessar' }}
                </v-btn>
              </v-card-actions>
              <v-card-actions v-if="!telaCadastro">
                <span color="primary" class="btn-login" @click="novoCadastro()">Não sou cadastrado</span>
              </v-card-actions>
              <v-card-actions v-if="telaCadastro">
                <span color="primary" class="btn-login" @click="novoCadastro()">Voltar</span>
              </v-card-actions>
            </v-card>
          </form>
        </v-flex>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>

import { mapActions } from 'vuex'
import { getMD5 } from '@/utils'
import { loginUser, createUser } from '@/services/auth'
import Notify from '@/utils/notify'

export default {
  data() {
    return {
      isLoading: false,
      name: '',
      whatsapp: '',
      email: '',
      password: '',
      telaCadastro: false,
      error: null
    }
  },
  methods: {
    ...mapActions(['setAuth']),
    login () {
      this.isLoading = true
      let email = this.email.trim()
      loginUser({email, password: getMD5(this.password)})
        .then(({data}) => {
          if (data.sucesso) {
            this.setAuth(data.retorno)
            this.$router.go()
            return true
          }
          if (!data.sucesso) {
            Notify.error('Email e/ou senha inválidos')
            return true
          }
        }).catch(error => {
          if (error && error.response && error.response.status && error.response.status === 401) {
            Notify.error('Email e/ou senha inválidos')
            return true
          }
          console.log(error)
          Notify.error('Não foi possível fazer o login')
        }).then(() => {
          this.isLoading = false
        })
    },
    create () {
      this.isLoading = true
      let email = this.email.trim()
      let name = this.name.trim()
      createUser({email, password: getMD5(this.password), name, hashtag: this.hashtag})
        .then(({data}) => {
          if (data.sucesso) {
            this.setAuth(data.retorno)
            this.$router.go()
            this.isLoading = false
            return true
          }
          if (!data.sucesso) {
            Notify.error(data.retorno.msg)
            return true
          }
        }).catch(error => {
          console.log(error)
          Notify.error('Não foi possível se cadastrar, tente novamente')
        }).then(() => {
          this.isLoading = false
        })
    },
    novoCadastro() {
      this.telaCadastro = !this.telaCadastro
      this.name = ''
      this.email = ''
      this.password = ''
    },
    acessarSite () {
      if (this.telaCadastro) {
        this.create()
        return
      }

      this.login()
    }
  }
}
</script>