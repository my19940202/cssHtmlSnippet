var url = require('url');
var dns = require('dns');
var request = require("request");

var urlString = 'http://suo.im/5DW72C';
// var urlString = 'http://m.baidu.com/baidu.php?url=Ks0000jwGrA4rNDmXZLcBUgwrz7hgt3JyUa72KWMOl8RrdZ7M5RKgnApXIsPWj5A-wpZWRYKOCYhO22DG0930EV6hxXUk0FwbYA4KrLwtaoHHaWbTLsVQSnfYwm9K5REHtAVzC2X71SJtTeMwiYE25BukHix1RwlvLJXiNvL_uPdqJQ3FPCXGHkWnLzjyjmBjFg6nqnp_4Hz4ReAhBzOtRyCcXaT.7Y_NR2Ar5Od66uxAS6Mz3D4g_kTPHniccLYDsXPXOxELeqOv6d_qMB1oeQnerqMuMer1IuMEudLuYq-OZG3eQ8zzEuLlOx4XxV4xEth2SMuvU2tMZx_vyIgpvr5ggBmhOx9ec_VMuP-BWBOxYtmEvO-vOhOxlXZNgOoOeZ4_qjVlsdnTN501W4XaPmuCyPLugmC.U1Yk0ZDq8pHF1PrJYogyVPgN_r10efKY5UhbzT1gCoQ98pEQEoQGYpt0pyYqPHfv0ATq0ZNG5fKspyfqn6KWpyfqPj030AdY5HDvPHDd0AFW5Hc0pvbqn0K-pyfqPH0knWm1P6KBpHY0Uynq0Z7spyfqn0Kkmv-b5H00ThIYmyTqn0KEIhsqnH0snj0dPBYkg1Dsnj0sP1nVuZGxn10snj0kQHFxPj0sPjnVnfK9mWYsg100ugFM5H00TZ0qrjT4PHDznj030A4vTjYsQW0snj0snj0s0AdYTjY0uAwETjY0ThCqn0K1XWY0IZN15HRLnjRYPHRsnWf3PHbdP16knHD0ThNkIjYkPHbsPHTLnHTvn1c40ZPGujYsmvRYrjD3PAc3njNBnjI-0ZK85HD0ULnqnfKVIZ-suHYkn0K9uZw4TARqnH0snfK9IZKGujYs0APspyfqnH0snfKsUA-b5HDYP1TzP1b3n1DYn1T0mv9GujY0mgKsIh3q0Zw9XjY0Ugw15HDvPHDd0AqWTAnqnznzc1nWPWTknj0WnHmYn10WnHn1rH6WnHDznznWc1D8nWRsc1D8nj0scznWnanzc1D8nj0WczndnHnkc10Wnansg10Wnansc10WrjTzc10Wnanzc1D8nj0Wni3snj0Wni3snj0Wna3snj0Wna3snj0Wna3snj0Wni3snansc10Wnansc1D8nj0sc10Wnanscznsc1Kxni3snj0Wnans0A-WIjYkPH63njmvn1fs0AuBTWYkQWcdn0KWmMfqn0KsIjYLP1D0TAq1pgwGUv3qPfKsULPGIA-EU-qWpA78uvNxThN9Tvq85HD0ULFGgvdY5HD3rj630AdYgLKY5H00myPWIjY0uAPWujY0uAPzTjY0uANvIZ0q0ZP85fKsThqb5fKEmLKWgvk9m-q1IA7YIgnqn0KEmLKWgvP_pyPo5H0Wnansc10Wnansc1D8nj0sc1D8nj0s0AuYXgK-5H00myw1U-q15H00myw1U-qGT1Y0mhd_5H00Uy7WPHY0UvDq0A7bmv_qn0K_IjYs0ZPW5H00UvnqnfKvpyw-Uv-b5fKBugP_5H00pgPbUjYs0Aq_uAsqn0KsThqMmywv5HD0mgP45H00mywsI1Ys0A7bTA6qn0KGTL0qUhC0pZP_u1Ys0jDqn00z5f015HnkwjTYPWujQRn3PRDVPjnYfBdKfWfdQHRYrHP7fYwDfWRsn60Y5f0d5H00PWYs0jTqn6035H00rHY0TZFEudqYT1YvP1fdnjbknjnvP1D4PW0snWf0TZFEudqsT1YkP1f1PWbsnjbdPHD4n1b4PWDdP6KsThqMgLwG5HDvrjf3nHcYnjc1P6KsThqMgLKG5HDvrjf3nHcYnjc1r0KsmvbqnH03PjTknjR4rjmYnHckPjnvPHT0TvGC5HcvrfKzTMnqn0KBIgw9u1Ys0AFWTjYk0A4-IjYk0APzm1Yzn1c3&wd=1&word=1&xst=TjY3P1bdnHcsnj6Km1YKmWY3wHndnRR4rj7APHn3wDfsnj0LwH7KwH9DnHIAPRmzPs7d5HcdP16LnHc40gnqrHc4nj04rjnsnHm3nWDkPH6zg1RYP-ts0yPC5yu-uyfKnW6sn1c1rH6sPs';
var result = url.parse(urlString);
// console.log('result', result);

dns.lookup(result.hostname, function onLookup(err, address, family) {
    var ext = (result.port ? (":" + result.port) : "") + (result.pathname || "") + (result.query ? ("?" + result.query) : "");
    urll = result.protocol + "//" + address + ext;
    console.log('urll', urll);
    
    host = result.hostname;
    request.get({ url: urll, headers: { "Host": host } }, function (error, response, body) {
        console.log(response)
    });
});