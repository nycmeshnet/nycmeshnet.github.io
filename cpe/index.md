---
layout: markdown
title: "Supernode CPE"
---

Member should buy their own cpe on Amazon etc. We can swap it with a preconfigured one on site to save time.

If they buy a cpe off us they must pay on the day of the install.

# Configuring supernode CPEs

## Ubiquiti Prism clients-

[Laptop Network preferences](./litebeam/netprefs.png)  

A new Ubiquiti device has a default IP address 192.168.1.20 and name/pass ubnt, ubnt

Connect to the LiteBeamAC or NanoBeamAC via ethernet. Make sure you are on the same subnet by manually setting your network preferences, e.g. 192.168.1.11, Mask: 255.255.255.0

You will get an ssh warning "Your connection is not...", ignore and click "advanced" to proceed. (This is because the interface uses https)

**Flash with latest firmware**

Go to System:Configuration:Reset to factory defaults and click Reset

Download latest version of [AirMaxAC](https://www.ubnt.com/download/airmax-ac) for the particular hardware

Don't use 8.1.3 or 8.14 firmware. This has an ethernet bug and is unusable. If it's Gen2 (noted o) devices, downgrade to 8.1.2, if it's Gen1 devices, downgrade to 8.0.2 via the download page. (Go to the system tab, look at "DEVICE MODEL", if it doesn't say Gen2, it's a Gen1 unit.)

System:Upload Firmware

Reset to factory again

Change the pass to our usual pass

Click the "Settings" button (gear icon) on the left to give you Wireless | Network | Services | System

[**Wireless settings**](./litebeam/wireless.png)    
 * Station PtMP  
 * SSID: nycmesh prism1 s2       
	- see "Pairing" below for selecting s1, s2 or s3  
 * Antenna 23 -23dbi  
	
[**Network settings**](./litebeam/network.png)   
 * Static
 * IP 192.168.1.20  (leave as default, this will be changed later to 192.168.42.1xx)
	
[**Services**](./litebeam/services.png)   
 * [x]SNMP Agent  
 * community: public	location: nycmesh  
 * contact: nycmesh  
	
[**System**](./litebeam/system.png)  
 * Device name: nycmesh-lbe-nn (**lbe** is LiteBeam, **nbe** is NanoBeam, **nn** is replaced with the install number)

You can download this example [LiteBeamAC config](./litebeam/WA-F09FC242795C.cfg) with the above configuration

**Pairing**

In the ["Wireless" settings](./litebeam/wireless.png)) click "Select" and choose the strongest "nycmesh prism1" signal. The strongest signal has the lower number. -80db would be very weak, -50db would be very strong. 

The Prism has 3 radios. You need to select the strongest. **s1** faces North, **s2** and **s3** face north east. East Village would probably be s1 and LES and Alphabet City would probably be "s2". "s3" is towards Williamsburg. Chinatown could be any of the radios.

**Antenna Alignment**

There is a visual level built into the antenna make sure the bubble is in the middle.

There is a "tools" menu in the upper right of the interface. Click this and select Antenna alignment. First align the antenna by pointing it directly at the supernode. Now move it slightly up or down to get a stronger signal. Once you have the vertical alignment, do the same by moving the antenna horizontally.

**Download test**

To get internet from the CPE you need to set your laptop's network configuration to IPv4:using DHCP ("automatic" setting on some machines). If the device is paired with the supernode it will automatically get an IP address in our range- 199.x.x.x

A good speed is over 50Mps. We have been getting 60 to 90Mbps so far. If the speed is under 20Mbps explain to the member the limitations (Netflix standard streaming is 5Mbps). It is not good to install if connection is less than 8Mbps as it won't reliably play video.

You must have a gigabit adapter to get over 100Mbps. It is possible to get 200Mbps if you are close with good line of sight. If you don't have a gigabit adapter the maximum speed is going to be under 100Mbps.



