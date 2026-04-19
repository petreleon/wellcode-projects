.PHONY: semafor-build semafor-run

semafor-build:
	docker build -t server-nginx-live -f Semafor/dockerfile Semafor

semafor-run:
	docker run -it --rm -p 8080:80 -v "$$(pwd)/Semafor/src:/usr/share/nginx/html" server-nginx-live
