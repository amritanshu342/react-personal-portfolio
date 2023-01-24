import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '1fe6ocdf',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skRwDlemaSKRGFUBlcRDzwNaIh2murHTsgL9IAwVvkv7ckMECMalTzqaoELfTW4yZLVn3bHwRh9rEZQIbfZ6ItGalZoqlbdV12K2xPDdZ1jOcOl7QGfIMLfGL2eN5MGbr7jgJJ97bsBllcACVC5u3TrxQ0NCSrpda8of8g7XWlnP6m76Pb5V',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
