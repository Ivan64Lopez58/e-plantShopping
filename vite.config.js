import { defineConfig } from "vite";

export default defineConfig({
  base: "/", // Base URL si es que usas el dominio raíz en Railway
  build: {
    outDir: "dist", // El directorio de salida donde los archivos de producción serán generados
  },
});
