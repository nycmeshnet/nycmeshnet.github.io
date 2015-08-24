---
layout: newnode
title: "Join the Mesh"
---

**Why should I join the mesh now?**

By joining the mesh now you help us grow and increase our reach across the city. This is a community project and you will be helping to create a decentralized infrastructure, free from traditional business interests. If you haven't already, it is a good idea to read our [FAQ](../faq).

**How to buy routers**-

We currently have two options for routers- an inexpensive indoor router and a $90 outdoor router. You can buy the routers online and configure them yourself using our simple [download](../download) instructions. Otherwise, you can come to our [meetups](http://www.meetup.com/nycmesh/) where we often sell preconfigured routers that you can simply plug in.

Here are the two router choices:

1) [An indoor TP-Link 842ND router](http://www.amazon.com/dp/B006E04T9I/?tag=tl-wr842nd-nycmesh-20) (~$30)

2) [An outdoor NSM5 Ubiquiti router](http://www.amazon.com/dp/B0049AVWAO/?tag=nsm5-nycmesh-20) (~$90)

__________________________________________________________________________

**What you can do with your router**-

The TP-Link 842ND is a normal home router with a range of one or two buildings, or across a street. If you are close enough to another active node it will mesh over the air. With the TP-Link router you would usually connect it to your own internet so it can "tunnel" and connect with the mesh. It is also possible to use multiple routers with your neighbors to split your ISP bill, or for friendly internet sharing.

It is easy to flash this TP-Link router with our download instructions. Otherwise, you can come to our meetups and buy one that is already configured. 

Once you have a TP-Link router you will be able to access all of the ".mesh" local websites. So far we have a wiki, chat and some local information sites. The available servers and content are being expanded every week. 

The Ubiquiti NanoStation we use is directional with a 45' beam. It needs a line-of-sight connection to another NanoStation, so it it best if we install these as pairs, and we need to know beforehand that the two locations can actually see each other. We will help install and configure the NanoStation for you. We have outdoor cable and tools and experience doing this. Please email us a panorama pic of your view so we can see what other nodes you may be able to connect to. The range will vary but it should reach about two miles. Nanostations can also be installed behind windows if you don't have rooftop access.

Alternatively the NanoStation can be set up as a public access point by pointing it at a park or other public area. This obviously means you are the community-minded kind of person with a good internet connection.

__________________________________________________________________________

**For the more technologically adventurous**-

It is easy to set up your own server and connect it to the TP-Link router. The mesh has it's own zeroconf mDNS system- ".mesh" and your server will be available to anyone on the mesh.

If you are familiar with the command line and OpenWrt, it is possible to use other routers, but you must use [qMp images](http://fw.qmp.cat/stable/), and follow instructions on our [github](https://github.com/nycmeshnet) site for [installing tinc](https://github.com/nycmeshnet/docs/blob/master/tinc%20install.md).

__________________________________________________________________________

**How to plug them in**-

For TP-Link: Plug an ethernet cable from LAN on your current router to the blue WAN on the TP-Link.

For NanoStation: Plug an ethernet cable from LAN on your current router to LAN on the power supply and POE to the secondary input on the NanoStation. For POE, you must use a standard ethernet cable with all 8 wires. Some cheap cables don't support POE (power over ethernet) and the NanoStation won't get power.

A quick test to see if you are on the mesh is to go here-
[http://10.30.0.189/](http://10.30.0.189/)