<template>
  <layout page-title="Pronos Page">
    <template v-slot:actions-right>
      <ion-button router-link="/tabs/pronos/add">
        <ion-icon slot="icon-only" :icon="add"></ion-icon>
      </ion-button>
    </template>
    <pronos-list :pronos="pronos"></pronos-list>
  </layout>
</template>

<script>
import PronosList from "../components/pronos/PronosList"
import { IonButton, IonIcon } from "@ionic/vue"
import { add } from "ionicons/icons"
export default {
  data(){
    return {
      add
    }
  },
  components:{
    PronosList,
    IonButton,
    IonIcon
  },
  computed:{
    pronos(){
      return this.$store.getters.pronos;
    }
  }
}
</script>
