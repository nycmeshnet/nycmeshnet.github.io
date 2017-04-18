---
layout: markdown
title: "Supernode CPE"
---
# Configuring supernode CPEs

## Ubiquiti Prism clients-

[Laptop Network preferences](./litebeam/netprefs.png)  

A new Ubiquiti device has a default IP address 192.168.1.20 and name/pass ubnt, ubnt

Connect to the LiteBeamAC or NanoBeamAC via ethernet. Make sure you are on the same subnet by manually setting your network preferences, e.g. 192.168.1.11, Mask: 255.255.255.0. 

**Flash with latest firmware**

Go to Settings and do a factory reset 

Download latest version of [AirMaxAC](https://www.ubnt.com/download/airmax-ac) for the particular hardware

Upgrade firmware

Reset to factory

Change the pass to our usual pass

[**Wireless settings**](./litebeam/wireless.png)    
 * Station PtMP  
 * SSID: nycmesh prism1 s1  (use scan on site to pick the strongest radio. **s1** faces North, **s2** and **s3** face north east)   
 * Antenna 23 -23dbi  
	
[**Network settings**](./litebeam/network.png)   
 * Static
 * IP 192.168.1.20  (temporary, this will be changed to 192.168.42.1xx)
	
[**Services**](./litebeam/services.png)   
 * [x]SNMP Agent  
 * community: public	location: nycmesh  
 * contact: nycmesh  
	
[**System**](./litebeam/system.png)  
 * Device name: nycmesh-lbe-99 (**lbe** is LiteBeam, **nbe** is NanoBeam, **99** default will be changed to actual number)

You can download this example [LiteBeamAC config](./litebeam/WA-802AA8FE3E56.cfg) with the above configuration

**Pairing**

**Antenna Alignment**

**Download test**

To get internet from the CPE you need to set your laptop's network configuration to IPv4:using DHCP. If the device is paired with the supernode it will automatically get an IP address in our range- 199.x.x.x

A good speed is over 50Mps. If the speed is under 20Mbps explain to the member the limitations. (Netlflix standard is 5Mbps). Do not install if connection is less than 10Mbps

You must have a gigabit adapter to get over 100Mbps. It is possible to get 200Mbps if you are close with good line of sight. If you don't have a gigabit adapter the maximum speed is going to be under 90Mbps.



