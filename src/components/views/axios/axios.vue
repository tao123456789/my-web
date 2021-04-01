<template>
  <div id="axios">


    <div>
      <label>获取一般axios格式</label><br>
      <label>示例：https://autumnfish.cn/api/joke/list?num=6</label><br>
    <input type="text" value="" placeholder="请输入地址" id="url" style="width: 80%;height: 30px;">
      <el-button value="获取数据" @click="getInfo" type="primary">获取数据</el-button>
      <br>
      <label :model="rs" style="background-color:	#E0E0E0">{{rs}}</label>
    </div>
    <br>

    <div>
      <label>获取json数据</label><br>
      <input type="text" value="" placeholder="请输入地址" id="JSONurl" style="width: 80%;height: 30px;">
      <el-button value="获取数据" @click="getJSO" type="primary">获取数据</el-button>
      <br>
      <label :model="JSONvalue" style="background-color:	#E0E0E0">{{JSONvalue}}</label>
    </div>
    <br>

    <div>
      <label>获取图片</label><br>
      <label>示例1：http://p19.qhimg.com/bdm/1024_768_80/t0151ad4ac41239cb58.jpg</label><br>
      <label>示例2：http://cn.bing.com/th?id=OHR.OwlSunflowers_ZH-CN8154999485_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp</label><br>
      <label>示例3：https://api.xygeng.cn/Bing/</label><br>
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
      JSONvalue:"在这显示数据",
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
            this.rs=res;
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
      })
          .then(res => {
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
    //获取JSON文件
    getJSO:function(){
      let getJSO=document.getElementById("JSONurl").value;
      axios.get(getJSO,{
        responseType:'json',
        headers:self.header,
      })
          .then(res => {
            console.log(res)
            this.JSONvalue=res;
          })
          .catch(err => {
            console.error(err);
            this.JSONvalue=err;
          })
    }
  }
}
</script>
