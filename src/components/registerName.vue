<template>
  <div class="registerName">
    <div id="register">
        <ul>
            <li style="margin-left: 150px;">注册页面</li>
            <li>用户名：<input type="text" id="username" v-model="username" style="height: 23px; width: 250px;"></li>
            <li>密码：<input type="text" id="password" v-model="password" style="height: 23px; width: 250px;"></li>
            <li><button id="registerBtn" @click="$event => registerIn()">注册</button></li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';



export default {
  name: 'registerName',
  data(){
    return{
      username:"",
      password:"",
    }
  },
  methods:{
    registerIn(){
      axios.post('http://127.0.0.1:5000/user',{username:this.username,password:this.password}).then((response) =>{
        if(response.data.code === 200){
          
          this.$router.push({path:'/login',query:{id:response.data.data.id}})

          console.log(response)
        }else{
          alert(response.data.message)
        }
      })
    }
  }
}
</script>

<style scoped>
  .registerName{
      margin-top: 200px;
    }
  #register{
      width: 500px;
      height: 350px;
      border-radius: 30px;
      margin: auto;
      background-color: aquamarine;

  }
  label{
    font-size: 23px;
    line-height: 70px;
  }
  li{
      list-style: none;
      font-size: 23px;
      line-height: 70px;

  }
  #registerBtn{
      margin-left: 150px;
      width: 130px;
      height: 60px;
      border-radius: 10px;
      border: 0;
      background-color: #6495ed;
      color: white;
      font-size: 22px;
  }

  #registerBtn:hover{
      background-color: #4a72dd;
      cursor: pointer;
  }
  
</style>
