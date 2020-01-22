<template>
  <div class="home">
    登录状态：{{isLogin}} <br>
    用户名：{{username}}<br>
    密码：{{password}} <br>
    a + b = {{sum}} <br>
    首页 <br><br>
    <div>
      <div><a href="javascript:;" @click="getCheckedByState(true)">已签到</a> | <a href="javascript:;" @click="getCheckedByState(false)">未签到</a></div>
      <ul>
        <li v-for="(item, index) in checkList" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
    <br>
    <br>
    <div>
      所有人<br>
      <ul>
        <li v-for="(item, index) in showAll" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
    <br>
    <br>
    <div>
      所有签到人<br>
      <ul>
        <li v-for="(item, index) in showChecked" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
    <br>
    <br>
    <div>
      所有没签到人<br>
      <ul>
        <li v-for="(item, index) in showUnChecked" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
  
</template>


<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      a: 10,
      b: 20,
      checkList: []
    }
  },
  created () {
    this.getCheckedByState(true);
  },
  methods: {
    getCheckedByState (checked) {
      console.log(this.$store.getters.showCheckedByState(checked))
      this.checkList = this.$store.getters.showCheckedByState(checked);
    }
  },
  name: "Home",
  computed: {
    ...mapState({
      isLogin: state => state.isLogin,
      username: state => state.username,
      password: state => state.password
    }),

    ...mapGetters([
      'showChecked',
      'showUnChecked'
    ]),

    sum () {
      return this.a + this.b
    },

    showAll(){
      return this.$store.getters.showAll
    }
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>