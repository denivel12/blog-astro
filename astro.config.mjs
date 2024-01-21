import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Ontosys',
			logo: {
				light: '/src/assets/logo-light.png',
				dark: '/src/assets/logo-dark.png',
				replacesTitle: true,
			},
			favicon: '/images/favicon.ico',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', link: '/guides/example/' },
						{ label: 'Ontology', link: '/guides/ontology/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'Thesaurus',
					autogenerate: {directory: 'thesaurus'}
				},
			],
		}),
	],
});
