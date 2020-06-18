let countrydata = document.getElementById('countrydata')
let fetcheddata = "";
// maincontent.innerHTML = "HI"

fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(data => {
            console.log(data.Global)
            assigndata(data.Global, data.Countries)
            $('#count1').each(function () {
                $(this).prop('Counter',0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                    });
                });
                $('#count2').each(function () {
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                $('#count3').each(function () {
                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }
            
        )

function assigndata(Gdata,Cdata) {
    console.log(Gdata);
    console.log(Cdata);
    let i;
    for (i = 0; i < Cdata.length; i++) {
        // text += cars[i] + "<br>";
        fetcheddata+= "<tr><th>"+Cdata[i].Country+"</th><td>"+Cdata[i].TotalConfirmed+"</td><td>"+Cdata[i].TotalRecovered+"</td><td>"+Cdata[i].TotalDeaths+"</td></tr>"
    }
    countrydata.innerHTML=fetcheddata;
    document.getElementById('count1').innerHTML = Gdata.TotalConfirmed;
    document.getElementById('count2').innerHTML = Gdata.TotalRecovered;
    document.getElementById('count3').innerHTML = Gdata.TotalDeaths;

    // data.map
}


var mybutton = document.getElementById("myBtn");
        
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}