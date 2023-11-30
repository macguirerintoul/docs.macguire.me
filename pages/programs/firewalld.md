# firewalld

`firewalld` manages access to the `ssh` service, so changing SSH port in `sshd_config` might need to also be done in `firewalld`

## Enable access via HTTP & HTTPS

```bash
sudo systemctl enable firewalld
sudo systemctl start firewalld
sudo firewall-cmd --zone=public --add-service=http
sudo firewall-cmd --zone=public --add-service=https
sudo firewall-cmd --reload
```

[](https://linuxconfig.org/redhat-8-open-http-port-80-and-https-port-443-with-firewalld)

## Failed to start firewalld.service: Unit is masked.

```bash
sudo systemctl unmask firewalld
```

[Failed to start firewalld service unit is masked - How we fix it!](https://bobcares.com/blog/failed-to-start-firewalld-service-unit-is-masked/)

## WARNING: AllowZoneDrifting is enabled.

```bash
sudo vi /etc/firewalld/firewalld.conf
# Set AllowZoneDrifting to no
```

[How to Fix "AllowZoneDrifting is enabled. This is considered an insecure configuration option..."](https://summalai.com/?p=2740)