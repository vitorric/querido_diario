<template>
  <section wrap class="w-100 p-l-5 p-r-5 p-t-10">
    <v-layout align-center fill-height wrap>
      <v-flex xs12 sm12 md12>
        <v-btn color="primary" @click="adicionarForm()">
          ADICIONAR
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-flex>
      
      <v-card flex class="m-t-15 m-b-15 w100">
        <v-flex>
          <div v-if="pagination.totalItems" class="text-xs-center pt-2">
            <v-pagination 
              v-model="page" 
              :length="Math.ceil(pagination.totalItems / pagination.rowsPerPage)"
              :next-icon="nextIcon"
              :prev-icon="prevIcon"
            />
          </div>
          <v-data-table :headers="headers" :items="forms" :loading="isLoading" hide-default-footer no-data-text="Nenhuma perfil encontrado">
            <template #items="props">
              <td>{{ props.item.name }}</td>
              <td class="text-center">
                {{ props.item.segment }}
              </td>
              <td class="text-center">
                a
              </td>
              <td class="text-center">
                b
              </td>
              <td>
                <v-layout justify-center>
                  <v-btn title="Preview de atividade" class="m-5" small icon color="info" @click.prevent="goToCodeblockPreview(props.item)">
                    <span class="fa fa-eye white--text" />
                  </v-btn>
                  <v-btn title="Baixar guia" class="m-5" small icon color="success" :loading="downloading === props.item.guide" @click.prevent="downloadGuide(props.item.guide)">
                    <span class="fa fa-file-text white--text" />
                  </v-btn>
                  <v-btn title="Editar atividade" class="m-5" small icon color="warning" @click.prevent="goToCodeblockEdit(props.item.astrocoderKey)">
                    <span class="fa fa-pencil white--text" />
                  </v-btn>
                  <v-btn title="Remover atividade" class="m-5" small icon color="error" @click.prevent="askToDelete(props.item.astrocoderKey)">
                    <span class="fa fa-times" />
                  </v-btn>
                </v-layout>
              </td>
            </template>
          </v-data-table>
          <div v-if="pagination.totalItems" class="text-xs-center pt-2">
            <v-pagination 
              v-model="page" 
              :length="Math.ceil(pagination.totalItems / pagination.rowsPerPage)"
              :next-icon="nextIcon"
              :prev-icon="prevIcon" 
            />
          </div>
        </v-flex>
      </v-card>
    </v-layout>
  </section>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: 'Nome', align: 'start', sortable: true, value: 'name' },
        { text: 'Data', align: 'center', sortable: true, value: 'data' },
        { text: 'Qtde.', align: 'center', sortable: true, value: 'qtde' },
        { text: 'Ações', align: 'center', value: 'actions', sortable: false }
      ],
      forms: [],
      pagination: {
        descending: true,
        rowsPerPage: 20,
        sortBy: 'updatedAt',
        totalItems: 0
      },
      isLoading: false
    }
  },
  methods: {
    adicionarForm() {
      this.$router.push({name: `${this.$route.name}-criar` })
    }
  },
}
</script>