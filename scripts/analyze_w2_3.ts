import { WebsiteContentSourceExtractor } from '../src/modules/website-management/infrastructure/source-extractor';
import { websiteManifest } from '../src/modules/website-management/domain/website-manifest';
import { determineFieldType } from '../src/modules/website-management/infrastructure/extractor-utils';

function countMedia(obj: any): { images: number; videos: number } {
  let images = 0;
  let videos = 0;

  function traverse(value: any, key: string = '') {
    if (typeof value === 'string') {
      const isDataUri = value.startsWith('data:');
      const isHttp = value.startsWith('http');
      const isImagePath = value.match(/\.(jpg|png|svg|webp)$/i) || value.startsWith('/images');
      if (isDataUri || isHttp || isImagePath) {
        if (key.toLowerCase().includes('video') || value.includes('youtube') || value.match(/\.(mp4|webm)$/i)) {
          videos++;
        } else {
          images++;
        }
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
  return { images, videos };
}

async function run() {
  const extractor = new WebsiteContentSourceExtractor();
  const entries = await extractor.extract();

  let canonicalPages = 0;
  let virtualGroups = 0;
  let sections = 0;

  websiteManifest.forEach(p => {
    if (p.id === 'global-shared') virtualGroups++;
    else canonicalPages++;
    sections += p.sections.length;
  });
  
  let fieldsDiscovered = entries.length;
  let actualValuesExtracted = 0;
  let editable = 0;
  let sourceNotYetNormalized = 0;
  let placeholderOnly = 0;
  
  let imageReferences = 0;
  let videoReferences = 0;

  let viActualValues = 0;
  let enActualValues = 0;
  let zhActualValues = 0;
  let fallbackOnly = 0;

  entries.forEach(e => {
    if (e.sourceType !== 'UNKNOWN' && e.fieldKey !== 'placeholder') {
      actualValuesExtracted++;
      editable++;
      
      if (e.vi) viActualValues++;
      
      if (e.sourceType !== 'I18N') {
        fallbackOnly++;
      } else {
        if (e.en && e.en !== e.vi) enActualValues++; 
        else if (e.en) fallbackOnly++;
        
        if (e.zhCN && e.zhCN !== e.vi) zhActualValues++;
      }

      // Count media
      const media = countMedia(e.vi);
      imageReferences += media.images;
      videoReferences += media.videos;
    } else {
      sourceNotYetNormalized++;
      placeholderOnly++;
    }
  });

  const out = {
    canonicalPages,
    virtualGroups,
    sections,
    fieldsDiscovered,
    actualValuesExtracted,
    editable,
    partiallyEditable: 0,
    readOnlySource: 0,
    sourceNotYetNormalized,
    placeholderOnly,
    unclassified: 0,
    imageReferences,
    videoReferences,
    viActualValues,
    enActualValues,
    zhActualValues,
    fallbackOnly
  };

  console.log(JSON.stringify(out, null, 2));
}

run().catch(console.error);
