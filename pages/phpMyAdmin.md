# Install phpMyAdmin

```bash
# Install
sudo yum install phpMyAdmin
# Configure remote access:
# Directly within <IfModule mod_authz_core.c>, set `Require all granted`
sudo vi /etc/httpd/conf.d/phpMyAdmin.conf
# Restart Apache
sudo service httpd restart
```

[How To Install phpMyAdmin on CentOS/RHEL 7/6 - TecAdmin](https://tecadmin.net/install-phpmyadmin-on-centos/)