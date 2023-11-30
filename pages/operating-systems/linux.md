# Linux
## Manage services 

```zsh
sudo service $SERVICE [start|stop|enable|disable|restart]

# Examples using Apache
sudo service httpd start # or sudo apachectl start
sudo service httpd enable
sudo service httpd restart # or sudo apachectl restart
```

## Users

### Add user with a group

A group will automatically be created for the user (e.g. `mtr:mtr`); `-G` will add them to additional (existing) groups.

```zsh
???

# Options
-G # specify comma-separated groups to add the user to
-p # password for the new user (needs to go in encrypted)
```

### List users

```zsh
cat /etc/passwd
```

### Switch to user

```zsh
su - $USER # the - puts you into the user's home folder
# omitting user defaults to root
```