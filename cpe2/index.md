---
layout: page
title: "Supernode CPE"
---

 #eastwburg_bushwick, English Kills

# Configuring supernode2 CPEs   
(line of sight to 40.713991, -73.929049 )

[For connecting to supernode 1 see here](../cpe)

## Ubiquiti sector clients

###0. Get everything ready

1. Download the latest version of AirMaxAC firmware to your laptop:
  1. Go to [Ubiquiti's downloads page](https://www.ubnt.com/download/airmax-ac) 
  1. Select your device on the left (e.g. LiteBeamAC or NanoBeamAC)
  1. Dowload the latest version of firmware (accept the terms)
1. Unpack the CPE (LiteBeamAC or NanoBeamAC) and find the following items:
  1. CPE antenna (the part that has one ethernet port)
  1. POE adapter (the part that has two ports and one electrical cord)
1. Make sure you have cables to connect everything:
  1. Two ethernet cables, Cat5E or higher (can be relatively short ones, a.k.a. "jumper" cables)
  1. If you have a Mac or similar laptop with no ethernet port, you'll need a gigabit adapter
1. Keep a browser tab open with these instructions

###1. Connect the CPE to your laptop

1. Plug in the POE adapter to power it.
1. Connect the POE port on the POE adapter to the CPE via ethernet cable. 
  * A little light should come on to show the CPE is powered.
1. Connect the ETH port on the POE adapter to your laptop via ethernet cable
1. Right click the wi-fi icon on your laptop and click Open Network Preferences (or go to System Preferences > Network )
1. Set your Network Preferences for the ethernet connection (usually called USB LAN, Ethernet, or Thunderbolt Ethernet) to [the following](./litebeam/netprefs.png):
  * Configure IPv4: manual
  * IP Address: 192.168.1.11
  * Mask: 255.255.255.0
1. Turn off your Wi-Fi to allow your browser to connect to the CPE
1. Go to http://192.168.1.20 and use: ubnt as both user name and password if it's a new device
  * If the device has already been configured you should use its new settings for IP, user name, and password.
  * If you're getting an error along the lines of "Can't connect to Internet" or "Timed Out":
    * Make sure your Wi-Fi is off and the ethernet connection is green in your Network Preferences
    * Make sure you typed "http://" before the IP address (otherwise your browser might think you're trying to google the IP address)
    * If you still can't connect try hard resetting the device by inserting a pin or paperclip into the little hole above the port and pressing the internal button for about 10 seconds.
    * If all else fails, try asking on the #install channel on [our Slack](nycmesh.slack.com)
1. You will get an ssh warning "Your connection is not..." -- ignore it and click "advanced" to proceed. (This is because the interface uses https)

###2. Flash the CPE with latest firmware

1. Once you're logged into the CPE's dashboard click the "Settings" button (gear icon) on the left to give you: 
  Wireless | Network | Services | System
1. Go to System > Configuration > Reset to factory defaults, and click Reset
1. Log in again and go to System > Upload Firmware
1. Select the firmware file you downloaded earlier and upload it
  * If you get recurring "Configuration upload falied" you might be trying to upload the current version. Compare the firmware version you downloaded earlier to the current version:
    * The file name usually has the version in it, e.g. WA.**v8.5.7**.38314.180628.1036.bin
    * In the CPE dashboard on the top left you should see the current firmware version number
1. Reset to factory again as in the first step
1. Change the password as prompted

###3. Change the settings

**[Wireless settings](./litebeam/wireless.png)**
 * Station PtMP  
 * SSID: 
   * For SN2: nycmesh-english-kills-east OR nycmesh-english-kills-west (see pairing below)
   * For 1340: nycmesh-1340-north or ...-east or ...-south or ...-west (depending on where you are)
 * WPA2 PSK: nycmeshnet
 * Antenna 23 -23dbi  
	
[**Network settings**](./litebeam/network.png)   
 (leave as default)
	
[**Services**](./litebeam/services.png)   
 * [x]SNMP Agent  
 * community: public	location: nycmesh  
 * contact: nycmesh  
	
[**System**](./litebeam/system.png)  
 * Device name: nycmesh-lbe-nn (**lbe** is LiteBeam, **nbe** is NanoBeam, **nn** is replaced with the install number)


###4. Pairing

**Supernode 2**
In the ["Wireless" settings](./litebeam/wireless.png) click "Select" and choose the strongest "nycmesh-english-kills" signal. The strongest signal has the lower number. -80db would be very weak, -50db would be very strong.

**1340**
Same as above but find the strongest nycmesh-1340-X signal. The sectors are aligned with the street grid of Bed Stuy, not true north.

###5. Antenna Alignment
1. There is a visual level built into the antenna. Make sure the bubble is in the middle.
1. There is a "tools" icon in the upper right of the interface. Click this and select Antenna alignment. 
  * The sound option is very helpful for this.
1. First align the antenna by pointing it directly at the supernode. 
1. Now move it slightly up or down to get a stronger signal. 
1. Once you have the vertical alignment, do the same by moving the antenna horizontally. 

###6. Test speed
1. To get internet from the CPE you need to set your laptop's network configuration to:
  * IPv4:using DHCP ("automatic" setting on some machines)
  * If the device is paired with the supernode it will automatically get an IP address in our range- 199.x.x.x
1. Test the speed by browsing to speedtest.net 
  * A good speed is over 50Mps. We have been getting 60 to 120Mbps so far. 
  * It is possible to get 200Mbps from SN2 if you are close with good line of sight.
  * **Note:** You must have a gigabit adapter to get over 100Mbps. If you don't have a gigabit adapter the maximum speed is going to be under 95Mbps.
  * If the speed is under 20Mbps explain to the member the limitations (Netflix standard streaming is 5Mbps). 
  * It is not good to install if connection is less than 10Mbps as it won't reliably play video.