import { ceo } from './ceo';
import { sales } from './sales';
import { marketing } from './marketing';
import { customerService } from './customerService';
import { hr } from './hr';
import { finance } from './finance';
import { voice } from './voice';
import { workflow } from './workflow';
import { rag } from './rag';

export const copilots = {
  ceo,
  sales,
  marketing,
  'customer-service': customerService,
  hr,
  finance,
  voice,
  workflow,
  rag
};
