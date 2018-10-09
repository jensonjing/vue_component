<template>
  <div id='T_mask' v-if='popus' @close='hide()'>
      <div class="wraper">
          <h4 class='tile' v-if='titleData'>{{titleData}}</h4>
          <div class='content'>
              <input class='txtval' type="text" v-model="val" v-if='txtContent'>
              <div v-if='message'>{{message}}</div>
          </div>
          <div class="btnBox">
            <button @click='setData()'>确定</button>
            <button v-if='isCache' @click='close()'>取消</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['titleData','popus','txtContent','message','isCache'],
    data(){
        return {
            val:"",//要传递到父组件中的值
        }
    },
    methods:{
        //定义一个方法使用$emit()向父组件中传值
        setData(){
            //第一个值是参数名，放在父组件中用@绑定，第二个参数是要传递到父组件中的值
            this.$emit('setVal',this.val);
            this.close();
        },
        close(){
            this.$emit('hideSelf');
            this.val = "";
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
#T_mask{
    background-color: rgba(0,0,0,0.5);
    width:100%;
    height:100%;
    top: 0;
    left: 0;
    z-index: 9998;
    position: fixed;
}
.wraper{
    width: 16em;
    height: 10em;
    border: none;
    background-color: #fff;
    position: absolute;
    left:50%;
    margin-left: -8em;
    top:25%;
    z-index: 9999;
}
.wraper .tile {
    border-bottom: 1px solid #ddd;
    height: 2em;
    line-height: 2em;
    text-align: center;
    font-size: 1em;
    font-family: Microsoft YaHei;
    font-weight: 400;
}
.wraper .content{
    width: 100%;
    height: 5em;
    line-height: 5em;
    text-align: center;
    position: absolute;
    bottom: 3.2em;
}
.wraper .txtval{
    width:14em;
    height: 2em;
}
.wraper .btnBox{
    position: absolute;
    width:100%;
    bottom: 1em;
    left: 50%;
    margin-left: -8em;
}
.wraper .btnBox button{
    display: inline-block;
    width:5em;
    height: 2em;
    border:none;
    background-color:#2fbf15;
    color:#fff;
    text-align: center;
    margin: 0 0.4em;
}
.wraper .btnBox button:nth-of-type(2){
    background-color: #f00;
}
</style>

