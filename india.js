
let statedata = document.getElementById('statedata')
let fetcheddata = "";
var state=[]
var confirmed=[]
var recovered=[]
var deaths =[]
let districtDetails;

fetch('https://api.covid19india.org/data.json')
    .then(res => res.json())
    .then(data => {
            console.log(data.statewise)
            assigndata(data.statewise[0], data.statewise)
            
            $.each(data.statewise,function(id,obj){
                state.push(obj.state)
                confirmed.push(obj.confirmed)
                recovered.push(obj.recovered)
                deaths.push(obj.deaths)
            })

            state.shift()
            confirmed.shift()
            recovered.shift()
            deaths.shift()

            var myChart=document.getElementById("mychart").getContext('2d')

            var chart=new Chart(myChart,{
                type:'line',
                data:{
                    labels:state,
                    datasets:[
                        {
                            label: "Confirmed Cases",
                            data: confirmed,
                            backgroundColor:"#f1c40f",
                            minBarLength:100,
                        },
                        {
                            label: "Recoverd Cases",
                            data: recovered,
                            backgroundColor:"#2ecc71",
                            minBarLength:100,
        
                        },
                        {
                            label: "Deaths",
                            data: deaths,
                            backgroundColor:"#e74c3c",
                            minBarLength:100,
        
                        },
                    ],
                },
                options:{
                    responsive:true,
                    maintainAspectRatio:true,
                    responsiveAnimationDuration:0,
                },
            });
        

            console.log(state)
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
                $('#count4').each(function () {
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
fetch('https://api.covid19india.org/state_district_wise.json')
.then(res => res.json())
.then(data => {
        console.log(data);
        districtDetails = data;
});

function assigndata(total,states,state,confirmed,recovered,deaths) {
    console.log(total);
    console.log(states);
    let i;
    for (i = 1; i < states.length; i++) {
        // text += cars[i] + "<br>";
        fetcheddata+= "<tr><th class='mainState' data-toggle='modal' data-target='#myModal' onclick = 'getDistrictData(this)'>"+states[i].state+"</th><td>"+states[i].confirmed+"</td><td>"+states[i].active+"</td><td>"+states[i].recovered+"</td><td>"+states[i].deaths+"</td></tr>"
    }
    statedata.innerHTML=fetcheddata;
    document.getElementById('count1').innerHTML = total.confirmed;
    document.getElementById('count2').innerHTML = total.recovered;
    document.getElementById('count3').innerHTML = total.deaths;
    document.getElementById('count4').innerHTML = total.active;

}

function getDistrictData(elem){
    // console.log(elem.innerText);
    let value = elem.innerText;
    console.log(value)
    // let modalBody = document.getElementsByClassName('modal-body')[0];
    let title = document.getElementById('title');
    let districtdata = document.getElementById('districtdata');
    console.log(districtDetails[value]['districtData']);
    title.innerHTML = "<p>"+value+" Data</p>";

    let district_data = "";
    // for(var i=0;i<districtDetails[value].length;i++)
    for (i in districtDetails[value]['districtData']){
        district_data+= "<tr><th>"+i+"</th><td>"+districtDetails[value]['districtData'][i].confirmed+"</td><td>"+districtDetails[value]['districtData'][i].active+"</td><td>"+districtDetails[value]['districtData'][i].recovered+"</td><td>"+districtDetails[value]['districtData'][i].deceased+"</td></tr>"
        // modalBody.innerHTML += "<br>"+districtDetails[value]['districtData'][i].active;
    }
    districtdata.innerHTML = district_data;
}
