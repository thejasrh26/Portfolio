from rembg import remove
from PIL import Image
import sys

try:
    input_path = 'public/profile.jpg'
    output_path = 'public/profile-nobg.png'

    print(f"Opening {input_path}...")
    input_img = Image.open(input_path)
    print("Removing background...")
    output_img = remove(input_img)
    print(f"Saving to {output_path}...")
    output_img.save(output_path)
    print("Done!")
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)
