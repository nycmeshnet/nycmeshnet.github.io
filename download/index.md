---
layout: post
title: "Join, Order, Download and Flash"
---
Please read our [FAQ](../faq) before joining the mesh.

**Join the mesh**  
We will need to add your router to our list of nodes, so first enter a [new node request](../join) for each location.

**Order a router**    
We currently support two different models of routers. A long distance directional Ubiquiti NSM5 5GHz router (~$95), and a small indoor TP-Link TL-WR842ND 2.4GHz router(~$33).

Buy on Amazon:   
[Ubiquiti NanoStation NSM5](http://www.amazon.com/dp/B0049AVWAO/?tag=nsm5-nycmesh-20)  
[TP-Link router TL-WR842ND](http://www.amazon.com/dp/B006E04T9I/?tag=tl-wr842nd-nycmesh-20)  

Buy at B&H: (free delivery)   
[Ubiquiti NanoStation NSM5](http://www.bhphotovideo.com/c/product/1049768-REG/)  
[TP-Link router TL-WR842ND](http://www.bhphotovideo.com/c/product/855244-REG/)  


**Download and flash your router**

**TP-Link TL-WR842ND instructions**

* For a new WR842N, download this to your computer-  
  [TL-WR842N-v2  download](http://nycmeshnet.github.io/download/WR842N.html)  
  (For upgrades see below)
* Connect to the router via Wi-Fi. It has a name like "TP-LINK_ABC123"
* Enter the "wireless password/pin" that is printed on the bottom of the router e.g. "12341234"
* In your browser, go to 192.168.0.1
* Enter name: admin, pwd: admin
* Click System Tools>Firmware upgrade
* Click "choose file" and select the image you downloaded and click "upgrade"

Wait ten minutes or so and connect to the router via Wi-Fi. It now has a SSID name like "nycmesh 1a2b" and a random IP of the form 10.x.x.x

* Plug an ethernet cable from LAN on your current router to the blue WAN on the TP-Link.

* <a href="mailto:contact@nycmesh.net">Email us</a> and we will check that everything is working.

**NanoStation NSM5 instructions**

* For a new NSM5, download this to your computer-  
  [NSM5 XW download](http://nycmeshnet.github.io/download/NSM5-XW.html)  
  (for old NSM5s or if you are upgrading see below)
* Plug an ethernet cable from POE on the power adapter to "main" on the NSM5 (we will switch to "secondary" later)
* Plug from LAN on the adapter to your computer (You may need a USB ethernet adapter)
* Turn off Wi-Fi on your computer
* Open Network Prefs (or equivalent)
* Connect by ethernet using DHCP with manual address e.g. 192.168.1.11
* Go to 192.168.1.20 in your browser
* You will get https warning "your connection is not private" or some such
* Click "advanced" and "proceed to 192.168.1.20"
* Enter ubnt, ubnt, USA, [x] agree to terms, login
* On the tabbed panel select "System"
* Click "Upload Firmware: Choose File"
* Select the M5-XW factory image you downloaded
* Click "Upload"
* You will get a "third-party" warning. Ignore this and click "Update"
	
Wait ten minutes or so. It now has a SSID name like "nycmesh 1a2b" and a random IP of the form 10.x.x.x

* Plug an ethernet cable from LAN on your current router to LAN on the power supply, and from POE to the **secondary** input on the NanoStation. 

* <a href="mailto:contact@nycmesh.net">Email us</a> and we will check that everything is working.

**Upgrades**  
Upgrades are for when your router is already running nycmesh/qMp or another version of OpenWrt.

[WR842N upgrade download](http://nycmeshnet.github.io/download/WR842N-upgrade.html)  
[NSM5-XW upgrade download](http://nycmeshnet.github.io/download/NSM5-XW-upgrade.html)

**Older (2014 or earlier) XM NSM5s**  
[NSM5-XM binary download](http://nycmeshnet.github.io/download/NSM5-XM.html)  
[NSM5-XM upgrade download](http://nycmeshnet.github.io/download/NSM5-XM-upgrade.html)  

**Firmware**  
[Our firmware](https://github.com/nycmeshnet) is based on [qMp](http://qmp.cat/), which is an [OpenWrt](https://openwrt.org/) package using [BMX6](http://bmx6.net/projects/bmx6) meshing protocol. Thanks to Roger at qMp for all of his help.



 

