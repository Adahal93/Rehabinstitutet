# Bildkonvertering till 4:4 Format

Detta projekt innehåller script för att automatiskt konvertera bilder till 4x4 format (400x400 pixlar) specifikt för AffiliatePage.

## Användning

**Endast AffiliatePage använder 4x4-bilder.** Alla andra sidor använder originalbilderna från `src/assets/images/`.

## Script

### 1. `convert-to-4x4.sh` (Bash Script)
Enkelt bash-script för grundläggande konvertering.

**Användning:**
```bash
# Konvertera alla nya bilder i 4x4-mappen
./convert-to-4x4.sh

# Konvertera specifik bild i 4x4-mappen
./convert-to-4x4.sh min_bild.png
```

### 2. `convert-images.js` (Node.js Script)
Avancerat script med fler funktioner.

**Användning:**
```bash
# Konvertera alla nya bilder i 4x4-mappen
node convert-images.js

# Konvertera specifik bild i 4x4-mappen
node convert-images.js min_bild.png

# Uppdatera alla import-satser automatiskt
node convert-images.js --update-imports
```

## Arbetsflöde för nya AffiliatePage-bilder

### Steg 1: Lägg in bilden direkt i 4x4-mappen
Lägg din nya bild direkt i `src/assets/images/4x4/` mappen.

### Steg 2: Konvertera till 4:4
```bash
# Alternativ 1: Konvertera alla nya bilder i 4x4-mappen
node convert-images.js

# Alternativ 2: Konvertera specifik bild
node convert-images.js min_bild.png
```

### Steg 3: Uppdatera import-satser (automatiskt)
```bash
node convert-images.js --update-imports
```

### Steg 4: Använd bilden i AffiliatePage
```javascript
// Din import kommer automatiskt att peka på 4x4-mappen
import minBildImage from '../assets/images/4x4/min_bild.png';
```

## Exempel

### Lägg in en ny produktbild för AffiliatePage:
1. Kopiera `ny_produkt.png` direkt till `src/assets/images/4x4/`
2. Kör: `node convert-images.js ny_produkt.png`
3. Kör: `node convert-images.js --update-imports`
4. Använd bilden i AffiliatePage

### Konvertera flera bilder på en gång:
1. Lägg in alla nya bilder direkt i `src/assets/images/4x4/`
2. Kör: `node convert-images.js`
3. Kör: `node convert-images.js --update-imports`

## Filstruktur

```
src/assets/images/
├── vanliga_bilder.png          # Används av andra sidor
├── andra_bilder.png            # Används av andra sidor
└── 4x4/                        # Endast för AffiliatePage
    ├── hanteldyr.png           # AffiliatePage-bilder (400x400)
    ├── hantelbillig.png        # AffiliatePage-bilder (400x400)
    ├── gummiband.png           # AffiliatePage-bilder (400x400)
    └── nya_produkter.png       # Lägg in nya AffiliatePage-bilder här
```

## Nuvarande AffiliatePage-bilder

Följande bilder används på AffiliatePage och finns i 4x4-format:
- `hanteldyr.png`
- `hantelbillig.png`
- `gummibandhandtag.png`
- `gummiband.png`
- `kbstandard.png`
- `kbjusterbar.png`
- `kalciumvitd.png`

## Krav

- ImageMagick installerat: `brew install imagemagick`
- Node.js (för det avancerade scriptet)

## Tips

- **VIKTIGT**: Lägg in nya AffiliatePage-bilder direkt i `src/assets/images/4x4/` mappen
- Scripten konverterar endast bilder som finns i 4x4-mappen
- Scripten hoppar automatiskt över bilder som redan är 400x400
- Alla AffiliatePage-bilder konverteras till exakt 400x400 pixlar
- Bilderna behåller sina proportioner genom cropping
- Import-satser uppdateras automatiskt till att peka på 4x4-mappen
- **Andra sidor använder originalbilderna från `src/assets/images/`**

## Vad händer om jag lägger in en bild i fel mapp?

Om du av misstag lägger in en AffiliatePage-bild i `src/assets/images/` istället för `src/assets/images/4x4/`:

1. Flytta bilden till `src/assets/images/4x4/`
2. Kör scriptet för att konvertera den
3. Uppdatera import-satser 