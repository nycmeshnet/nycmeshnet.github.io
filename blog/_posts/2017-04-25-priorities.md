---
layout: post
title: "Priorities"
author: Brian
---
Here is my list of priorities for the mesh in order of importance. I'll keep this updated.

**1. Install Team**  
**2. Tall structure installs**  
**3. Get users for the Supernode**  
**4. Public Access Points as gateways**  
**5. Monitoring team**  
**6. Cheap 2GHz and dualband routers**  
**7. Collaborations**  
**8. Donations**  
**9. Work and storage space**  
**10. Software services**  
**11. Update the map**

---
**1. Install Team**

Organize a team of people for installs. Skills needed include safely climbing, running cable through conduits and window frames, ethernet crimping, aligning antennas, radio frequency survey.

Document how to do installs for the team and also for DIY members.

Figure out reimbursement for install.

**2.Tall structure installs**

Tall structures are the only way we can expand the wireless mesh. This is by far our biggest priority. There are a few different types in the city and we need to try them all- NYCHA buildings, skyscrapers, churches, schools, libraries, existing antenna masts and building coops. We need specific presentations and handouts for each of these types of structures. We are currently approaching libraries and [churches](../../leaflet/church.pdf). We need to build presentations for coop boards and others.  

Once we have a tall structure in a neighborhood we can link to apartment building rooftops.

**3. Get users for the Supernode**

The supernode at 375 Pearl St. is our first install on a tall structure. Here is our remaining todo list:

**Get P2M users (up to 2 miles) via mailout etc. (currently one user)**  
**Find rooftops for P2P points to extend backbone (currently zero)**

"P2M" is point-to-multipoint, i.e. our sector antenna which can reach hundreds of locations.    
"P2P" is a point-to-point connection that can require expensive antennas on both ends.  
We currently have two unused P2P pairs waiting for locations.

other supernode tasks-  
Install VPN software  
lay more ethernet or dc cable  
Get tax-exemption status with suppliers  

**4. Public Access Points as gateways**

Apart from the supernode, we need more internet gateways. Another kind of gateway is a public wifi access point. By using directional routers we can extend the range of public access points very easily. We have discussed this with some city infrastructure people and we think it is important to pursue this method. It will help us expand very quickly. Here are some instructions- [how to connect to a kiosk.](../public-access-points)

**5. Monitoring team**

We need a small team that is dedicated to monitoring and maintaining the network. Monitoring, alerts and maintenance are hugely important. We are using Nagios, Icinga2 and custom software. We need to keep every node active.

**6. Cheap 2GHz and dualband routers**

TP-Link locked down its 5GHz routers so we no longer have dual-band support. The 842ND is discontinued and the 841 has poor OpenWrt support. We are currently compiling new firmware so we can start adding support for more routers. Suggestions of cheap, off the shelf hardware are welcome. We are looking at the GL-AR150 and ZBT Ape522.

**7. Collaborations**

We are just starting some exciting collaborations with Zoetic Networks and Brooklyn Microgrid, and we are in talks with Chinatown B.I.D and NYCHA. This is essential to our growth and we should have more of this. 

**8. Donations**

The supernode has a monthly cost and we need to get monthly donations to cover this. So far we have over $4000 donated, and mostly from a few generous people, which will cover most of the install. You can donate via our [donate page.](../../donate). We have also just received $30,000 in grant money which will cover our expenses for 2017.

**9. Work and storage space**

We need a place to store our install gear and also work on routers etc.

**10. Software services**

The mesh network has around 5 small servers that can be accessed using our ".mesh" domain. This has been difficult to maintain. We do have IRC installed and running across three servers but it is rarely used. We need distributed software that will still work when servers are down or part of the network is not accessible. Guifi has a package called [Cloudy](http://cloudy.community/) that I would like to try.

**11. Update the map**

We are working on moving from Mapbox to Google maps. Mapbox is discontinuing the service we use so we have to complete this by January 2017. The map will be mostly driven from data, thus cutting down on manual editing that takes up some of my time.




