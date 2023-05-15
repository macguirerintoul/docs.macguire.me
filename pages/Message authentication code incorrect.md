- [ ] turn this into. ablog post page on notion
[[Homelab]]
## pfsense settings

might be due to pfSense state table - adaptive scaling (System > Advanced > Firewall > Adaptive scaling) defaults to 60% of state size - i.e. gets to 60% and just starts killing stuff? maybe, testing rn
nope, still failed... but took longer?

- set to 5s: ran for 11 minutes
- set to 7200s: ran for... 8 minutes.........
- set to 1800... ran for 51 minutes........... what the heck

## downstairs network/router
- switching to Downstairs...

## asus router

- failed after a few minutes lol
	- kinda pointing to ubuntu NIC as the problem?

## old macbook -> pi

- works fine for 25 minutes........ going to bed i'll cehck if it completed in the morning..... wow.....
# replaced nic
wow.... it works............