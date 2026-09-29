import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// Configuração compartilhada pelo servidor de desenvolvimento, build e Vitest.
export default defineConfig({
  // Habilita o processamento de JSX/React pelo Vite.
  plugins: [react()],
  // URLs relativas funcionam no subcaminho do repositório no GitHub Pages.
  base: './',
  test: {
    // jsdom simula APIs do navegador para os testes executados no Node.
    environment: 'jsdom',
    globals: true,
  },
});
