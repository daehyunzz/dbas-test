import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
    // export default defineConfig(({ mode }) => {
    // const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [react(), tsconfigPaths()],
        // server: {
        //     https: true,
        //     proxy: {
        //         '/api': {
        //             target: env.SERVER_BASE_URL,
        //             secure: false,
        //             changeOrigin: true,
        //             rewrite: (path) => path.replace(/^\/api/, ''),
        //         },
        //     },
        // },
    };
});
