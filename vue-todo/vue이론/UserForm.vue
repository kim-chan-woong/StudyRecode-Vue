<template>
  <form v-on:submit.prevent="submitForm">
    <div>
      <label for="username">id: </label>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button> 
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm: function () {
      // form의 기본 동작은 submit시 페이지가 새로고침 되는데 이를 막아줌
      // event.preventDefault();
      // 뷰에서 다르게 가능 위 소스 참조
      // console.log(this.username, this.password);
      var url = "https://jsonplaceholder.typicode.com/users";
      var data = {
        username: this.username,
        password: this.password
      }
      // axios('url', '데이터').then().catch()
      axios.post(url, data)
      .then(function(response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style>

</style>