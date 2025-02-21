function calculateDaysFrom2001() {
    let birthdate = document.getElementById("birthdate").value;

    if (!birthdate) {
        alert("생년월일을 입력해주세요!");
        return;
    }

    let birthDateObj = new Date(birthdate);
    let referenceDate = new Date("2001-01-01");

    let timeDifference = birthDateObj - referenceDate;
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let numForFinding = daysDifference % 10;
    let sajuList = ['청양관', '청양관', '적초관', '적초관', '황접관', '황접관', '백작관', '백작관', '흑상관', '흑상관']

    let resultText = "";
    if (daysDifference >= 0) {
        resultText = `당신의 기숙사는 ${sajuList[numForFinding]}입니다.`;
    } else if (daysDifference < 0) {
        resultText = `당신은 기숙사는 ${sajuList[10+numForFinding]}입니다.`;
    } else {
        resultText = "Error";
    }

    document.getElementById("result").innerText = resultText;
}
