### Mutation的概念
- 更改Vuex的store中的状态的唯一方法是提交mutation.Vuex中的mutation非常类似于事件：每个mutation都有一个字符串的事件类型(type)和一个回调函数(handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受state作为第一个参数。

- 到这里应该就明白了vuex中两个基本的概念，state和mutation，更多知识点在用到的时候再说吧。

- 你不能直接调用一个mutation handler。这个选项更像是事件注册。要唤醒一个mutation handler，你需要以相应的type调用store.commit方法


### mapState辅助函数
- 当一个组件需要获取多个状态时，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用mapState辅助函数帮助我们生成计算属性。

### mapGetters辅助函数
- mapGetters辅助函数仅仅是将store中的getter映射到局部计算属性

### mapMutations辅助函数
>在methods里面用对象展开运算符添加...mapMutations，先说第一种方式
```
methods: {
  ...mapMutations(['addCount', 'resetCount'])
}
```

>这里，如果是不带参数的mutation，可以直接调用，this.addCount,this.resetCount.
>如果是带参数的，则另外写一个方法，来调用this.addCount(arg)
```
methods: {
  ...mapMutations(['addCount', 'resetCount']),
  add () {
    this.addCount({n: 1})
  },
  reset () {
    this.resetCount({data: 0})
  }
}
```

### 参考
[vuex官网](https://vuex.vuejs.org/zh/)

[vue-router官网](https://router.vuejs.org/zh/)

[element-ui官网](https://element.eleme.cn/#/zh-CN)