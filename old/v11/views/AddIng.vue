<template>
  <div class="add-smoothie container">
    <form @submit.prevent="addIng">
      <br>
      <div class="field title">
        <label for="title">Item</label>
        <input type="text" name="name" v-model="name">
      </div>
      <div class="field title">
        <label for="title">Note</label>
        <input type="text" name="address" v-model="address">
      </div>
      <div class="field center-align">
        <button class="btn pink">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import {doc, collection, getDocs, onSnapshot, addDoc, query, orderBy, deleteDoc, setDoc} from "firebase/firestore";
import db from '@/firebase/init'

export default {
  name: 'AddIng',
  data () {
    return {
      hotels: [],
      name: null,
      address: null,
    }
  },
  methods: {
    addIng(){
      if(this.address){
        this.hotels.push([this.name, this.address])
        addDoc(collection(db, "hotels"), {
          name: this.name,
          address: this.address,
          timestamp: new Date()
        }).then(()=> {
          this.$router.push({ name: 'hotel' })
        }).catch(err => console.error(err))
        this.name = null;
        this.address = null;
      }
    }
  }
}
</script>

<style>
.add-smoothie{
  padding: 10px;
}
</style>
