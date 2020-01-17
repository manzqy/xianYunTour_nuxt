<template>
  <div>
    <el-form ref="form" :model="form" :rules="rules" class="form">
      <el-form-item class="form-item" prop="username">
        <el-input v-model="form.username" placeholder="用户名/手机" />
      </el-form-item>

      <el-form-item class="form-item" prop="password">
        <el-input v-model="form.password" placeholder="密码" type="password" />
      </el-form-item>

      <p class="form-text">
        <nuxt-link to="#">
          忘记密码
        </nuxt-link>
      </p>

      <el-button @click="handleLoginSubmit" class="submit" type="primary">
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    const checkAge = (rule, value, callback) => {
      const reg = /^1[3579]\d{9}$/
      if (!reg.test(value)) {
        callback(new Error('手机号码格式错误'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '13800138000',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: checkAge, trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, max: 16, message: '长度在 1 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleLoginSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // eslint-disable-next-line no-console
          this.$axios({
            url: '/accounts/login',
            method: 'post',
            data: this.form
          }).then((res) => {
            // eslint-disable-next-line no-console
            console.log(res)
            this.$store.commit('user/loginUser', res.data.user)
          })
        }
      })
    }
  }
}
</script>

<style>
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>
