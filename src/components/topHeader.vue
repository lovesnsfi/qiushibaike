<template>
  <div class="header">
    <div class=" container">
      <a href="javascript:void(0)" class="logo_link">
        <img src="../assets/logo2016.png" alt="" class="logo">
      </a>
      <ul class="topLink">
        <li>
          <router-link to="" active-class="active">热门</router-link>
        </li>
        <li>
          <router-link to="" active-class="active">24小时</router-link>
        </li>
        <li>
          <router-link to="" active-class="active">热图</router-link>
        </li>
        <li>
          <router-link to="" active-class="active">文字</router-link>
        </li>
        <li>
          <router-link to="" active-class="active">穿越</router-link>
        </li>
      </ul>
      
    </div>
  </div>
</template>

<script>
export default {
  name:"topHeader"
}
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.header{
  width:100%;
  height:80px;
  background-color: $primaryColor;
  .container{
    margin: auto;
    @include flexbox(){
        justify-content: flex-start;
    }
    @extend .container;
    >.logo_link{
      height:80px;
      overflow: hidden;
    }
    >.topLink
    {
      flex: 1;
      @include flexbox(){
        justify-content: flex-start;
      }
      >li{
        box-sizing: border-box;
        margin: 0px 10px;
        min-width: 70px;
        cursor: pointer;
        @include flexbox(){
          align-items: center;
        }
        >a{
          color: #300;
          text-decoration: none;
        }
        &.active{
          border-bottom: 3px solid #7a4624;
          background-color: #ffe36f;
        }
        &:hover{
          background-color: #ffe36f;
        }
      }
    
    }
  }
  
}
</style>

