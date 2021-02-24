<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Page d'accueil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <h2>Ceci est la page d'accueil </h2>
    </ion-content>

  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from "@ionic/vue"
export default {
  components:{
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent
  }
}
</script>
