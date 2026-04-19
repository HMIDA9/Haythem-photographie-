import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const galleryDir = path.resolve(__dirname, '../artifacts/haythem-photography/public/gallery');

async function processImages() {
  if (!fs.existsSync(galleryDir)) {
    console.error('Gallery directory does not exist:', galleryDir);
    process.exit(1);
  }

  const files = fs.readdirSync(galleryDir).filter(f => f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.jpg'));
  console.log(`Found ${files.length} images to compress...`);
  
  let totalSaved = 0;

  for (const file of files) {
    const filePath = path.join(galleryDir, file);
    const tempPath = path.join(galleryDir, 'tmp_' + file);
    
    try {
      const originalStats = fs.statSync(filePath);
      const originalMB = originalStats.size / 1024 / 1024;
      
      // We skip if it's already suspiciously small (e.g., under 300KB)
      if (originalStats.size < 300 * 1024) {
        console.log(`Skipping ${file} (already small: ${originalMB.toFixed(2)} MB)`);
        continue;
      }
      
      console.log(`Processing ${file} (Original: ${originalMB.toFixed(2)} MB)...`);
      
      await sharp(filePath)
        .resize({ width: 1920, withoutEnlargement: true }) // standard max web width
        .jpeg({ quality: 80, progressive: true, mozjpeg: true }) // MozJPEG for better compression
        .toFile(tempPath);
        
      const newStats = fs.statSync(tempPath);
      const newMB = newStats.size / 1024 / 1024;
      
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      
      const saved = originalMB - newMB;
      totalSaved += saved;
      
      console.log(`  -> Done: ${newMB.toFixed(2)} MB (Saved: ${saved.toFixed(2)} MB)`);
    } catch(err) {
      console.error(`Error processing ${file}: `, err.message);
      // Clean up temp file if failed
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
    }
  }
  
  console.log(`\nCompression complete! You saved a total of ${totalSaved.toFixed(2)} MB!`);
}

processImages();
