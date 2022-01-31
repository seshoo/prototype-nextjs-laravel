up:
	docker-compose up -d
stop:
	docker-compose stop
down:
	docker-compose down
n_reload:
	docker exec nginx nginx -s reload
