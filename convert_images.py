from PIL import Image
from pathlib import Path

path_list = []
image_formats = ['*.png', '*.jpg', '*.jpeg', '*.gif']
blog_image_path = './assets/images/blogs/'
project_image_path = './assets/images/projects/'

def convertImage(posix_path):
    image = Image.open(f'{posix_path.parent}/{posix_path.name}')
    if image.mode == 'RGBA': # Preserves transparency
        image = image.convert('RGBA')
    else:
        image = image.convert('RGB')
    image.save(f'{posix_path.parent}/{posix_path.stem}.webp', 'webp')

def main():
    for format in image_formats:
        path_list.extend(Path(blog_image_path).glob(f'**/{format}'))
        path_list.extend(Path(project_image_path).glob(f'**/{format}'))

    for path in path_list:
        convertImage(path)

main()
