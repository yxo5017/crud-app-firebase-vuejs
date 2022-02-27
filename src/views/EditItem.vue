<template>
  <div class="add-item container">
    <form @submit.prevent="updateItem">
      <br>
      <div class="field title">
        <label for="title">Item</label>
        <input type="text" name="item" v-model="item">
      </div>
      <div class="field title">
        <label for="title">Note</label>
        <input type="text" name="note" v-model="note">
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
  name: 'EditItem',
  data () {
    return {
      pass: this.$route.params.item_slug,
      item: this.$route.params.item,
      note: this.$route.params.note
    }
  },
  methods: {
    async updateItem() {
      let itemRef = doc(db, "shoppingLists", this.pass);
      setDoc(itemRef, {
        item: this.item,
        note: this.note,
        timestamp: new Date()
      }).then(()=> {
        this.$router.push({ name: 'Index' })
      }).catch(err => console.error(err))
      this.item = null;
      this.note = null;
    },
  },
  created(){

  }
}
</script>

<style>
.add-item{
  padding: 10px;
}
</style>
