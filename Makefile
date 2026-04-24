.PHONY: semafor-build semafor-run butonul-ascuns-build butonul-ascuns-run

semafor-build:
	docker build -t server-nginx-live -f Semafor/dockerfile Semafor

semafor-run:
	docker run -it --rm -p 8080:80 -v "$$(pwd)/Semafor/src:/usr/share/nginx/html" server-nginx-live

butonul-ascuns-build:
	docker build -t butonul-ascuns-react -f Butonul-ascuns/dockerfile Butonul-ascuns

butonul-ascuns-run:
	@PORT=3000; \
	while lsof -Pi :$$PORT -sTCP:LISTEN -t >/dev/null 2>&1; do \
		PORT=$$((PORT + 1)); \
	done; \
	echo "Starting React on http://localhost:$$PORT"; \
	docker run -it --rm -p $$PORT:3000 -v "$$(pwd)/Butonul-ascuns/src:/app" butonul-ascuns-react
