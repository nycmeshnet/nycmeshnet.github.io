---
layout: post
title: "Frequently asked questions"
---

**Is there a monthly fee?**

No. Once you buy a router and install it you are part of NYC Mesh. There are no additional costs.

**Is this a replacement for my current Internet connection?**

No, not at the moment. The mesh is best used as a backup Internet connection. If you are within range of the mesh, your router will automatically use the fastest Internet connection. This means you will have a backup Internet connection if your own Internet connection fails.

**What can I do on the mesh that I can't do on the Internet?**

The mesh has small web servers connected that show local information and allow you to post messages. We are also looking into streaming services. So far we have servers in three locations- the East Village, Harlem and Bay Ridge. It is also possible to connect directly to other people on the mesh without using the Internet. If for some reason the Internet is down, the mesh will still work.

**Why should I join the mesh now?**

By joining the mesh now you help us grow and increase our reach across the city. This is a community project and you will be helping to create a decentralized infrastructure, free from traditional business interests.

**Is it possible for the mesh to cover a whole country?**

Yes, there is a mesh network called "Guifi" in Spain that covers a large part of the country. In order to do this, they have a backbone of many long distance WiFi connections and also community owned fiber.

**Are you an Internet Service Provider (ISP)?**

No, not at the moment. While we grow, we are relying on our members to share their Internet connections. Eventually we hope to peer with other providers so we can provide independent Internet service.

**What software/firmware do you use?**

We are using an OpenWrt package made by qMp. This uses the BMX6 mesh protocol. We have added tinc tunneling so a router can mesh over the Internet when out of range using a secure virtual private network (VPN). We also have some members experimenting with and contributing to cjdns/hyperboria software. Let us know if you are interested in this.

**Can I use my own router?**

At the moment the easiest solution is to buy a pre-configured router off us. We have these available at cost- $28 for a small home router and $90 for a directional router that can be mounted outside. If you want to "flash" your own router with our software, it must have OpenWrt support and you will have to follow some very technical instructions on our github site. We are working hard to make the software simpler to flash. The routers we currently support and recommend are the Ubiquiti NanoStation M5 for outdoors and the TP-Link TL-WR842ND for indoors.

**Can I install a router if I have no view or no rooftop access?**

Yes you can. Because you may be out of range of other mesh nodes, your router will use secure VPN tunneling to connect to the mesh over the Internet. You will still see the exclusive mesh web content. Neighbors could also install our $28 routers creating a mesh for your building and reliable Internet backup. 

**What is involved in a rooftop install?**

We currently support two different types of routers. A long distance directional router, the Ubiquiti Nanostation NSM5. ($90) and a small indoor TP-Link router for $28. These pre-configured routers are available from us.

For rooftops, we configure the NanoStations with mesh software and can help you with the installation. Typically one or two routers are attached to a pole on the roof and an ethernet cable is run to the apartment, and connected to an Internet gateway and a TP-Link mesh router. The cable cost is $20. The ethernet cable also supplies the power to the router using "power over ethernet". 


**I have a great view from my window. Can I put a router there?**

If you don't have rooftop access it is still possible to use a directional NanoStation in your window. This works best with line-of-sight to another router. It will work from behind glass if you are unable to place it outside the window.

**Why don't we mesh mobile phones instead of routers?**

There is "mesh" software for mobile phones such as Serval and FireChat. This is mainly used for chat messages. It stores the messages until a phone is within range and then transfers the data. Mobile "mesh" networks are very low bandwidth, not real-time and require many phones in a small area. They are great for events or some emergency situations.

**Is the mesh secure?**

A mesh router is firewalled from your local network. It is not possible to reach beyond the mesh router to your LAN. Mesh tunneling over the Internet is by VPN and is secure. Network traffic within the mesh is not encrypted by default.

If you use the internet while on the mesh, you should use standard precautions such as using https (lock icon) web sites for secure connections.










 

