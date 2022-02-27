<template>
  <div class="add-smoothie container">
  <p>{{ this.hotels }}</p>
  <table>
    <thead>
     <tr>
       <th>No.</th>
       <th>Name</th>
       <th>id</th>
     </tr>
   </thead>
   <tbody>
     <tr v-for="(hotel, index) in this.hotels" :key="i">
       <th scope="row">{{ index }}</th>
       <td>{{ hotel[0] }}</td>
       <td>{{ hotel[1] }}</td>
       <td>{{ hotel[2] }}</td>
       <td><button class="btn pink" @click="editIng">Add Hotel</button>
       <button class="btn pink" @click="deleteIng">Delete Hotel</button></td>
    </tr>
   </tbody>
  </table>
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
    <br>
    <div class="field center-align">
      <button class="btn pink" @click="editIng">Edit Hotel</button>
    </div>
    <br>
    <div class="field center-align">
      <button class="btn pink" @click="deleteIng">Delete Hotel</button>
    </div>
  </form>
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
      another: null,
      hotel: {name: 'name3', address: 'address3'}
    }
  },
  methods: {
    async deleteIng(){
        let request = await deleteDoc(doc(db, "hotels", "9BpAIZsUtTbxuySZS3Cw"));
        console.log(request)
    },
    editIng(){
      if(this.another){
        const itemRef = doc(db, "hotels", "9BpAIZsUtTbxuySZS3Cw");
        let name =  prompt("What would you like to update it to?")
        setDoc(itemRef, {
          name: name,
          timestamp: new Date()
        })
      }
    },
    addIng(){
      if(this.another){
        this.hotels.push([this.name, this.another])
        this.another = null
        addDoc(collection(db, "hotels"), {
          name: "test",
          timestamp: new Date()
        }).catch(err => console.error(err))
      }
    },
    async getHotels(db) {
      const querySnapshot = await getDocs(collection(db, "hotels"));
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
        this.hotels.push([doc.data().name, doc.data().address, doc.id]);
      });
      //質問：[]で二重が込みになってしまうので一重にしたい
    }
  },
  created(){
    this.getHotels(db);

  }
}
</script>
