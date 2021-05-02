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
      <label>示例4：https://picsum.photos/1080/1920/?image=1083</label><br>
      <label>示例5：https://unsplash.it/1600/900?random</label><br>
      <input type="text" value="" placeholder="请输入地址" id="PicUrl" style="width: 80%;height: 30px;">
      <el-button value="获取数据" @click="getPic" type="primary">获取图片</el-button>
      <br>
      <img :src="picUrl" style="width: 100%;height: 100%" v-if="Pictureshow">
    </div>

    <div>
      <label>获取视频</label><br>
      <label>示例1：http://baobab.kaiyanapp.com/api/v1/playUrl?vid=158265&resourceType=video&editionType=low&source=ucloud&playUrlType=url_oss&udid=e686f5856bdf4d48b77b1220abedbb48b5cf1035</label><br>
      <input type="text" value="" placeholder="请输入地址" id="videoUrl" style="width: 80%;height: 30px;">
      <el-button value="视频链接" @click="videoShow" type="primary">获取视频</el-button>
      <br>
      <el-dialog
          title="视频播放"
          :visible.sync="showDialog"
          width="60%"
          :before-close="handleClose" class="transition-box">
        <div class="player" v-if="player">
          <video-player
              id="player"
              class="vjs-custom-skin video-style"
              :options="playerOptions"
              :playsinlne="true"
              ref="videoPlayer"
              @play="onPlayerPlay($event)"
              @pause="onPlayPause($event)"
              @ended="onPlayEnded($event)"
              @loadeddate="onPlayLoadeddate($event)"
              @timeupdate="onPlayTimeupdate($event)"
              @ready="playerReadied($event)">
          </video-player>
        </div>
        <span slot="footer" class="dialog-footer">
           <el-button @click="showDialog = false">取 消</el-button>
           <el-button type="primary" @click="showDialog = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import axios from "axios";

//引入视频包
import {videoPlayer} from 'vue-video-player'
import 'video.js/dist/video-js.css'

export default {
  components: {
    videoPlayer,
  },
  data() {
    return {
      rs: "在这显示数据",
      picUrl: "图片url",
      Pictureshow: false,
      JSONvalue: "在这显示数据",

      showDialog: false,
      player:false,

      //视频
      playerOptions: {
        //播放速度
        playbackRates: [0.5, 1.0, 1.5, 2.0],
        //如果为true，浏览器浏览器准备好时开始回放。
        autoplay: false,
        // 默认情况下将会消除任何音频。
        muted: false,
        // 导致视频一结束就重新开始。
        loop: false,
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: 'auto',
        language: 'zh-CN',
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: '16:9',
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true,
        sources: [{
          //类型
          type: "video/mp4",
          //url地址
          src: "",
        }],
        //你的封面地址
        poster: '',
        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          //全屏按钮
          fullscreenToggle: true
        }
      }
    }
  },
  methods: {
    //实现获取地址数据的功能
    getInfo: function () {
      let url = document.getElementById('url').value;

      axios.get(url)
          .then(res => {
            console.log("获取url的数据成功");
            console.log(res)
            this.rs = res;
          })
          .catch(err => {
            console.error(err);
            this.rs = err;
          })
    },

    //实现获取图片的功能
    getPic: function () {
      let url = document.getElementById('PicUrl').value;

      axios.get(url, {
        responseType: 'blob',
        headers: self.header,
      })
          .then(res => {
            console.log(res)
            if (res.data == '') {
              this.Pictureshow = false;
            } else {
              this.Pictureshow = true;
              this.picUrl = window.URL.createObjectURL(res.data)
            }
          })
          .catch(err => {
            console.error(err);
            this.Pictureshow = false;
            console.log("获取图片失败！");
            this.picUrl = "";
          })
    },
    //获取JSON文件
    getJSO: function () {
      let getJSO = document.getElementById("JSONurl").value;
      axios.get(getJSO, {
        responseType: 'json',
        headers: self.header,
      })
          .then(res => {
            console.log(res)
            this.JSONvalue = res;
          })
          .catch(err => {
            console.error(err);
            this.JSONvalue = err;
          })
    },

    //视频
    onPlayerPlay:function (){
      console.log("视频开始播放");
    },
    onPlayPause:function (){
      console.log("视频暂停")
    },
    onPlayEnded:function (){
      console.log("视频结束")
    },
    onPlayLoadeddate:function (){
      console.log("加载视频数据")
    },
    onPlayTimeupdate:function (){
      console.log("视频时间更新")
    },
    playerReadied:function (){
      console.log("视频准备完成")
      console.log("视频的src：")
    },

    handleClose(done) {
      this.$confirm('确认关闭？').then(function(){
        done();
        console.log("执行了关闭");
        this.showDialog=false;
        this.player=false;
        this.$refs.videoPlayer.player.end();
      }).catch(function (){})
    },

    videoShow:function (){
      console.log(this.playerOptions.sources[0].src);
      this.playerOptions.sources[0].src=document.getElementById("videoUrl").value;
      console.log(this.playerOptions.sources[0].src);
      this.showDialog=true;
      this.player=true;
    },
  },
}
</script>
<style scoped>
  .player{
    display: inline-block;
    width: 650px;
    height: 400px;
    text-align: center;
    line-height: 100px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;
  }
</style>
