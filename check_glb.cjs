const fs = require('fs');
const buffer = fs.readFileSync('public/bikes/mountain_bike.glb');
// find the JSON chunk. It's the first chunk after the 12-byte header.
const jsonLength = buffer.readUInt32LE(12);
const jsonChunkType = buffer.readUInt32LE(16);
if (jsonChunkType === 0x4E4F534A) { // 'JSON'
  const jsonStr = buffer.toString('utf8', 20, 20 + jsonLength);
  const gltf = JSON.parse(jsonStr);
  console.log('Nodes:', gltf.nodes.map(n => n.name));
  console.log('Materials:', gltf.materials.map(m => m.name));
}