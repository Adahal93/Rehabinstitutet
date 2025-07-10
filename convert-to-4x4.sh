#!/bin/bash

# Script för att konvertera bilder till 4x4 format
# Användning: ./convert-to-4x4.sh [bildnamn]
# Lägg in bilder direkt i src/assets/images/4x4/ mappen

# Skapa 4x4 mappen om den inte finns
mkdir -p src/assets/images/4x4

# Funktion för att kontrollera om en bild redan är 400x400
is_already_4x4() {
    local image_path="$1"
    if command -v magick >/dev/null 2>&1; then
        local dimensions=$(magick identify -format "%wx%h" "$image_path" 2>/dev/null)
        if [ "$dimensions" = "400x400" ]; then
            return 0  # True - redan 400x400
        fi
    fi
    return 1  # False - inte 400x400
}

# Funktion för att konvertera en bild
convert_image() {
    local input_file="$1"
    local output_file="$2"
    
    if [ ! -f "$input_file" ]; then
        echo "❌ Fel: Filen $input_file finns inte"
        return 1
    fi
    
    echo "🔄 Konverterar $(basename "$input_file") till 4x4 format..."
    
    # Konvertera bilden till 400x400
    magick "$input_file" -resize 400x400^ -gravity center -extent 400x400 "$output_file"
    
    if [ $? -eq 0 ]; then
        echo "✅ Konvertering lyckades: $(basename "$output_file")"
    else
        echo "❌ Fel vid konvertering av $(basename "$input_file")"
        return 1
    fi
}

# Om ett filnamn anges som argument
if [ $# -eq 1 ]; then
    input_file="src/assets/images/4x4/$1"
    output_file="src/assets/images/4x4/$1"
    
    if [ ! -f "$input_file" ]; then
        echo "❌ Fel: Filen $1 finns inte i src/assets/images/4x4/"
        echo "💡 Tips: Lägg in bilden i src/assets/images/4x4/ mappen först"
        exit 1
    fi
    
    if is_already_4x4 "$input_file"; then
        echo "⏭️  $1 är redan 400x400"
    else
        # Skapa temporär fil för konvertering
        temp_file="src/assets/images/4x4/temp_$1"
        mv "$input_file" "$temp_file"
        
        if convert_image "$temp_file" "$output_file"; then
            rm "$temp_file"
        else
            # Återställ originalfilen om konvertering misslyckades
            mv "$temp_file" "$input_file"
        fi
    fi
    exit $?
fi

# Annars, konvertera alla bilder i 4x4-mappen som inte redan är 400x400
echo "🔍 Letar efter bilder i 4x4-mappen att konvertera..."

for file in src/assets/images/4x4/*.png src/assets/images/4x4/*.jpg src/assets/images/4x4/*.jpeg src/assets/images/4x4/*.webp; do
    if [ -f "$file" ]; then
        filename=$(basename "$file")
        
        # Kontrollera om bilden redan är 400x400
        if is_already_4x4 "$file"; then
            echo "⏭️  Hoppar över $filename (redan 400x400)"
        else
            # Skapa temporär fil för konvertering
            temp_file="src/assets/images/4x4/temp_$filename"
            mv "$file" "$temp_file"
            
            if convert_image "$temp_file" "$file"; then
                rm "$temp_file"
            else
                # Återställ originalfilen om konvertering misslyckades
                mv "$temp_file" "$file"
            fi
        fi
    fi
done

echo "🎉 Konvertering klar!"
echo ""
echo "💡 Tips:"
echo "   - Lägg in nya bilder direkt i src/assets/images/4x4/"
echo "   - Kör detta script för att konvertera dem"
echo "   - Uppdatera import-satser i din kod att peka på 4x4-mappen" 