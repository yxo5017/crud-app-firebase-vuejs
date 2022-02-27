<template>
  <div class="add-smoothie container">
    <h2>Shopping List</h2>
    <form @submit.prevent="addIng">
      <div class="field title">
        <label for="title">Hotel Name</label>
        <input type="text" name="name" v-model="name">
      </div>
      <div class="field title">
        <label for="title">Hotel Address</label>
        <input type="text" name="address" v-model="address">
      </div>
      <div class="field center-align">
        <button class="btn pink">Add</button>
      </div>
    </form>
    <table>
      <thead>
       <tr>
         <th>No.</th>
         <th>Name</th>
         <th>Address</th>
       </tr>
     </thead>
      <tbody v-for="(hotel, index) in this.hotels" :key="hotel[2]">
        <td>{{ index + 1 }}</td>
        <td>{{ hotel[0] }}</td>
        <td>{{ hotel[1] }}</td>
        <i class="material-icons edit" @click="editIng(hotel[2])">edit</i>
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
        console.log(request)
    },
    editIng(id){
      const itemRef = doc(db, "hotels", id);
      let name =  prompt("What would you like to update it to?")
      setDoc(itemRef, {
        name: name,
        timestamp: new Date()
      })
    },
    addIng(){
      if(this.address){
        this.hotels.push([this.name, this.address])
        addDoc(collection(db, "hotels"), {
          name: this.name,
          address: this.address,
          timestamp: new Date()
        }).catch(err => console.error(err))
        this.name = null;
        this.address = null;
      }
    },
    async getHotels(db) {
      const querySnapshot = await getDocs(collection(db, "hotels"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
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
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
</style>
