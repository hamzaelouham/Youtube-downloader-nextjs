## build docker image

docker build -t hamzaelouham/nextjs-yd-app:latest .

## push docker image

docker push hamzaelouham/nextjs-yd-app:latest

## run docker image

docker run -p 3000:3000 -e PORT=3000 hamzaelouham/nextjs-yd-app
