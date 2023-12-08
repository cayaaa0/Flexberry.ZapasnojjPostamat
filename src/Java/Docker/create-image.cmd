docker build --no-cache -f SQL\Dockerfile.PostgreSql -t zapasnojj_postamat-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t zapasnojj_postamat-java/app ../../..
