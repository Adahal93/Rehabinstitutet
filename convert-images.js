#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Konfiguration
const IMAGES_DIR = 'src/assets/images';
const OUTPUT_DIR = 'src/assets/images/4x4';
const SIZE = 400;

// Skapa output-mappen om den inte finns
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Funktion för att konvertera en bild
function convertImage(inputPath, outputPath) {
    try {
        console.log(`🔄 Konverterar ${path.basename(inputPath)} till 4x4 format...`);
        
        const command = `magick "${inputPath}" -resize ${SIZE}x${SIZE}^ -gravity center -extent ${SIZE}x${SIZE} "${outputPath}"`;
        execSync(command, { stdio: 'inherit' });
        
        console.log(`✅ Konvertering lyckades: ${path.basename(outputPath)}`);
        return true;
    } catch (error) {
        console.error(`❌ Fel vid konvertering av ${path.basename(inputPath)}:`, error.message);
        return false;
    }
}

// Funktion för att hitta alla bildfiler i 4x4 mappen
function findImageFilesIn4x4() {
    const extensions = ['.png', '.jpg', '.jpeg', '.webp'];
    const files = [];
    
    if (fs.existsSync(OUTPUT_DIR)) {
        const items = fs.readdirSync(OUTPUT_DIR);
        
        for (const item of items) {
            const ext = path.extname(item).toLowerCase();
            if (extensions.includes(ext)) {
                files.push(item);
            }
        }
    }
    
    return files;
}

// Funktion för att kontrollera om en bild redan är 400x400
function isAlready4x4(imagePath) {
    try {
        const command = `magick identify -format "%wx%h" "${imagePath}"`;
        const result = execSync(command, { encoding: 'utf8' }).trim();
        return result === '400x400';
    } catch (error) {
        return false;
    }
}

// Funktion för att uppdatera import-satser i en fil
function updateImportsInFile(filePath, imageName) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const oldImport = `from '../assets/images/${imageName}'`;
        const newImport = `from '../assets/images/4x4/${imageName}'`;
        
        if (content.includes(oldImport)) {
            content = content.replace(new RegExp(oldImport.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newImport);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`📝 Uppdaterade import i ${path.basename(filePath)}`);
            return true;
        }
    } catch (error) {
        console.error(`❌ Fel vid uppdatering av ${filePath}:`, error.message);
    }
    return false;
}

// Funktion för att hitta och uppdatera alla import-satser
function updateAllImports(imageName) {
    const jsFiles = [
        'src/views/AffiliatePage.js',
        'src/views/HomePage.js',
        'src/views/TjansterPage.js',
        'src/views/ErgonomiPage.js',
        'src/views/HemrehabPage.js',
        'src/views/KompetensPage.js',
        'src/views/OmOssPage.js',
        'src/views/OnlineVisitPage.js',
        'src/views/ProgramPage.js',
        'src/views/TeamPage.js'
    ];
    
    let updated = false;
    for (const file of jsFiles) {
        if (fs.existsSync(file)) {
            if (updateImportsInFile(file, imageName)) {
                updated = true;
            }
        }
    }
    return updated;
}

// Huvudfunktion
function main() {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
        // Konvertera alla bilder i 4x4 mappen som inte redan är 400x400
        console.log('🔍 Letar efter bilder i 4x4-mappen att konvertera...\n');
        
        const imageFiles = findImageFilesIn4x4();
        let convertedCount = 0;
        
        for (const imageFile of imageFiles) {
            const imagePath = path.join(OUTPUT_DIR, imageFile);
            
            // Kontrollera om bilden redan är 400x400
            if (!isAlready4x4(imagePath)) {
                // Skapa en temporär fil för konvertering
                const tempPath = path.join(OUTPUT_DIR, `temp_${imageFile}`);
                fs.renameSync(imagePath, tempPath);
                
                if (convertImage(tempPath, imagePath)) {
                    convertedCount++;
                    // Ta bort temporär fil
                    fs.unlinkSync(tempPath);
                } else {
                    // Återställ originalfilen om konvertering misslyckades
                    fs.renameSync(tempPath, imagePath);
                }
            } else {
                console.log(`⏭️  Hoppar över ${imageFile} (redan 400x400)`);
            }
        }
        
        console.log(`\n🎉 Konvertering klar! ${convertedCount} bilder konverterade.`);
        
    } else if (args[0] === '--update-imports') {
        // Uppdatera alla import-satser för befintliga 4x4 bilder
        console.log('🔍 Uppdaterar import-satser...\n');
        
        const imageFiles = findImageFilesIn4x4();
        let updatedCount = 0;
        
        for (const imageFile of imageFiles) {
            if (updateAllImports(imageFile)) {
                updatedCount++;
            }
        }
        
        console.log(`\n🎉 Import-uppdatering klar! ${updatedCount} filer uppdaterade.`);
        
    } else {
        // Konvertera specifik bild i 4x4 mappen
        const imageName = args[0];
        const imagePath = path.join(OUTPUT_DIR, imageName);
        
        if (!fs.existsSync(imagePath)) {
            console.error(`❌ Fel: Filen ${imageName} finns inte i ${OUTPUT_DIR}`);
            console.log(`💡 Tips: Lägg in bilden i ${OUTPUT_DIR} mappen först`);
            process.exit(1);
        }
        
        if (!isAlready4x4(imagePath)) {
            // Skapa en temporär fil för konvertering
            const tempPath = path.join(OUTPUT_DIR, `temp_${imageName}`);
            fs.renameSync(imagePath, tempPath);
            
            if (convertImage(tempPath, imagePath)) {
                // Ta bort temporär fil
                fs.unlinkSync(tempPath);
                console.log('\n💡 Tips: Kör "node convert-images.js --update-imports" för att uppdatera import-satser');
            } else {
                // Återställ originalfilen om konvertering misslyckades
                fs.renameSync(tempPath, imagePath);
            }
        } else {
            console.log(`⏭️  ${imageName} är redan 400x400`);
        }
    }
}

// Kör scriptet
main(); 