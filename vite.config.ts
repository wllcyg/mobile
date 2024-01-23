import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import postcssPxtoViewport from 'postcss-px-to-viewport'

export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': `/src`
      }
    },
    css: {
        postcss: {
            plugins: [
                postcssPxtoViewport({
                    unitToConvert: ['px'],
                    viewportWidth: 375,
                    unitPrecision: 3,
                    viewportUnit: 'vw',
                    fontViewportUnit: 'vw',
                    mediaQuery: true,
                    replace: true,
                    propList: ['*'],
                    exclude: [],
                    selector: '*, :before, :after'
                })
            ]
        }
    }
})
