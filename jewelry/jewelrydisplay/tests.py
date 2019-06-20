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
import tinify
import time
tinify.key = 'cZQYNbTg3DGa73dTnayvOz8Xrv2RHtkV'

def get_FileSize(filePath):
    fsize = os.path.getsize(filePath)
    fsize = fsize/float(1024*1024)
    return round(fsize,2)


# def img_zip(path,filename1,filename2):
#     image = cv2.imread(path+filename1)
#     res = cv2.resize(image, (1280, 960), interpolation=cv2.INTER_AREA)
#     cv2.imwrite(path+filename2, res)
#     imgE = Image.open(path+filename2)
#     imgEH = ImageEnhance.Contrast(imgE)
#     img1 = imgEH.enhance(2.8)
#     gray1 = img1.convert("L")
#     gary2 = gray1.filter(ImageFilter.DETAIL)
#     gary3 = gary2.point(lambda i: i * 0.9)
#     gary3.save(path+filename2)


def tinifyResize(path1, path2, h):
    time1 = time.time()
    source = tinify.from_file(path1)
    resized = source.resize(method="scale", height=h)
    resized.to_file(path2)
    time2 = time.time()
    print time2-time1


if __name__ == '__main__':



    img = Image.open(IMAGES_ROOT+'10/'+'test6.jpg')
    print img.mode
    # print get_FileSize(IMAGES_ROOT+'10/'+'test3.jpg')
    img = img.convert('P')
    w, h = img.size
    # rate = 1.0

    rate = 1.0

    rate = 1800.0/h
    print w, h, w*h
    w = int(w*rate)
    h = int(h*rate)
    print w, h, w*h
    img.resize((w, h)).save(IMAGES_ROOT+'thumbnail/'+'t6-P.jpg', format = 'JPEG')