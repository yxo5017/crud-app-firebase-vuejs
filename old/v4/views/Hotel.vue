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

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { doc, setDoc, updateDoc } from "firebase/firestore";
import db from '@/firebase/init'

export default {
  name: 'Index',
  data () {
    return {
      hotels: [],
      name: null,
      another: null
    }
  },
  methods: {
    AddSmoothie(){
      if (this.name){
        this.feedback = null
        db.collection('hotels').add({
          name: this.name,
          address: this.another
        }).then(() => {
          console.log("hello")
        }).catch(err => {
          console.log(err)
        })
      } else {
        console.log('You must enter a smoothie title')
      }
    },
    addIng(){
      if(this.another){
        this.hotels.push([this.name, this.another])
        this.another = null
      }
    },
    async getHotels(db) {
      const querySnapshot = await getDocs(collection(db, "hotels"));
      querySnapshot.forEach((doc) => {
        this.hotels.push([doc.data().name, doc.data().address]);
      });
      //質問：[]で二重が込みになってしまうので一重にしたい
    }
  },
  created(){
    this.getHotels(db);
  }
}
</script>
