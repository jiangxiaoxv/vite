/// <reference types="vite/client" />
// import vite/client 上一行告诉vite，自动进行引入

interface ImportMetaEnv { 
    readonly VITE_PROXY_TRAGET: string
}