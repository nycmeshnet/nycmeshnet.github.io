NYC Mesh uses tinc Virtual Private Network (VPN) to mesh disconnected nodes. The nodes mesh over a VPN through the internet. 

Tinc is only needed on gateway nodes, i.e. nodes that are connected directly to the internet. If a node is not connected directly to the internet, it is best to disable tinc to improve network performance. 

To follow this you need to be able to use the terminal and the "vi" editor. The crontab is edited by the command- "crontab -e".

To disable tinc-

  * ssh into the router
  * Comment out this tinc line in /etc/nycmesh/nycmesh_startup.sh
      * * * * * /etc/config/check_tunnel.sh
  * Delete the crontab entry for 'check_tunnel.sh'
  * /etc/init.d/tinc stop
  * /etc/init.d/tinc disable