<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button :default-href="pageDefaultBackLink"></ion-back-button>
        </ion-buttons>

        <ion-title>{{ pageTitle }}</ion-title>

        <ion-buttons slot="end">
          <slot name="actions-right"></slot>
        </ion-buttons>

      </ion-toolbar>

    </ion-header>

    <ion-content class="ion-padding">
      <slot />
    </ion-content>

  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonBackButton } from '@ionic/vue';

export default {
  props: ['pageTitle', 'pageDefaultBackLink'],
  components : {
    IonPage,
    IonHeader,
    IonTitle,
    IonContent,
    IonToolbar,
    IonBackButton
  }
}
</script>
