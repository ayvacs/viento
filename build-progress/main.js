var data = [
    // [ ID, Date, Description, Time(mins) ]
    [
        1,
        "June 26",
        "Using Worldpainter I terraformed an island area to build my city on.",
        140
    ]
]

var times = [];

for (var i in data) {
    var v = data[i];
    var t = v[3]/60;

    document.getElementById("data").innerHTML += `<tr><td>&nbsp;</td><td>${v[1]}</td><td>${v[2]}</td><td>${t}</td><td><img width=870px src="scr/${v[0]}.png"></td></tr>`;
    times.push(t);
};

document.getElementById("data").innerHTML += `<tr><td><b>Sum</b></td><td></td><td></td><td><b>${times.reduce((partialSum, a) => partialSum + a, 0)}</b></td><td></td>`;