let start = false;
function game() {
    vec = new Array(3, 4, 5, 6, 7, 8, 9, 10, 11);
    flag = false;
    finish = false;
    document.getElementById("finish").innerHTML = "";
    if (start == false) {
        for (let i = 1; i <= 9; i++) {
            document.getElementById("d1").innerHTML += "<div onclick='check()' id='" + i + "'></div>";
        }
        start = true;
    }
    else {
        for (let i = 1; i <= 9; i++) {
            document.getElementById(i).style.backgroundImage = "url(\"p.jpg\")"
        }
    }
}
let turn = 0;
function check() {
    x = event.currentTarget;
    if (vec[x.id - 1] > 2 && finish == false) {
        if (turn == 0) {
            document.getElementById(x.id).style.backgroundImage = "url(\"X.jpg\")";
            vec[x.id - 1] = 1;
            turn = 1;
        }
        else {
            document.getElementById(x.id).style.backgroundImage = "url(\"O.jpg\")";
            vec[x.id - 1] = 2;
            turn = 0;
        }
        for (let i = 0; i < 9; i += 3) {
            if (vec[i] == vec[i + 1] && vec[i + 1] == vec[i + 2])
                flag = true;
        }
        for (let j = 0; j < 3; j++) {
            if (vec[j] == vec[j + 3] && vec[j + 3] == vec[j + 6])
                flag = true;
        }
        if ((vec[0] == vec[4] && vec[4] == vec[8]) || (vec[2] == vec[4] && vec[4] == vec[6]))
            flag = true;
        let flag2 = false;
        if (flag == false) {
            for (let i = 0; flag2 == false && i < 9; i++)
                if (vec[i] > 2)
                    flag2 = true;
            if (flag2 == false)
                document.getElementById("finish").innerHTML = "אין מנצחים";
        }
        else {
            if (turn == 0) {
                document.getElementById("finish").innerHTML = "מזל טוב שחקן עם העיגול ניצח";
                finish = true;
            }
            else {
                document.getElementById("finish").innerHTML = "מזל טוב השחקן עם האיקס ניצח";
                finish = true;
            }
        }
    }
}