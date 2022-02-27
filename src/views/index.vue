<template>
  <div class="add-item container">
    <br>
    <table>
      <thead>
       <tr>
         <th>No.</th>
         <th>Item</th>
         <th>Note</th>
       </tr>
     </thead>
      <tbody v-for="(item, index) in this.items" :key="item[2]">
        <td>{{ index + 1 }}</td>
        <td>{{ item[0] }}</td>
        <td>{{ item[1] }}</td>
        <router-link :to="{ name: 'EditItem', params: {item_slug: item[2], item: item[0], note: item[1]}}">
          <i class="material-icons edit">edit</i>
        </router-link>
        <i class="material-icons delete" @click="deleteItem(item[2])">delete</i>
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
      items: [],
      item: null,
      note: null
    }
  },
  methods: {
    async deleteItem(id){
        let request = await deleteDoc(doc(db, "shoppingLists", id));
        this.items = this.items.filter(item => {
          return item[2] != id
        })
    },
    async getItems(db) {
      const querySnapshot = await getDocs(collection(db, "shoppingLists"));
      querySnapshot.forEach((doc) => {
        this.items.push([doc.data().item, doc.data().note, doc.id]);
      });
    }
  },
  created(){
    this.getItems(db);

  }
}
</script>

<style>
.add-item{
  padding: 20px;
  max-width: 500px;
}
</style>
