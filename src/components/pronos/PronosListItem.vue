<template>
  <ion-item :router-link="`/tabs/pronos/${prono.id}`">

    <ion-thumbnail slot="start">
      <ion-img :src="prono.img" :alt="prono.name"></ion-img>
    </ion-thumbnail>

    <ion-label>{{ prono.name }}</ion-label>

  </ion-item>

</template>

<script>
import { IonItem, IonImg, IonThumbnail, IonLabel } from '@ionic/vue';

export default {
  props : ["prono"],
  components : {
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel
  }
}

</script>
