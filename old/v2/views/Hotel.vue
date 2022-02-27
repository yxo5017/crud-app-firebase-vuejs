<template>
  <p>{{ this.hotels }}</p>
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
      hotels: []
    }
  },
  methods: {

  },
  created(){
    let hotel = [];
    async function getHotels(db) {
      const querySnapshot = await getDocs(collection(db, "hotels"));
      querySnapshot.forEach((doc) => {
        hotel.push([doc.data().name, doc.data().address]);
      });

    }
    this.hotels.push(hotel)
    console.log(getHotels(db))
  }
}
</script>
