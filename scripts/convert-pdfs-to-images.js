import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from 'canvas';

// Importar pdfjs-dist de forma compatible con Node.js
const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const certificadosDir = path.join(__dirname, '../static/certificados');

async function convertPdfToImage(pdfPath, outputPath) {
  try {
    const fileBuffer = fs.readFileSync(pdfPath);
    const data = new Uint8Array(fileBuffer);
    const pdf = await pdfjsLib.getDocument({ data }).promise;
    const page = await pdf.getPage(1); // Primera página
    
    const viewport = page.getViewport({ scale: 2.0 }); // Escala 2x para mejor calidad
    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext('2d');
    
    await page.render({
      canvasContext: context,
      viewport: viewport
    }).promise;
    
    const imageBuffer = canvas.toBuffer('image/jpeg', { quality: 0.9 });
    fs.writeFileSync(outputPath, imageBuffer);
    console.log(`✓ Convertido: ${path.basename(pdfPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Error al convertir ${path.basename(pdfPath)}:`, error.message);
  }
}

async function main() {
  const files = fs.readdirSync(certificadosDir);
  const pdfFiles = files.filter(file => file.endsWith('.pdf'));
  
  console.log(`Encontrados ${pdfFiles.length} archivos PDF para convertir...\n`);
  
  for (const pdfFile of pdfFiles) {
    const pdfPath = path.join(certificadosDir, pdfFile);
    const imageName = pdfFile.replace('.pdf', '.jpg');
    const imagePath = path.join(certificadosDir, imageName);
    
    // Solo convertir si la imagen no existe
    if (!fs.existsSync(imagePath)) {
      await convertPdfToImage(pdfPath, imagePath);
    } else {
      console.log(`⊘ Ya existe: ${imageName}`);
    }
  }
  
  console.log('\n✓ Conversión completada!');
}

main().catch(console.error);

