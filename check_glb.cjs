const fs = require('fs');
const buffer = fs.readFileSync('public/bikes/mountain_bike.glb');
const jsonLength = buffer.readUInt32LE(12);
const jsonChunkType = buffer.readUInt32LE(16);
if (jsonChunkType === 0x4E4F534A) { // 'JSON'
  const jsonStr = buffer.toString('utf8', 20, 20 + jsonLength);
  const gltf = JSON.parse(jsonStr);
  console.log(gltf.materials.map(m => m.name));
}