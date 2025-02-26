function calculateDaysFrom2001() {
    // 이름 읽어오기
    let name = document.getElementById("name").value;
    if (!name) {
      alert("이름을 입력해주세요!");
      return;
    }
  
    // 생년월일 읽어오기
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
  
    // 테스트용 간단 배열
    let sajuList = [
      "청양관", "청양관", 
      "적초관", "적초관", 
      "황접관", "황접관", 
      "백작관", "백작관", 
      "흑상관", "흑상관"
    ];
  
    let dormitory = "";
    if (daysDifference >= 0) {
      dormitory = sajuList[numForFinding];
    } else {
      dormitory = sajuList[10 + numForFinding];
    }
  
    let resultText = `${name}님의 기숙사는 ${dormitory}입니다.`;
  
    // 결과 표시
    document.getElementById("result").innerText = resultText;
  
    // 결과 이미지 설정
    let imageElement = document.getElementById("resultImage");
    // 기숙사 이름에 따른 이미지 경로 지정 (이미지는 미리 준비되어야 합니다)
    switch (dormitory) {
      case "청양관":
        imageElement.src = "images/blue.png";
        break;
      case "적초관":
        imageElement.src = "images/red.png";
        break;
      case "황접관":
        imageElement.src = "images/yellow.png";
        break;
      case "백작관":
        imageElement.src = "images/white.png";
        break;
      case "흑상관":
        imageElement.src = "images/black.png";
        break;
      default:
        imageElement.src = "";
    }
    // 이미지 표시
    imageElement.style.display = "block";
  
    // 입력 창 숨기고 결과 창 보이기
    document.getElementById("inputContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "flex";
}
  
function resetForm() {
    // 입력값 초기화
    document.getElementById("name").value = "";
    document.getElementById("birthdate").value = "";
  
    // 결과 이미지 숨기기
    document.getElementById("resultImage").style.display = "none";
  
    // 결과 화면 숨기고 입력 화면 다시 보이기
    document.getElementById("resultContainer").style.display = "none";
    document.getElementById("inputContainer").style.display = "flex";
}
