<template>
  <!-- <div>123456789</div> -->
  <!-- <a-button type="dashed">Primary Button</a-button> -->
  <div class="login-page">
    <img alt="Vue logo" src="@/assets/images/asd.png" />
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 4 }"
      :wrapper-col="{ span: 20 }"
      autocomplete="off"
      @submit="submit">
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 4, span: 24 }">
        <a-checkbox v-model:checked="formState.remember">
          Remember me
        </a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 4, span: 20 }">
        <a-button type="primary" html-type="submit" block>登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import AppVue from '@/App.vue';
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

interface FormState {
  username: string
  password: string
  remember: boolean
}
const formState = reactive<FormState>({
  username: 'myadmin',
  password: 'Xinbaokeji123123',
  remember: true
})

// 如果账号是admin/123456则登录通过
const submit = (values: any) => {
  console.log(values)
  if (formState.username && formState.password) {
    router.push('/home')
  }
}

onMounted(() => {
  console.log('这里是onMounted生命周期')
})
</script>

<style lang="stylus" scoped>
.login-page{
  max-width: 520px;
  margin: 0 auto;
  text-align: center;
  img{
    max-width:100%;
  }
}
</style>
