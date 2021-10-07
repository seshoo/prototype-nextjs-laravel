up:
	docker-compose up -d
stop:
	docker-compose stop
down:
	docker-compose down
n_reload:
	docker exec prototype_nginx nginx -s reload
