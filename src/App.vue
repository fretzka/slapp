<template>
  <div class="container">
   <div class="menu--leftside">
      <ul class="menu">
        <li class="title">Slapp</li>
         <router-link tag="li" class="menu--item" v-for="route in this.$router.options.routes" :to="route.path">
            <i :class="route.icon"></i>
            <span>{{ route.name }}</span>
         </router-link>
         <li><i class="fa fa-battery-three-quarters fa-2x"></i></li>
      </ul>
   </div>
   <div class="content--tidy">
      <router-view name="tidy"></router-view>
   </div>
   <div class="content--main">
      <router-view name="default"></router-view>
   </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.container {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 200px 300px auto;
      grid-template-columns: 200px 300px auto;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100vh;
}

.menu--leftside {
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   background: #34495e;
}

.content--tidy {
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   padding: 20px 0 20px 20px;
   background-color: #34495e;
   overflow-y: auto;
   border-right: 1px solid #fff;
}

.content--main {
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   padding: 20px 40px 20px 40px;
   overflow-y: auto;
   background-color: #b3cde0;
}

.router-link-exact-active {
  color: rgba(255,255,255, 1) !important;
  background-color: rgba(255,255,255, 0.1) !important;
  border: 1px solid #fff;
}

.menu {
  position: fixed;
  height: 100%;
  width: 80px;
  background: #2c3e50;
  transition:width 1s;
  overflow: hidden;
  font-family: 'Michroma', sans-serif;
  z-index: 99;
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu:hover {
  width: 200px;
}
.menu:hover .title {
  opacity: 1;
  transition: all 1.5s linear;
}
.menu--item span {
  position: absolute;
  left:80px;
  top:20px;
  transition:color 1s;
  color:rgba(255,255,255,0);
  line-height: 2;
}

.menu:hover .menu--item span {
 color:rgba(255,255,255,1);
}

.menu--item {
  position: relative;
  padding: 20px;
  color: rgba(255,255,255, 0.5);
  transition:border .5s, background .2s, background 2s;
}

.menu--item:hover {
  background: #34495e;
  cursor: pointer;
}
.title {
  opacity: 0;
  padding: 20px 0;
  margin: auto;
  text-align: center;
  font-family: 'Damion', cursive;
  font-size: 40px;
  text-shadow: 3px 3px 0px #2c3e50;
  color: #fff;
  transition: all 1.5s;
}

.menu--leftside li:nth-child(2){
   border-left:5px solid #16a085;
   color: rgba(255,255,255, 0.7);
}

.menu--leftside li:nth-child(2):hover{
  border-left:20px solid #16a085;
  color: rgba(255,255,255, 1);
}

.menu--leftside li:nth-child(3){
 border-left:5px solid #2980b9;
 color: rgba(255,255,255, 0.5);
}

.menu--leftside li:nth-child(3):hover {
 border-left:20px solid #2980b9;
 color: rgba(255,255,255, 1);
}

.menu--leftside li:nth-child(4) {
  border-left:5px solid #8e44ad;
  color: rgba(255,255,255, 0.5);
}

.menu--leftside li:nth-child(4):hover {
  border-left:20px solid #8e44ad;
  color: rgba(255,255,255, 1);
}

.menu--leftside li:nth-child(5) {
  border-left:5px solid #e67e22;
}

.menu--leftside li:nth-child(5):hover {
  border-left:20px solid #e67e22;
}

.menu--leftside li:nth-child(6) {
 border-left:5px solid #e74c3c;
}

.menu--leftside li:nth-child(6):hover {
 border-left:20px solid #e74c3c;
}

.menu--leftside li:last-child{
   position: absolute;
   bottom: 0;
   padding: 20px;
   text-align: center;
   color: rgba(255,255,255, 0.8);
}
</style>
