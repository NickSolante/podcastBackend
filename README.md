# podcastBackend

initialize docker postgres first

//starting Postgres server in docker
docker run --name some-postgres -e 'POSTGRES_PASSWORD=mysecretpassword' -e 'POSTGRES_USER
=admin' -d -p 5432:5432 postgres:latest
