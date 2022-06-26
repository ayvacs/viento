var data = [
    // [ ID, Date, Description, Time(mins) ]
    [
        1,
        "June 26",
        "Using Worldpainter I terraformed an island area to build my city on.",
        140
    ]
]

for (var i in data) {
    var v = data[i];
    document.getElementById("data").innerHTML += `<tr><td>${v[1]}</td><td>${v[2]}</td><td>${v[3]}</td><td><img width=870px src="scr/${v[0]}.png"></td></tr>`;
};