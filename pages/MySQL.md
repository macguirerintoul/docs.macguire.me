# MySQL

## Dump all databases to a file

```zsh
mysqldump -v -u root -p --all-databases --result-file=alldb.sql
```

## Import a file to mysql

⚠️ This will overwrite everything.

```zsh
mysql -v -u root -p < alldb.sql
```
