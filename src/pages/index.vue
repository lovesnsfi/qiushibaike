<template>
    <div class="index">
      <top-header></top-header>
      <div class="content">
        <div class="left">
          <router-view></router-view>
        </div>
        <div class="right">
          <div class="inform">
            <img src="../assets/inform.png" alt="">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import topHeader from "../components/topHeader";
export default {
  name:"index",
  components:{
    topHeader
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.index{
  >.content{
    width: $primaryWidth;
    margin: auto;
    overflow-x:hidden;
    margin-top: 10px;
    @include flexbox();
    >.right{
      width:300px;
      >.inform
      {
        >img{
          width:100%;
          height: auto;
          display: block;
        }
      }
    }
    >.left{
      flex:1;
      box-sizing: border-box;
      padding: 0px 5px ;
    }
  }
}
</style>
