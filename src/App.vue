<template>
  <div class="container">
   <div class="menu--leftside">
      <ul class="no-bullets">
         <li class="menu--logo"></li>
         <li class="menu--items" v-for="route in this.$router.options.routes"><router-link :to="route.path" class="link--router"><i :class="route.icon"></i>{{ route.name }}</router-link></li>
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
   -webkit-box-pack: center;
       -ms-flex-pack: center;
           justify-content: center;
   background-color: #c0c0c0;
   padding-top: 10vh;
   border-right: 3px solid #ccc;
}

.content--tidy {
   display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -webkit-box-pack: center;
       -ms-flex-pack: center;
           justify-content: center;
   -webkit-box-align: center;
       -ms-flex-align: center;
           align-items: center;
   background-color: #6497b1;
   overflow-y: auto;
   border-right: 1px solid #000;
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
   padding: 20px 40px;
   width: 100%;
   transition: all 0.5s ease-in-out; /* vendorless fallback */
   -o-transition: all 0.5s ease-in-out; /* opera */
   -ms-transition: all 0.5s ease-in-out; /* IE 10 */
   -moz-transition: all 0.5s ease-in-out; /* Firefox */
   -webkit-transition: all 0.5s ease-in-out; /*safari and chrome */
}
.menu--items:hover {
   transition: all 0.5s ease-in-out;
   -webkit-transition: all 0.5s ease-in-out;
   background: rgba(255,255,254, 0.4);
}
.link--router {
   color: navy;
   font-family: 'Playfair Display SC', serif;
   font-size: 1.2em;
   font-weight: light;
   letter-spacing: 0.2em;
   text-decoration: none;
   text-transform: uppercase;
}
</style>
