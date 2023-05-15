# Apache

## Check version of Apache

```zsh
httpd -v
```

## Enable `.htaccess` files

```zsh
sudo vi /etc/httpd/conf/httpd.conf
# Under <Directory /var/www/html>, set AllowOverride to All
sudo service httpd restart
```

[mod_rewrite Apache CentOS | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-set-up-mod_rewrite-for-apache-on-centos-7)

## Set up Basic Authentication
```apache
# Htpasswd enable directories
<Directory "/var/www/html/internal">
  AuthType Basic
  AuthName "Authentication Required"
  AuthUserFile "/etc/httpd/conf/.htpasswd"
  Require valid-user

  Order allow,deny
  Allow from all
</Directory>

<Directory "/usr/share/phpMyAdmin">
  AuthType Basic
  AuthName "Authentication Required"
  AuthUserFile "/etc/httpd/conf/.htpasswd"
  Require valid-user

  Order allow,deny
  Allow from all
</Directory>
```
https://www.server-world.info/en/note?os=CentOS_8&p=httpd&f=7