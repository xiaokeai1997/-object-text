<template>
  <div id="app">
    <header class="header">
    </header>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">
      <foot />
    </footer>
  </div>
</template>
<script>
import foot from './components/footerBar'
export default {
  data(){
    return{

    }
  },
  components:{
    foot
  }
}
</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
#app {
width: 100%;
height: 100%;
display: flex;
flex-direction: column
}
html,body{
  width: 100%;
  height: 100%;
}
.header,.footer{
  width: 100%;
  height: 50px;
  background: #ccc;
}
.main{
  width: 100%;
  flex: 1;
  overflow: auto;
}
.footer{
  display: flex;
  a{
    flex: 1;
    text-align: center;
    line-height: 50px;
    color: black;
    &.router-link-exact-active {
       color: #f03d37;
     }
  }
}
</style>
