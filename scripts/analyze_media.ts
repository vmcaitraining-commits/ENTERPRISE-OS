import * as initialData from '../src/data/initialData';
import * as initialMedia from '../src/data/initialMedia';
import * as industryDetailedData from '../src/data/industryDetailedData';
import * as websiteContent from '../src/data/websiteContent';

function countMedia(obj: any): void {
  function traverse(value: any, key: string = '') {
    if (typeof value === 'string') {
      const isDataUri = value.startsWith('data:');
      const isHttp = value.startsWith('http');
      const isImagePath = value.match(/\.(jpg|png|svg|webp)$/i) || value.startsWith('/images');
      if (isDataUri || isHttp || isImagePath) {
         console.log(`FOUND MEDIA [${key}]: ${value.substring(0, 50)}...`);
      }
    } else if (Array.isArray(value)) {
      value.forEach(v => traverse(v, key));
    } else if (value !== null && typeof value === 'object') {
      for (const k of Object.keys(value)) {
        traverse(value[k], k);
      }
    }
  }

  traverse(obj);
}

console.log("== initialData ==");
countMedia(initialData);
console.log("== initialMedia ==");
countMedia(initialMedia);
console.log("== industryDetailedData ==");
countMedia(industryDetailedData);
console.log("== websiteContent ==");
countMedia(websiteContent);
