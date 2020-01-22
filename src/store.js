// 导入vue和vuex
import Vue from 'vue'
import Vuex from 'vuex'

// 引用Vuex
Vue.use(Vuex)

// 从main.js拷贝过来即可
const store = new Vuex.Store({
	state: {
		isLogin: false, //登录状态
		username: '', //用户名
		password: '', //密码
		list: [
			{ name: '张三', checked: true },
			{ name: '李四', checked: false },
			{ name: '哪吒', checked: true },
			{ name: '敖丙', checked: false },
			{ name: '申公豹', checked: true },
			{ name: '太乙真人', checked: true },
		]
	},
	getters: {
		//显示checked为true的人员
		showChecked: state => {
			return state.list.filter(item => item.checked)
		},
		//显示checked为false的人员
		showUnChecked: state => {
			return state.list.filter(item => !item.checked)
		},
		//根据参数显示
		showCheckedByState: (state) => (checked) => {
			return state.list.filter(item => item.checked === checked)
		},
		//显示全部人
		showAll: (state) => {
			return state.list
		},
	},
	mutations: {
		// 修改登录状态
		changeLogin(state, data) {
			state.isLogin = data
		},
		// 修改用户名状态
		changeUsername(state, data) {
			state.username = data
		},
		// 修改密码状态
		changePassword(state, data) {
			state.password = data
		}
	}
})

// 暴露（导出）store
export default store