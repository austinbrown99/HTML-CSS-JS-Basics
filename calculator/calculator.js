var previousCalc = "inchToFt";

function getCalc(selectObject) {
    switch (selectObject.value) {
        case "inToFt":
            var elems = document.getElementsByClassName("inchToFt");
            for (var i = 0; i < elems.length; i += 1) {
                elems[i].style.display = 'block';
            }

            document.getElementById("in_ft_in").onchange = function () {
                document.getElementById("inchToFtResult").value = (document.getElementById("in_ft_in").value / 12).toFixed(3);
            }

            clearAllCalcs();

            previousCalc = "inchToFt";
            break;

        case "ftToIn":
            var elems = document.getElementsByClassName("ftToInch");
            for (var i = 0; i < elems.length; i += 1) {
                elems[i].style.display = 'block';
            }

            document.getElementById("ft_in_ft").onchange = function () {
                document.getElementById("ftToInchResult").value = (document.getElementById("ft_in_ft").value * 12).toFixed(3);
            }

            clearAllCalcs();

            previousCalc = "ftToInch";
            break;
    }
}

function clearAllCalcs() {
    var elems = document.getElementsByClassName(previousCalc);
    for (var i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
    }
}