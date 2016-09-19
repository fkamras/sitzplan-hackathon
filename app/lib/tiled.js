import pako from 'pako';

import { chunk, map } from 'lodash';

const toUint32 = (arr) => {
  return map(chunk(arr, 4), ([a, b, c ,d]) => {
    return a + (b << 8) + (c << 16) + (d << 24);
  });
};

const parseLayer = (layer) => {
  const { data } = layer;
  const compressedData = atob(data);
  const uncompressedData = pako.inflate(compressedData);
  const parsedData = toUint32(uncompressedData);

  return {
    ...layer,
    data: parsedData
  };
};

const parse = (jsonMap) => {
  const layers = map(jsonMap.layers, parseLayer);

  return {
    ...jsonMap,
    layers
  };
};

const tiled = {
  parse
};

export default tiled;
