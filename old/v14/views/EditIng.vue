<template>
  <div class="add-smoothie container">
    <form @submit.prevent="updateDocument">
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
        <button class="btn pink">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
import {doc, collection, getDocs, onSnapshot, addDoc, query, orderBy, deleteDoc, setDoc} from "firebase/firestore";
import db from '@/firebase/init'

export default {
  name: 'EditIng',
  data () {
    return {
      pass: this.$route.params.item_slug,
      name: this.name,
      address: this.address,
      smoothie: null
    }
  },
  methods: {
    async updateDocument() {
      let itemRef = doc(db, "hotels", this.pass);
      setDoc(itemRef, {
        name: this.name,
        address: this.address,
        timestamp: new Date()
      }).then(()=> {
        this.$router.push({ name: 'Index' })
      }).catch(err => console.error(err))
      this.name = null;
      this.address = null;
    },
  },
  created(){

  }
}
</script>

<style>
.add-smoothie{
  padding: 10px;
}
</style>
