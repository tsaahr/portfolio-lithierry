import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://seusite.com.br/',
      lastModified: new Date(),
    },
    {
      url: 'https://seusite.com.br/projetos',
      lastModified: new Date(),
    },
  ];
}
