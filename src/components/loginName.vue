<template>
  <div class="loginName">
     <div id="login">
        <ul>
            <li style="margin-left: 120px;">众筹系统登录界面</li>
            <label>身份：</label>
            <select v-model="type" style="height: 25px; width: 100px; font-size: 18px;">
              <option>用户</option>
              <option>管理员</option>
            </select>
            <li>用户名：<input type="text" id="username" v-model="username" style="height: 23px; width: 250px;"></li>
            <li>密码：<input type="text" id="password" v-model="password" style="height: 23px; width: 250px;"></li>
            <!-- <li><router-link to="/register" style="margin-left: 300px; font-size: 15px;">新用户？点击注册</router-link></li> -->
             <li style="margin-left: 300px; font-size: 15px;" @click="toRegister()" id="register">新用户？点击注册</li>
            <li><button id="loginBtn" @click="loginIn">登录</button></li>
        </ul>

    </div>

    <!-- <hr>
    
    <div>
      <p>{{ username }}</p>
      <p>{{ password }}</p>
    </div>
     -->
  </div>
 
</template>

<script>
import axios from 'axios'

export default {
  name: 'loginName',
  data(){
    return{
      username:"",
      password:"",
    }
  },
  methods: {

    //
    toRegister(){
      this.$router.push(
        {
          path:'/register',
        }
      )
    },
    loginIn(){
      //让type的值变成user或admin
      if(this.type === "用户"){
        this.type = "user";
      }else{
        this.type = "admin";
      }
      console.log(this.type)
      console.log('im here')

      //请求url和接受后端数据
      axios.post('http://127.0.0.1:5000/user/login',{type:this.type,username:this.username,password:this.password}).then((response) => {
        console.log(response);
        if(response.data.code === 200){
          alert(response.data.message);

        // this.$router.push({path:'/home/:id'})

        }else{
          alert(response.data.message)
        }
      
      });

      // if(this.password === '123'){
      //   this.$router.push({path:'/mydown'})
      // }

     }

     //登录成功后，根据接受的id转到Home页面
     
    
  }
  
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loginName{
      background-color: #dcf3ff;
      margin-top: 200px;
    }
  #login{
      width: 500px;
      height: 450px;
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
  #loginBtn{
      margin-left: 150px;
      width: 130px;
      height: 60px;
      border-radius: 10px;
      border: 0;
      background-color: #6495ed;
      color: white;
      font-size: 22px;
  }

  #loginBtn:hover{
      background-color: #4a72dd;
      cursor: pointer;
  }
  #register{
    cursor: pointer;
    color: #6495ed;
  }
</style>
