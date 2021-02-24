<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Account Page</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <h2>Nom d'utilisateur : {{username}}</h2>
      <ion-button type="submit" expand="full" color="danger">Déconnexion</ion-button>
    </ion-content>

  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/vue"
export default {
  components:{
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton
  }
}
</script>
