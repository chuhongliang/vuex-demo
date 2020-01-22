<template>
  <div class="login">
    <input v-model="username" type="text" placeholder="用户名"> <br>
    <input v-model="password" type="password" placeholder="密码"> <br>
    <button @click="LoginHandle">登录</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    LoginHandle() {
      // 表单验证
      if (!this.username || !this.password ) return;
      
      // 修改isLogin状态
      this.$store.commit('changeLogin', true)
      // 修改username状态
      this.$store.commit('changeUsername', this.username)
      // 修改password状态
      this.$store.commit('changePassword', this.password)
      
      this.$router.push('/') // 跳到首页
    }
  },
  data () {
    return {
      username: '',
      password: ''
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>