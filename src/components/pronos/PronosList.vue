<template>
  <ion-list>
    <todo-list-item v-for="prono in pronos" v-bind:key="prono.id" :prono="prono"></todo-list-item>
  </ion-list>

</template>

<script>
import { IonList } from '@ionic/vue';
import TodoListItem from "./PronosListItem";

export default {
  props: ["pronos"],
  components : {
    IonList,
    TodoListItem
  }
}

</script>
