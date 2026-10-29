// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// Dominio del cliente. Pendiente: la ruta final de la landing (si va en subcarpeta, agregar `base`)
	site: 'https://supermaterialesregiomontanos.com',
	// Una sola página: el CSS en línea evita una petición que bloquea el primer render
	build: { inlineStylesheets: 'always' },
});
