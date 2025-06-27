#!/bin/bash
for folder in */; do
	for file in "$folder"*; do
		if [[ ! "$file" == *-* ]] && [[ ! -e "$file-thumb.jpg" ]]; then # files containing a "-" arent originals
			convert $file -resize 400x125\> -quality 65 "$file-thumb.jpg"
			# the height of the image thumbnails is 5rem (96px in my browser), but some are really wide
		fi
		if [[ ! "$file" == *-* ]] && [[ ! -e "$file-medium.jpg" ]]; then
                        convert $file -resize 600x1200\> -quality 75 "$file-medium.jpg"
			# at full screen, pics cover about a quarter of the screen, so 600 width should be fine
                fi
	done
done
