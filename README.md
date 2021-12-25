docker run api
docker run -tid --name api-dev -p 8000:8000 -v /home/david/workspace/eu-mgr-fullstack/server:/app api

docker run api prod
docker run -tid --name api-prod -p 8000:8000 api