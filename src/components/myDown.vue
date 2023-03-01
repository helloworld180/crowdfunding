<template>
    <div id="myDown">
      <!-- <div id="a">
        <input type="text" v-model="content" id="search" placeholder="搜索项目" @keyup.enter="search">
      </div> -->
      
      <div id="list">
        <ul>
          <li><router-link to="/see">查看项目</router-link></li>
        <li><router-link to="/my">我的项目</router-link></li>
        <li><router-link to="/search">搜索项目</router-link></li>
        </ul>
        
      </div>

    </div>
  </template>
  
  <script>

  
  
  export default {
    name: 'myDown',
    data(){
      return{
        content:''
      }
    },
    methods:{
      
    }
  }
  </script>
  
  <style scoped>
  #a{
    margin: auto;
    width: 400px;
    height: 20px;
  }
    #search{
      background-color: #D3D3D3;
      width: 400px;
      height: 20px;
      
      border-radius: 30px;
    }
    #list{
      margin: auto;
    }
    li{
    list-style: none;
    float: left;
    margin-left: 270px;
    background-color: #D3D3D3;
    cursor: pointer;
    width: 150px;
    height: 30px;
    border-radius: 10px;
    text-align: center;
    font-size: 20px;
}


  </style>
  