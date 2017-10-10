
from ppc64le/nginx

copy src /usr/share/nginx/
copy src/html/index.html /usr/share/nginx/html/index.html
expose 80
