<template>
  <div>
    <div>
      <p>我的应用</p>
      <el-button @click="axiosGet" type="primary" plain>网络地址获取数据</el-button>
      <el-dialog
          title="提示"
          :visible.sync="showModal"
          width="60%"
          :before-close="handleClose" class="transition-box">
        <div>
          <Axios id="axiosShow"/>
        </div>
        <span slot="footer" class="dialog-footer">
           <el-button @click="showModal = false">取 消</el-button>
           <el-button type="primary" @click="showModal = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>

<!--弹窗-->

  </div>
</template>

<script>
import Axios from "../views/axios/axios.vue";//引入组件

export default {
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    axiosGet: function () {
      this.showModal = !this.showModal;
    },
    handleClose(done) {
      this.$confirm('确认关闭？').then(function(){
        done();
      }).catch(function (){})
    }
  },
  components:{
    'Axios':Axios
  }
}
</script>
