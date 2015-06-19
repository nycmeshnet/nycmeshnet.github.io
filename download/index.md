---
layout: post
title: "Download"
---

We currently support two different types of routers. A long distance directional router, the [Ubiquiti NanoStation NSM5](http://www.amazon.com/s/url=search-alias%3Daps&field-keywords=Ubiquiti+NSM5) and a small indoor [TP-Link router TL-WR842ND.](http://www.amazon.com/s/url=search-alias%3Daps&field-keywords=WR842ND). 

**TP-Link TL-WR842ND instructions**

* Download the WR842N binary image to your computer. If you have a newly purchased router then you need the "factory" binary- [TL-WR842N-v2 factory download](http://nycmeshnet.github.io/download/WR842N.html). (For upgrades see below)
* Connect to the router via Wi-Fi. It has a name like "TP-LINK_ABC123"
* Enter the "wireless password/pin" that is printed on the bottom of the router e.g. "12341234"
* In your browser, go to 192.168.0.1
* Enter name: admin, pwd: admin
* Click System Tools>Firmware upgrade
* Click "choose file" and select the image you downloaded and click "upgrade"

Wait five minutes or more and connect to the router via Wi-Fi. It now has a SSID name like "nycmesh 1a2b" and a random IP of the form 10.x.x.x

**NanoStation NSM5 instructions**

* Download the NSM5 "factory" binary image to your computer. If you have a new NSM5 you will want the XW image. If you have one from 2014 or earlier you will need the XM image (if unsure download and try both).
* Plug an ethernet cable from POE on the power adapter to "main" on the NSM5
* Plug LAN on the adapter to your computer
* Turn off Wi-Fi on your computer
* Open Network Prefs (or equivalant)
* Connect by ethernet using DHCP with manual address e.g. 192.168.1.11
* go to 192.168.1.20 in your browser
* You will get https warning "your connection is not private" or some such
* click "advanced" and "proceed to 192.168.1.20"
* Enter ubnt, ubnt, USA, [x] agree to terms, login
* On the tabbed panel select "System"
* Click "Upload Firmware" <choose file>
* Select the M5-XW factory image you downloaded- you will get a "third-party" warning.
* Click "Update"
	
Wait five minutes or more and connect to the router via Wi-Fi. It now has a SSID name like "nycmesh 1a2b" and a random IP of the form 10.x.x.x

**Upgrades**

The "factory" binaries are for new routers or routers still running their original software.
Upgrades are when your router is already running nycmesh/qMp or another version of OpenWrt.

[WR842N upgrade download](http://nycmeshnet.github.io/download/WR842N-upgrade.html)




 

