<template>
  <!-- 假设这里是个子组件 -->
  <div @click="onClickHelp">这里只是教你怎么写代码 {{ props.name }}</div>
  <div>
    {{ content }}<br />
    {{ patternVisible }}<br />
    {{ debugVisible }}<br />
    {{ aboutExeVisible }}<br />
    person对象：{{ person }}<br />
    全名：{{ fullName }}<br />
    全名2：{{ fullName2 }}
  </div>
  <a-botton @click="isOk">emit例子</a-botton>
</template>

<script lang="ts" setup>
import {
  ref,
  reactive,
  toRefs,
  watchEffect,
  watch,
  computed,
  defineProps,
  defineEmits
} from 'vue'
import { useRoute, useRouter } from 'vue-router'

const content = ref('当前是demo页面')
const data = reactive({
  patternVisible: false,
  debugVisible: false,
  aboutExeVisible: false
})
// 使用toRefs解构
const { patternVisible, debugVisible, aboutExeVisible } = toRefs(data)

// method方法的使用
const onClickHelp = () => {
  console.log(`系统帮助`)
  data.aboutExeVisible = true
}

// watchEffect的使用
const sum = ref(0)
watchEffect(() => {
  const x1 = sum.value
  console.log('watchEffect所指定的回调执行了', x1)
})

// watch的使用
const msg = ref('你好啊')
const person = reactive({
  name: '张三',
  age: 18,
  firstName: '小',
  lastName: '叮当',
  job: {
    j1: {
      salary: 20
    }
  }
})
// 两种监听格式
watch(
  [sum, msg],
  (newValue, oldValue) => {
    console.log('sum或msg变了', newValue, oldValue)
  },
  { immediate: true }
)
watch(
  () => person.job,
  (newValue, oldValue) => {
    console.log('person的job变化了', newValue, oldValue)
  },
  { deep: true }
)

// computed计算属性的使用
// 计算属性简写

const fullName = computed(() => {
  return `${person.firstName}-${person.lastName}`
})
// 完整写法
const fullName2 = computed({
  get() {
    return `${person.firstName}-${person.lastName}`
  },
  set(value) {
    const nameArr = value.split('-')
    person.firstName = nameArr[0]
    person.lastName = nameArr[1]
  }
})

// props父子传值的使用
// 声明props
const props = defineProps({
  name: {
    type: String,
    default: '11'
  }
})
// 或者
// const props = defineProps(['name'])
/*
父组件代码如下（示例）：
<template>
  <child name='Lisa'/>  
</template>
*/

// emit子父传值的使用
const emit = defineEmits(['emitFun'])
const isOk = () => {
  emit('emitFun')
}
/**
父组件代码如下（示例）：
<template>
  <AdoutExe @emitFun="aboutExeHandleCancel" />
</template>
 */

// 获取子组件ref变量和defineExpose暴露
// 即 vue2 中的获取子组件的 ref ，直接在父组件中控制子组件方法和变量的方法
defineExpose({
  ...toRefs(data)
})
/**
 * 
 * 
父组件代码如下（示例）：
<template>
    <button @click="onClickSetUp">点击</button>
    <Content ref="content" />
</template>

< setup>
import {ref} from 'vue'

// content组件ref
const content = ref('content')
// 点击设置
const onClickSetUp = ({ key }) => {
   content.value.modelVisible = true
}
< / script>
 */

// 路由useRoute和useRouter的使用
// 声明
const route = useRoute()
const router = useRouter()
// 获取query
console.log(route.query)
// 获取params
console.log(route.params)
// 路由跳转
// router.push({
//   path: `/index`
// })

/*
// store仓库的使用
import { useStore } from 'vuex'
import { num } from '../store/index'
const store = useStore(num)
// 获取Vuex的state
console.log(store.state.number)
// 获取Vuex的getters
console.log(store.state.getNumber)
// 提交mutations
store.commit('fnName')
// 分发actions的方法
store.dispatch('fnName')
*/

// await的支持
// setup  语法糖中可直接使用  await ，不需要写  async  ，  setup  会自动变成  async setup
/*
import api from '../api/Api'
const data = await Api.getData()
console.log(data)
*/

// provide 和 inject 祖孙传值
/**
 * 
 import { ref,provide } from 'vue'import AdoutExe from '@/components/AdoutExeCom'

  let name = ref('Jerry')
  // 使用provide
  provide('provideState', {
    name,
    changeName: () => {
      name.value = '小叮当'
    }
  })
<   /script>
子组件代码如下（示例）：
< setup>
  import { inject } from 'vue'
  const provideState = inject('provideState')

  provideState.changeName()
  < /script>
 */
</script>
