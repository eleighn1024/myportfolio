// scripts/optimize-images.js
import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, basename, extname } from 'path';

const INPUT_DIR = 'public/img';
const OUTPUT_DIR = 'public/img/optimized'; // Puedes cambiarlo si quieres separar originales y optimizados

// Extensiones soportadas
const IMAGE_EXTENSIONS = new Set([ '.jpg', '.jpeg', '.png', '.webp', '.tiff', '.avif' ]);

function isImage(file) {
  return IMAGE_EXTENSIONS.has(extname(file).toLowerCase());
}

async function optimizeImage(inputPath) {
  const filename = basename(inputPath, extname(inputPath));
  const info = await sharp(inputPath).metadata();
  const format = info.format;

  console.log(`🔧 Optimizando: ${basename(inputPath)} (${info.width}x${info.height})`);

  try {

    const resizeOptions = { width: 1200 };

    if (format !== 'jpeg') {
      await sharp(inputPath)
        .resize(resizeOptions)
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(join(OUTPUT_DIR, `${filename}.jpg`));
      console.log(`✅ JPEG generado: ${filename}.jpg`);
    }

    await sharp(inputPath)
      .resize(resizeOptions)
      .webp({ quality: 80 })
      .toFile(join(OUTPUT_DIR, `${filename}.webp`));
    console.log(`✅ WebP generado: ${filename}.webp`);

    if (format === 'png') {
      await sharp(inputPath)
        .resize(resizeOptions)
        .png({ compressionLevel: 6, force: true })
        .toFile(join(OUTPUT_DIR, `${filename}.png`));
      console.log(`✅ PNG optimizado: ${filename}.png`);
    }

  } catch (err) {
    console.error(`❌ Error procesando ${inputPath}:`, err.message);
  }
}

async function main() {
  console.log(`🚀 Optimizando imágenes en: ${INPUT_DIR}`);

  try {
    await mkdir(OUTPUT_DIR, { recursive: true });
  } catch (err) {
    console.error(`❌ No se pudo crear el directorio: ${OUTPUT_DIR}`, err.message);
    return;
  }

  let files;
  try {
    files = await readdir(INPUT_DIR);
  } catch (err) {
    console.error(`❌ No se pudo leer el directorio: ${INPUT_DIR}`, err.message);
    return;
  }

  const imageFiles = files.filter(isImage);

  if (imageFiles.length === 0) {
    console.log('⚠️ No se encontraron imágenes en:', INPUT_DIR);
    return;
  }

  console.log(`📦 Encontradas ${imageFiles.length} imágenes. Procesando...`);

  // Procesar una por una
  for (const file of imageFiles) {
    const inputPath = join(INPUT_DIR, file);
    await optimizeImage(inputPath);
  }

  console.log('✨ ¡Todas las imágenes han sido optimizadas con sharp!');
}

main().catch(console.error);
