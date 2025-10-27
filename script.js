let input = document.getElementsByTagName("input")[0];
let string = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach(btn => {
    btn.addEventListener("click", e => {
        console.log(e.target);
        if (e.target.innerHTML == '=') {
            if (/[^0-9+\-*/().]/.test(string)) {
                input.value = "ERROR";
                string = "";
                return;
            }
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "ERROR";
                string = "";
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == 'DEL') {
            string = string.slice(0, string.length - 1);
            input.value = string;
        }
        else {
            if (input.value === "ERROR") {
                string = "";
                input.value = "";
            }
            string += e.target.innerHTML;
            input.value = string;
        }
    })
});