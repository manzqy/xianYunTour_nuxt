<template>
  <div class="header-wrapper" align="middle">
    <el-row class="header" justify="space-between" align="middle" type="flex">
      <h1>闲云旅游</h1>
      <el-row class="tablist" type="flex">
        <nuxt-link to="/">
          首页
        </nuxt-link>
        <nuxt-link to="/post">
          旅游攻略
        </nuxt-link>
        <nuxt-link to="/hotel">
          酒店
        </nuxt-link>
        <nuxt-link to="/air">
          国内机票
        </nuxt-link>
      </el-row>
      <div class="login">
        <nuxt-link to="/user/login">
          登录/注册
        </nuxt-link>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.header-wrapper {
  min-width: 1000px;
  height: 60px;
  position: relative;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 3px #ccc;
}
.header {
  width: 1000px;
  margin: 0 auto;
  height: 60px;
  h1 {
    width: 156px;
    height: 43px;
    text-indent: -9999px;
    background-image: url(../../static/logo.jpg);
    background-size: contain;
  }
}
.tablist {
  flex: 1;
  height: 100%;
  margin-left: 20px;
  box-sizing: border-box;
  a {
    height: 100%;
    line-height: 60px;
    padding: 0 20px;
    &:hover {
      border-bottom: 3px solid #409eff;
      color: #409eff;
    }
  }
  .nuxt-link-exact-active {
    background-color: #409eff;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
}
</style>
