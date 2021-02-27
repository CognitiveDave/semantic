<template>
    <text-highlight :queries="queries">{{ description }}</text-highlight>

</template>


<script>
export default {
  name: 'text',
  props: {
    msg: String
  },
  data() {
      return {
          queries: ['birds','scatt'],
          description: 'Tropical birds scattered as Drake veered the Jeep'
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
