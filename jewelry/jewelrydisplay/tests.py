# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import shutil
import os

# Create your tests here.
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

IMAGES_ROOT = os.path.join(BASE_DIR, "static/images/")

from PIL import Image
import os
import os.path
import sys


if __name__ == '__main__':

    img = Image.open(IMAGES_ROOT+'10/'+'534917.jpg')
    w, h = img.size
    rate = 1.0
    if h>1080:
        rate = 1080.0/h
    print w, h, w*h
    w = int(w*rate)
    h = int(h*rate)
    print w, h, w*h
    img.resize((w, h)).save(IMAGES_ROOT+'thumbnail/'+'t1.jpg', format = 'JPEG')