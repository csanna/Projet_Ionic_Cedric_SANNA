<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon :icon="home"/>
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="pronos" href="/tabs/pronos">
          <ion-icon :icon="list"/>
          <ion-label>Pronos</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="account" href="/tabs/account">
          <ion-icon :icon="personCircle"/>
          <ion-label>Account</ion-label>
        </ion-tab-button>

      </ion-tab-bar>

    </ion-tabs>

  </ion-page>
</template>

<script>
import { IonPage, IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon } from "@ionic/vue"
import { home, list, personCircle } from "ionicons/icons"
export default {
  data() {
    return {
      home,
      list,
      personCircle
    }
  },
  components: {
    IonPage,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonIcon
  }
}
</script>
