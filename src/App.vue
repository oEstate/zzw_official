<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style>
#app {
  /*font-family: 'Avenir','Microsoft YaHei', Helvetica, Arial, sans-serif;*/
  font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  @media (max-width: 768px){
    body,html{
      width:100%;
    }
  }
</style>
