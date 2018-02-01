<template>
  <div id="app">
    <div class="box">
      <div v-marked class="html">
``` html
<p>111111</p><br/>
```
      </div>
    </div>
    <div class="box">
      <div v-marked class="css">
``` css
p > a {
  color: #fff;
  content: '<'+'br>';
}
```
      </div>
    </div>
    <div class="box">
      <div v-marked class="javascript">
``` javascript
for(var i=0;i<10;i++){
  console.log(i);
  console.log("<"+"span>22222<"+"/span>");
}
```
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>

.box {
  margin: 50px auto;
  width:600px;
  height: 200px;
  border: 1px solid;
}
</style>
