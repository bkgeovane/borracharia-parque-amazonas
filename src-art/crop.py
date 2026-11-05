import sys
from PIL import Image
import numpy as np
src, names, out = sys.argv[1], sys.argv[2].split(','), sys.argv[3]
im = Image.open(src).convert('RGB'); a = np.asarray(im).astype(int).sum(2)
W,H = im.size
def cuts(prof, n, L):
    # dark lines: lowest mean brightness near expected positions
    res=[0]
    for k in range(1,n):
        e=int(L*k/n); w=int(L*0.06)
        seg=prof[e-w:e+w]; res.append(e-w+int(np.argmin(seg)))
    res.append(L); return res
xs=cuts(a.mean(0),4,W); ys=cuts(a.mean(1),3,H)
print(W,H,xs,ys)
i=0
for r in range(3):
    for c in range(4):
        pad=8
        box=(xs[c]+pad,ys[r]+pad,xs[c+1]-pad,ys[r+1]-pad)
        t=im.crop(box)
        t.thumbnail((640,640)); t.save(f"{out}/{names[i]}.webp",quality=80); i+=1
