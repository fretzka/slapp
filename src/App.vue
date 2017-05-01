<template>
  <div class="container">
   <div class="menu--leftside">
    <!--  <ul class="no-bullets">
         <li class="menu--logo"></li>
         <li class="menu--items" v-for="route in this.$router.options.routes">
           <router-link :to="route.path" class="link--router">
             <i :class="route.icon"></i>
             <div class="link--route">
             | {{ route.name }}
             </div>
           </router-link>
         </li>
      </ul> //-->
      <div class="menu">
        <div class="title">Slapp</div>
        <router-link to="/"><div class="menuItem uno"><i class="fa fa-home fa-2x"></i><span>Hem</span></div></router-link>
        <router-link to="assa"><div class="menuItem dos"><i class="fa fa-assistive-listening-systems fa-2x"></i><span>ASSA</span></div></router-link>
        <div class="menuItem tres"><i class="fa fa-superpowers
 fa-2x"></i><span>Prodib</span></div>
        <div class="menuItem cuatro">A<span>cuatro</span></div>
        <div class="menuItem cinco">P<span>cinco</span></div>
      </div>
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
.no-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu--logo {
   background-image: url('assets/logo.png');
   background-size: 100% 100%;
   background-repeat: no-repeat;
   padding: 0;
   height: 85px;
   background-color: #c0c0c0;
   margin-bottom: 15px;
}

.menu--items {
   display: inline-block;
   padding: 20px 10px;
   width: 100%;
   border-left: 5px solid transparent;
   transition: all 0.5s ease-in-out; /* vendorless fallback */
   -o-transition: all 0.5s ease-in-out; /* opera */
   -ms-transition: all 0.5s ease-in-out; /* IE 10 */
   -moz-transition: all 0.5s ease-in-out; /* Firefox */
   -webkit-transition: all 0.5s ease-in-out; /*safari and chrome */
}
.menu--items .active {
  border-left: 5px solid #c0c0c0;
}
.menu--items:hover {
   transition: all 0.5s ease-in-out;
   -webkit-transition: all 0.5s ease-in-out;
   background: rgba(255,255,254, 0.4);
}
.link--route {
  display: inline-block;
  text-align: left;
  margin-left: 15px;
}
.link--router {
   display: block;
   color: navy;
   font-family: 'Source Sans Pro', serif;
   font-size: 0.9em;
   text-decoration: none;
   text-transform: uppercase;
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
  border-right: 1px solid #fff;
}

.menu:hover {
  width: 200px;
}
.menu:hover .title {
  opacity: 1;
  transition: all 1.5s linear;
}
.menuItem span {
  position: absolute;
  left:80px;
  top:20px;
  transition:color 1s;
  color:rgba(255,255,255,0);
  line-height: 2;
}

.menu:hover .menuItem  span {
 color:rgba(255,255,255,1);
}

.menuItem {
  position: relative;
  padding: 20px;
  transition:border .5s, background .2s;
}

.menuItem:hover {
  background: #34495e;
  cursor: pointer;
}

.uno {
  border-left:5px solid #16a085;
  color: rgba(255,255,255, 0.7);
}

.uno:hover{
  border-left:20px solid #16a085;
  color: rgba(255,255,255, 1);
}

.dos {
 border-left:5px solid #2980b9;
 color: rgba(255,255,255, 0.5);
}

.dos:hover {
 border-left:20px solid #2980b9;
 color: rgba(255,255,255, 1);
}

.tres {
  border-left:5px solid #8e44ad;
  color: rgba(255,255,255, 0.5);
}

.tres:hover {
  border-left:20px solid #8e44ad;
  color: rgba(255,255,255, 1);
}

.cuatro {
  border-left:5px solid #e67e22;
}

.cuatro:hover {
  border-left:20px solid #e67e22;
}

.cinco {
 border-left:5px solid #e74c3c;
}

.cinco:hover {
 border-left:20px solid #e74c3c;
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
  transition: all 1.5s linear;
}
</style>
