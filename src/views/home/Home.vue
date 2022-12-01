<template>
  <div class="home-page">
    <a-button type="danger" class="logout-btn" @click="logout">
      退出登录
    </a-button>
    <a-carousel autoplay>
      <div><img src="@/assets/images/banner1.webp" /></div>
    </a-carousel>
    <a-select
      v-model="formState.businessType"
      style="width: 200px"
      :options="list"
      placeholder="请选择" />
    <!-- <router-link to="/demo">去到demo页面</router-link> -->

    <CkbDropdown></CkbDropdown>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import CkbDropdown from '@/components/CkbDropdown.tsx'

const router = useRouter()

const list = ref([])

interface FormState {
  username: string
  businessType: string
}
const formState = reactive<FormState>({
  username: '',
  businessType: ''
})

const logout = () => {
  router.push({ path: '/' })
}

onMounted(() => {
  axios({
    method: 'get',
    url: '/ckb-web/sys/dict/getDictItems/ManagerEducational',
    headers: {
      'x-access-token':
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTc4Njk3OTUsInVzZXJuYW1lIjoibXlhZG1pbiJ9.UyAMaeIRCJi9-7jOWdRN_bIdzM4QkIyTwQ-OqPeADrM'
    }
  }).then(res => {
    // console.log(res)
    list.value = res.data.result || []
    list.value.forEach((item: any) => {
      item.label = item.title
    })
    // console.log(list)

    formState.username = '123456'
  })
})
</script>

<style lang="stylus" scoped>
.home-page{
  position:relative;
  .logout-btn{
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 10;
  }
  .ant-carousel :deep() .slick-slide {
    text-align: center;
    height: 200px;
    line-height: 160px;
    background: #364d79;
    overflow: hidden;
  }

  .ant-carousel :deep() .slick-slide h3 {
    color: #fff;
  }
}
</style>
