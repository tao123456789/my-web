<template>
  <div id="axios">


    <div>
      <label>获取文字，示例：https://autumnfish.cn/api/joke/list?num=6</label>
    <br>
    <input type="text" value="" placeholder="请输入地址" id="url" style="width: 80%;height: 30px;">
      <el-button value="获取数据" @click="getInfo" type="primary">获取数据</el-button>
      <br>
      <label :model="rs" style="background-color:	#E0E0E0">{{rs}}</label>
    </div>
    <br>
<!--    //获取JSON数据暂时未做
    <div>
      <label>获取json数据</label><br>
      <input type="text" value="" placeholder="请输入地址" id="getJSON" style="width: 80%;height: 30px;">
      <el-button value="获取数据" @click="getJSON" type="primary">获取数据</el-button>
      <br>
      <label :model="getJSON" style="background-color:	#E0E0E0">{{geJSON}}</label>
    </div>
    <br>-->

    <div>
      <label>获取图片</label><br>
      <label>示例1：http://p19.qhimg.com/bdm/1024_768_80/t0151ad4ac41239cb58.jpg</label><br>
      <label>示例2：http://cn.bing.com/th?id=OHR.OwlSunflowers_ZH-CN8154999485_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp</label><br>
      <label>示例3：https://api.xygeng.cn/Bing/</label>
      <input type="text" value="" placeholder="请输入地址" id="PicUrl" style="width: 80%;height: 30px;">
      <el-button value="获取数据" @click="getPic" type="primary">获取图片</el-button>
      <br>
      <img :src="picUrl" style="width: 100%;height: 100%" v-if="Pictureshow">
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      rs:"在这显示数据",
      picUrl:"在这显示图片",
      Pictureshow:false,
    }
  },
  methods:{
    //实现获取地址数据的功能
    getInfo:function (){
      let url=document.getElementById('url').value;

      axios.get(url)
          .then(res => {
            console.log("获取url的数据成功");
            console.log(res)
            this.rs=res.data;
          })
          .catch(err => {
            console.error(err);
            this.rs=err;
          })
    },

    //实现获取图片的功能
    getPic:function (){
      let url=document.getElementById('PicUrl').value;

      axios.get(url,{
        responseType:'blob',
        headers:self.header,
/*            {
        'Content-Type': 'application/json',
        'data-type': 'Buffer'},
        data:JSON.stringify(),*/
      })
          .then(res => {
            console.log("获取url的数据成功");
            console.log(res)
            if(res.data==''){
              this.Pictureshow=false;
            }else{
            this.Pictureshow=true;
            this.picUrl = window.URL.createObjectURL(res.data)
            }
          })
          .catch(err => {
            console.error(err);
            this.Pictureshow=false;
            console.log("获取图片失败！");
            this.picUrl="";
          })
    },
  }
}
</script>
