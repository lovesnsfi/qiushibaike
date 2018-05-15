<template>
  <div class="hot">
    <hot-item v-for="(item,index) in qiushiList" :key="index" :qs-item="item"></hot-item>
  </div>
</template>

<script>
import hotItem from "../components/hotItem";
export default {
  name:"hot",
  data(){
    return {
       qiushiList:[]
    }
  },
  components:{
    hotItem
  },
  created(){
    this.$http.get("/article/history?page=1&count=30").then(res=>{
      console.log(JSON.stringify(res.data));
     this.qiushiList=res.data.items;
     this.$toast("获取成功");
    }).catch(err=>{
      this.$toast("获取数据失败");
    });
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
  .hot{
    
  }
</style>

