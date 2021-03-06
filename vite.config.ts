import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    if (command === "serve") {
        return {
            // serve 独有配置
            plugins: [vue(), WindiCSS()],

            // Dev Proxy
            // server: {
            //     port: 3000,
            //     open: false, //自动打开
            //     base: "./ ", //生产环境路径
            //     proxy: {
            //         // 本地开发环境通过代理实现跨域，生产环境使用 nginx 转发
            //         // 正则表达式写法
            //         "/api": {
            //             target: "https://itunes.apple.com/", // 实际地址
            //             changeOrigin: true, //开启代理
            //             rewrite: (path) => path.replace(/^\/api/, ""),
            //         },
            //     },
            // },
        };
    } else {
        return {
            // build 独有配置
            plugins: [vue(), WindiCSS()],
        };
    }
});
