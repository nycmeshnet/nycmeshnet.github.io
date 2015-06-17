---
layout: post
title: "Download"
---

We currently support two different types of routers. A long distance directional router, the [Ubiquiti NanoStation NSM5](http://www.amazon.com/s/url=search-alias%3Daps&field-keywords=Ubiquiti+NSM5) and a small indoor [TP-Link router TL-WR842ND.](http://www.amazon.com/s/url=search-alias%3Daps&field-keywords=WR842ND). 

**TL-WR842ND instructions**

The WR842ND we have used were all Ver:2.1 or Ver:2.3, other 2.x versions should work. Let us know which one you have.

* Download the WR842N binary image to your computer. If you have a newly purchased router then you need the "factory" binary- [TL-WR842N-v2 factory download](TP-Link-TL-WR842N-v2-nycmesh-factory-20150612_1711.bin). (For upgrades see below)
* Connect to the router via Wi-Fi. It has a name like "TP-LINK_ABC123"
* Enter the "wireless password/pin" that is printed on the bottom of the router e.g. "12341234"
* In your browser, go to 192.168.0.1
* Enter name: admin, pwd: admin
* Click System Tools>Firmware upgrade
* Click "choose file" and select the image you downloaded and click "upgrade"

Wait five minutes or more and connect to the router via Wi-Fi. It now has a SSID name like "nycmesh 1a2b" and a random IP of the form 10.x.x.x

**NSM5 instructions**

There are two types of NSM5s. If you buy a new one it will be an XW. If you buy a second-hand one on eBay it will likely be the older XM. Both are good, they just need different images. It is not possible to put the wrong image on as you will just get an alert.

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
* Click Upload Firmware <choose file>
* Select the M5-XW factory image you downloaded- you will get a "third-party" warning.
* Click <update>
	
Wait five minutes or more and connect to the router via Wi-Fi. It now has a SSID name like "nycmesh 1a2b" and a random IP of the form 10.x.x.x

**Upgrades**

The "factory" binaries are for new routers or routers still running their original software.
Upgrades are when your router is already running nycmesh/qMp or another version of OpenWrt.

[WR842N upgrade download](TP-Link-TL-WR842N-v2-nycmesh-sysupgrade-20150612_1711.bin)




 

