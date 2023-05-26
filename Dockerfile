FROM nginx

COPY images/ /app/images/
COPY index.html /usr/share/nginx/html/
COPY 2ndpage.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

EXPOSE 80
