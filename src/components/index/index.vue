<template>
  <div>
    <div>
      <p>我的应用</p>
      <el-button @click="showAxios" type="primary" plain>网络地址获取数据</el-button>
      <el-button @click="showFile" type="primary" plain>文件功能</el-button>
      <el-dialog
          title="提示"
          :visible.sync="showDialog"
          width="60%"
          :before-close="handleClose" class="transition-box">
        <div>
          <Axios id="axiosShow" v-if="Axios"/>
          <File id="fileShow" v-if="File"/>
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
import Axios from "../views/axios/axios.vue";//引入组件自己的Axios组件
import File from "../views/file/file.vue";//引入组件自己的File组件

export default {
  data() {
    return {
      showDialog: false,
      Axios:false,
      File:false,
    }
  },
  methods: {
    showAxios: function () {
      this.showDialog = !this.showDialog;
      this.Axios =true;
      this.File=false;
    },
    showFile:function (){
      this.showDialog = !this.showDialog;
      this.Axios=false;
      this.File=true;
    },
    handleClose(done) {
      this.$confirm('确认关闭？').then(function(){
        done();
      }).catch(function (){})
    }
  },
  components:{
    'Axios':Axios,
    'File':File,
  }
}
</script>
