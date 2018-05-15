<template>
  <div class="item">
      <div class="userInfo">
        <img :src="qsItem.user==undefined?anonyImg:qsItem.user.thumb" alt="">
        <span class="nickName">{{qsItem.user==undefined?'匿名用户':qsItem.user.login}}</span>
        <span class="articleGender">{{qsItem.user==undefined?"0":qsItem.user.age}}</span>
      </div>
      <div class="content">
        <img v-if="qsItem.format=='image'" :src="qsItem.high_loc" alt="">
        <div>
          <span v-if="qsItem.tag"> #{{qsItem.tag}}#</span> {{qsItem.content}}
        </div>
      </div>
      <div class="stats">
        {{qsItem.votes.up}} 好笑 · {{qsItem.comments_count}} 评论
      </div>
      <ul class="vote">
        <li class="funny">
          <img src="../assets/funny.png" alt="">
        </li>
        <li class="not_funny">
          <img src="../assets/not_funny.png" alt="">
        </li>
        <li class="comment">
          <img src="../assets/comment.png" alt="">
        </li>
      </ul >
    </div>
</template>

<script>
import anonyImg from "../assets/anony.png";
export default {
  name:"hotItem",
  props:["qsItem"],
  data(){
    return {
      anonyImg:anonyImg
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../scss/common.scss";
.item{
      background-color: white;
      padding: 15px;
      margin: 0px 0px 10px 0px;
      >.userInfo{
        @include flexbox(){
          align-items: center;
          justify-content: flex-start;
        };
        >img{
           width:40px;
          height: 40px;
          border-radius: 50px;
          display: block;
        }
        >.nickName{
          color: #9b8878;
          margin-left:5px;
        }
        >.articleGender{
          width:30px;
          height:15px;
          border-radius: 5px;
          background-image: url("../assets/nv.png");
          background-size: 100% 100%;
          font-size: 12px;
          color: white;
          text-align: right;
        }
      }
      >.content{
        line-height: 2;
        box-sizing: border-box;
        text-indent: 2em;
      }
      >.stats
      {
        font-size: 12px;
        color: gray;
        margin: 10px 0px;
      }
      >.vote
      {
        @include flexbox(){
          justify-content: flex-start;
        }
        margin: 10px 0px;
        >li{
          margin: 0px 10px;
          overflow: hidden;
          cursor: pointer;
          >img{
            width: 30px;
            height: 30px;
            border-radius: 30px;
            display: block;
          }
        }
      }
    }
</style>

