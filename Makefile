install:
	npm ci && make -C frontend install

start_server:
	npm run start

build:
	npm run build

start_app:
	make -C frontend start

lint:
	make -C frontend lint

fix:
	make -C frontend fix

start:
	npx start-server -s ./frontend/build