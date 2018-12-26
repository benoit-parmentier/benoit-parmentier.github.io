FROM nginx
COPY index.html /usr/share/nginx/html
COPY meals.js /usr/share/nginx/html
COPY favicon.ico /usr/share/nginx/html