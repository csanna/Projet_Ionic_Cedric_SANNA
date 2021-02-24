<template>
  <ion-img :src="img" :alt="name"></ion-img>
  <h2 class="ion-text-center">{{ name }}</h2>
  <p>{{ analyse }}</p>
</template>

<script>
import { IonImg } from "@ionic/vue"

export default {
  components:{
    IonImg
  },
  props:["name", "description", "img", "analyse"]
}
</script>
