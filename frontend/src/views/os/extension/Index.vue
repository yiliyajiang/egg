<template>
  <div id="app-base-extension">
    <div class="one-block-1">
      <span>
        <!-- electron的扩展功能不完整，官方也不建议使用 -->
        1. 上传扩展程序（crx文件格式）
      </span>
    </div>
    <div class="one-block-2">
      <a-upload-dragger
        name="file"
        :multiple="true"
        :action="action_url"
        @change="handleChange"
      >
        <p class="ant-upload-drag-icon">
          <a-icon type="inbox" />
        </p>
        <p class="ant-upload-text">
          上传
        </p>
        <p class="ant-upload-hint">
        </p>
      </a-upload-dragger>
    </div>
    <div class="one-block-1">
      2. chrome扩展商店（crx下载）
    </div>  
    <div class="one-block-2">
      <a-space>
        极简插件：https://chrome.zzzmh.cn/
      </a-space>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      action_url: 'localhost:xxxx/api/example/uploadExtension',
    };
  },
  methods: {
		handleChange(info) {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file);
      }
      if (status === 'done') {
        const uploadRes = info.file.response;
        console.log('uploadRes:', uploadRes)
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  }
};
</script>
<style lang="less" scoped>
#app-base-extension {
  padding: 0px 10px;
  text-align: left;
  width: 100%;
  .one-block-1 {
    font-size: 16px;
    padding-top: 10px;
  }
  .one-block-2 {
    padding-top: 10px;
  }
}
</style>
