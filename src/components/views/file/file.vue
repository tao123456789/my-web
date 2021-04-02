<template>
  <div>
  <div>
    <label>使用uploader插件实现文件上传</label><br>
  <uploader :options="options" class="uploader-example">
    <uploader-unsupport></uploader-unsupport>
    <uploader-drop>
      <p>Drop files here to upload or</p>
      <uploader-btn>select files</uploader-btn>
      <uploader-btn :attrs="attrs">select images</uploader-btn>
      <uploader-btn :directory="true">select folder</uploader-btn>
    </uploader-drop>
    <uploader-list></uploader-list>
  </uploader>
  </div><br>
    <div>
      <label>使用el-uploader实现上传文件</label><br><br>
      <el-upload :on-remove="handleRemove"
      :before-upload="beforeUpload"
      :before-remove="beforeRemove"
      :limit="1"
      :file-list="fileList[0]"
      :multiple="false"
      :on-exceed="handleExceed"
      class="upload-demo"
      action="">选择文件</el-upload>
<!--      <el-upload-drag>drag</el-upload-drag>-->
<!--      <el-upload-list>list</el-upload-list>-->
    </div>
  </div>
</template>

<script>
export default {

  components:{
  },
  data(){
    return{
      options: {
        // 可通过 https://github.com/simple-uploader/Uploader/tree/develop/samples/Node.js 示例启动服务
        target: '//localhost:3000/upload',
        autoStart: false,
        testChunks: false
      },
      attrs: {
        accept: 'image/*'
      },
      fileList:[]
    }
  },
  methods:{
    handleRemove:function (){},
    beforeUpload:function (){},
    beforeRemove:function (){},
    handleExceed:function (){},
  }
}
</script>
<style>
.uploader-example {
  width: auto;
  padding: 15px;
  margin: 40px auto 0;
  font-size: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .4);
}
.uploader-example .uploader-btn {
  margin-right: 4px;
}
.uploader-example .uploader-list {
  max-height: 440px;
  overflow: auto;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
