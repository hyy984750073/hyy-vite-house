import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// node版本 v16.15.1  试过v12和v15都不行
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [AntDesignVueResolver()]
    }),
    Components({
      resolvers: [AntDesignVueResolver()]
    })
  ],
  resolve: {
    // 设置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
      '*': path.resolve('')
    }
  },
  // 开发服务器配置
  server: {
    hmr: true, // 开启热更新
    port: 3500,
    cors: true, // 默认启用并允许任何源
    // https: false, // 是否开启 https

    // 设置反向代理，跨域
    proxy: {
      // 如果是 /ckb-web 打头，则访问地址如下
      '/ckb-web': {
        // target: 'http://192.168.10.194:9190/', // 廖祖恒的接口地址
        // target: 'http://192.168.11.239:9190/', // 叶阳明的接口地址
        // target: 'http://192.168.10.188:9190/', // 周悦的接口地址
        // target: 'http://192.168.17.236:9190/', // 江泽龙的接口地址
        // target: 'http://192.168.11.21:9190/', // 陈春城的接口地址
        // target: 'http://192.168.8.139:9199/', // 杨嘉文的接口地址
        // target: 'http://192.168.11.42:9199/', // 张雄泉的接口地址
        // target: 'http://192.168.10.214:9190/', // 黄坚的接口地址
        // target: 'http://127.0.0.1:9190/', // 本地接口地址
        // target: 'http://47.112.114.228', // 开发
        target: 'https://test4-studio-admin.xinshuiguanjia.com', // 测试

        changeOrigin: true
      }
    },
    open: true
  }
})
