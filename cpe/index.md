---
layout: markdown
title: "Supernode CPE"
---
# Flashing supernode CPEs

## Ubiquiti Prism clients-

New it will have IP address 192.168.1.20 name/pass ubnt, ubnt

Go to Settings and do a factory reset 

Download latest version of [AirMaxAC](https://www.ubnt.com/download/airmax-ac) for the particular hardware

Upgrade firmware

Reset to factory

Change the pass to our usual pass

[**Wireless settings**](./litebeam/wireless.png)    
 * Station PtMP  
 * SSID: prism1 s1  (use scan on site to pick the strongest radio. **s1** faces North, **s2** and **s3** face north east)   
 * Antenna 23 -23dbi  
	
[**Network settings**](./litebeam/network.png)   
 * Static
 * IP 192.168.42.99  (temporary, this will be changed to 192.168.42.1xx)
	
[**Services**](./litebeam/services.png)   
 * [x]SNMP Agent  
 * community: public	location: nycmesh  
 * contact: nycmesh  
	
[**System**](./litebeam/system.png)  
 * Device name: nycmesh-lbe-99 (**lbe** is LiteBeam, **nbe** is NanoBeam, **99** default will be changed to actual number)

Download example [LiteBeam config](./litebeam/WA-802AA8FE3E56.cfg) with this configuration
