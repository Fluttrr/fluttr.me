#!/bin/bash
for folder in */; do
	for file in "$folder"*; do
		if [[ ! "$file" == *thumb* ]] && [[ ! -e "$file-thumb.jpg" ]]; then
			convert $file -resize 250x250 -quality 75 "$file-thumb.jpg"
		fi
	done
done
