docker build --no-cache -f SQL\Dockerfile.PostgreSql -t zapasnojj_postamat/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t zapasnojj_postamat/app ../..
