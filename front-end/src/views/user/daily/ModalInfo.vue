<template>
  <v-dialog v-model="model" width="500" persistent>
    <v-card v-if="!daily">
      <v-card-title class="pb-0 grey lighten-1">
        Tente novamente!
      </v-card-title>
      <v-card-text class="text--primary m-t-10">
        <h1>Informações não encontrada!</h1>
      </v-card-text>
      <v-card-actions>
        <v-btn color="error" text @click="model = false">
          Fechar
        </v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-if="daily" min-height="500">
      <v-card-title class="pb-0 grey lighten-1">
        <strong>Data: </strong>
        <small>{{ formatISODate(daily.createdAt) }}
          {{ formatISOTime(daily.createdAt) }}</small>
      </v-card-title>

      <v-card-text class="text--primary m-t-10">
        <v-textarea
          v-model="daily.description"
          label="Alterar descrição do seu dia"
          class="w100 textarea-custom"
          clearable
          clear-icon="mdi-close-circle"
          counter="500"
          :rules="[(v) => v.length <= 500 || 'Máximo 500 caracteres']"
        />
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-btn color="error" text @click="model = false">
          Fechar
        </v-btn>
        <v-spacer />
        <v-btn color="success" text @click="updateDaily()">
          Alterar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { getDaily, updateDaily } from "@/services/user";
import { formatISODate, formatISOTime } from "@/utils/filters";
import Notify from "@/utils/notify";

export default {
  props: {
    dailyId: {
      type: String,
      default: null,
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["input", "update-list"],
  data() {
    return {
      model: false,
      daily: null,
    };
  },
  watch: {
    value(val) {
      this.model = val;

      if (this.model) {
        this.getDaily();
      }
    },
    model(val) {
      this.$emit("input", val);
    },
  },
  async mounted() {
    this.model = this.value;
  },
  methods: {
    formatISODate,
    formatISOTime,
    async getDaily() {
      if (this.dailyId != "") {
        const { data } = await getDaily(this.dailyId);

        if (data.success && data.payload) {
          this.daily = { ...data.payload };
          return;
        }

        this.daily = null;
      }
    },
    async updateDaily() {
      if (!this.daily.description || this.daily.description === "") {
        Notify.warning("Preencha a descrição do seu dia!");
        return;
      }

      if (this.daily.description.length > 500) {
        Notify.warning("Tamanho máximo da descrição ultrapassado!");
        return;
      }

      try {
        const { data } = await updateDaily({
          description: this.daily.description,
          dailyId: this.daily._id,
        });

        if (data.success) {
          Notify.success("Registro alterado com sucesso!");
          this.$emit("update-list");
          this.model = false;
          return;
        }

        Notify.error(data.msg);
      } catch (err) {
        console.log(err);
        Notify.error("Error ao salvar o registro");
      }
    },
  },
};
</script>