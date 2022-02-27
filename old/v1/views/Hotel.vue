<template>
  <p>{{ this.test }}</p>
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
      test: []
    }
  },
  methods: {

  },
  created(){
    let test = [];
    async function getCities(db) {
      const querySnapshot = await getDocs(collection(db, "hotels"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data().name);
        test.push(doc.data().name);
      });
    }
    this.test.push(test)
    console.log(test);
    console.log(getCities(db))
  }
}
</script>
