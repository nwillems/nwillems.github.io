---
layout: page

title: Unifi UDMP Setup
subtitle: Setup of the home UDMP
author: Nicolai Willems
author-url: "https://nwillems.dk"
date: 2024-08-26
lang: en
toc-title: Contents
version: v0.1.1
---

## Unifi BGP Setup

First step, ensure we are actually not reachable.

Check BGP on unifi, should show:

```sh
$ vtysh -c "show ip bgp"
BGP table version is 4, local router ID is 172.16.0.1, vrf id 0
Default local pref 100, local AS 64501
Status codes:  s suppressed, d damped, h history, * valid, > best, = multipath,
               i internal, r RIB-failure, S Stale, R Removed
Nexthop codes: @NNN nexthop's vrf id, < announce-nh-self
Origin codes:  i - IGP, e - EGP, ? - incomplete
RPKI validation codes: V valid, I invalid, N Not found

   Network          Next Hop            Metric LocPrf Weight Path
*> 172.16.0.0/14    0.0.0.0                  0         32768 ?
*> 172.20.0.2/32    172.19.68.177                          0 64500 i
*> 185.50.192.0/22  0.0.0.0                  0         32768 ?
*> 192.168.3.0/24   0.0.0.0                  0         32768 ?

Displayed  4 routes and 4 total paths

```

### Log of reasons for failure

2024-10-09 - MetalLB speaker had been in a bad state for multiple days - just needed a retsart. Opened K9s, and ctrl+k'ed them.

### Thoughts

Well, maybe the current setup is nice
