<template>
  <div class="add-smoothie container">
    <br>
    <table>
      <thead>
       <tr>
         <th>No.</th>
         <th>Item</th>
         <th>Note</th>
       </tr>
     </thead>
      <tbody v-for="(hotel, index) in this.hotels" :key="hotel[2]">
        <td>{{ index + 1 }}</td>
        <td>{{ hotel[0] }}</td>
        <td>{{ hotel[1] }}</td>
        <router-link :to="{ name: 'EditIng', params: {item_slug: hotel[2]}}">
          <i class="material-icons edit">edit</i>
        </router-link>
        <i class="material-icons delete" @click="deleteIng(hotel[2])">delete</i>
      </tbody>
    </table>
  </div>
</template>

<script src="https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.1.0/firebase-firestore.js"></script>
<script>
import {doc, collection, getDocs, onSnapshot, addDoc, query, orderBy, deleteDoc, setDoc} from "firebase/firestore";
import db from '@/firebase/init'


export default {
  name: 'Index',
  data () {
    return {
      hotels: [],
      name: null,
      address: null,
      hotel: {name: 'name3', address: 'address3'}
    }
  },
  methods: {
    async deleteIng(id){
        let request = await deleteDoc(doc(db, "hotels", id));
        this.hotels = this.hotels.filter(hotel => {
          return hotel[2] != id
        })
    },
    editIng(id){
      const itemRef = doc(db, "hotels", id);
      let name =  prompt("What would you like to update it to?")
      setDoc(itemRef, {
        name: name,
        timestamp: new Date()
      })
    },
    async getHotels(db) {
      const querySnapshot = await getDocs(collection(db, "hotels"));
      querySnapshot.forEach((doc) => {
        this.hotels.push([doc.data().name, doc.data().address, doc.id]);
      });
    }
  },
  created(){
    this.getHotels(db);

  }
}
</script>

<style>
.add-smoothie{
  padding: 20px;
  max-width: 500px;
}
</style>
