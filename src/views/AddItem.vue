<template>
  <div class="add-item container">
    <form @submit.prevent="addItem">
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
        <button class="btn pink">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
import {doc, collection, getDocs, onSnapshot, addDoc, query, orderBy, deleteDoc, setDoc} from "firebase/firestore";
import db from '@/firebase/init'

export default {
  name: 'AddItem',
  data () {
    return {
      items: [],
      item: null,
      note: null,
    }
  },
  methods: {
    addItem(){
      if(this.item && this.note){
        this.items.push([this.item, this.note])
        addDoc(collection(db, "shoppingLists"), {
          item: this.item,
          note: this.note,
          timestamp: new Date()
        }).then(()=> {
          this.$router.push({ name: 'Index' })
        }).catch(err => console.error(err))
        this.item = null;
        this.note = null;
      }
    }
  }
}
</script>

<style>
.add-item{
  padding: 10px;
}
</style>
