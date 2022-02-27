<template>
  <div class="add-smoothie container">
  <p>{{ this.hotels }}</p>
  <form @submit.prevent="addIng">
    <div class="field title">
      <label for="title">Hotel Name</label>
      <input type="text" name="name" v-model="name">
    </div>
    <div class="field title">
      <label for="title">Hotel Address</label>
      <input type="text" name="address" v-model="another">
    </div>
    <div class="field center-align">
      <button class="btn pink">Add Hotel</button>
    </div>
  </form>
</div>
</template>

<script src="https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js"></script>
<script>
import {doc, collection, onSnapshot, addDoc, query, orderBy, deleteDoc, setDoc} from "firebase/firestore";
import db from '@/firebase/init';

export default {
  name: 'Index',
  data () {
    return {
      hotels: [],
      name: null,
      another: null,
      hotel: {name: 'name3', address: 'address3'}
    }
  },
  methods: {
    AddSmoothie(){

    },
    async addIng(){
      if(this.another){
        this.hotels.push([this.name, this.another])
        this.another = null
        addDoc(collection(db, "hotels"), {
          name: this.hotel
        }).catch(err => console.error(err))
      }
    }
  },
  created(){

  }
}
</script>
