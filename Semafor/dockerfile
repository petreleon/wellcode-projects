# Folosim versiunea ușoară (alpine) a Nginx
FROM nginx:alpine

# Setăm directorul unde Nginx caută fișierele de servit
WORKDIR /usr/share/nginx/html

# Nu copiem fișierele aici (COPY .) dacă vrem doar live mount, 
# dar e bine să știm că acesta este portul standard
EXPOSE 80
