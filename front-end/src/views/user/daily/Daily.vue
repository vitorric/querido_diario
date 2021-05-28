<template>
  <section>
    <v-layout fill-height column class="p-30">
      <v-row>
        <h2 class="w100 text-center">
          Meu Diário
        </h2>
      </v-row>
      <v-row>
        <v-textarea
          v-model="newDaily.description"
          label="Descreva como foi seu dia"
          class="w-100"
          clearable
          clear-icon="mdi-close-circle"
          counter="500"
          :rules="[(v) => v.length <= 500 || 'Máximo 500 caracteres']"
        />
      </v-row>
      <v-row>
        <v-btn color="primary" class="margin-auto" @click="createDaily()">
          ADICIONAR
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-row>

      <v-row class="m-t-25">
        <div v-if="isLoading" class="w100 text-center">
          <h1>Carregando...</h1>
        </div>
        <div v-if="dailies.length === 0 && !isLoading" class="w100 text-center">
          <h1>Nenhum registro encontrado.</h1>
        </div>
        <div v-if="dailies.length > 0 && !isLoading" class="w100">
          <div v-if="pagination.totalItems" class="text-xs-center pt-2">
            <v-pagination
              v-model="pagination.page"
              :length="
                Math.ceil(pagination.totalItems / pagination.rowsPerPage)
              "
              circle
            />
          </div>

          <v-row>
            <v-col
              v-for="daily in dailies"
              :key="daily._id"
              cols="12"
              xs="12"
              sm="4"
            >
              <v-card class="mx-auto" width="400" height="180">
                <v-card-title class="pb-0 grey lighten-1">
                  <strong>Data: </strong>
                  <small>{{ formatISODate(daily.createdAt) }}
                    {{ formatISOTime(daily.createdAt) }}</small>
                </v-card-title>

                <v-card-text
                  class="text--primary m-t-10 cursor-pointer"
                  @click="openDailyInfo(daily._id)"
                >
                  <div>
                    {{
                      daily.description.length > 140
                        ? daily.description.substring(0, 140 - 3) + "..."
                        : daily.description
                    }}
                  </div>
                </v-card-text>

                <v-card-actions class="div-btn-bottom">
                  <v-btn color="error" text @click="deleteDaily(daily._id)">
                    Excluir
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>

          <div v-if="pagination.totalItems" class="text-xs-center pt-2">
            <v-pagination
              v-model="pagination.page"
              :length="
                Math.ceil(pagination.totalItems / pagination.rowsPerPage)
              "
              circle
            />
          </div>
        </div>
      </v-row>
    </v-layout>
    <ModalInfoDaily v-model="modalDailyInfo" :daily-id="dailyIdSelected" @update-list="listDaily" />
  </section>
</template>

<script>
import {
  createDaily,
  listDaily,
  deleteDaily,
} from "@/services/user";
import Notify from "@/utils/notify";
import ModalInfoDaily from "./ModalInfo";
import { formatISODate, formatISOTime } from "@/utils/filters";

export default {
  components: { ModalInfoDaily },
  data() {
    return {
      newDaily: {
        description: "",
      },
      dailies: [],
      pagination: {
        rowsPerPage: 9,
        page: 1,
        totalItems: 0,
      },
      isLoading: false,
      dailyIdSelected: null,
      modalDailyInfo: false,
    };
  },
  mounted() {
    this.listDaily();
  },
  methods: {
    formatISODate,
    formatISOTime,
    async createDaily() {
      if (!this.newDaily.description || this.newDaily.description === "") {
        Notify.warning("Preencha a descrição do seu dia!");
        return;
      }

      if (this.newDaily.description.length > 500) {
        Notify.warning("Tamanho máximo da descrição ultrapassado!");
        return;
      }

      try {
        const { data } = await createDaily({
          description: this.newDaily.description,
        });

        if (data.success) {
          Notify.success("Registro criado com sucesso!");
          this.newDaily.description = "";
          this.listDaily();
          return;
        }

        Notify.error(data.msg);
      } catch (err) {
        console.log(err);
        Notify.error("Error ao salvar o registro");
      }
    },
    async listDaily() {
      const { data } = await listDaily(this.pagination);

      if (data.success && data.payload.dailies) {
        this.dailies = [...data.payload.dailies];
        this.pagination.totalItems = data.payload.metadata.total;
        return;
      }

      this.dailies = [];
      this.pagination.totalItems = 0;
    },
    deleteDaily(dailyId) {
      Notify.confirm("Você tem certeza que deseja excluir este registro?").then(
        (v) => {
          if (v.isConfirmed) {
            deleteDaily(dailyId).then(({ data }) => {
              try {
                if (data.success && data.payload) {
                  Notify.success("Registro deletado com sucesso!");
                  this.listDaily();
                  return;
                }

                Notify.error(data.msg);
              } catch (err) {
                console.log(err);
                Notify.error("Error ao deletar o registro");
              }
            });
          }
        }
      );
    },
    openDailyInfo(dailyId) {
      this.dailyIdSelected = dailyId;
      this.modalDailyInfo = true;
    },
  },
};
</script>