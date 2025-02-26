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
  
    // 결과값 만들기
    let resultText = "";
    if (daysDifference >= 0) {
      resultText = `${name}님의 기숙사는 ${sajuList[numForFinding]}입니다.`;
    } else {
      // daysDifference < 0일 때 배열 인덱스를 위해 '10 + numForFinding'
      resultText = `${name}님의 기숙사는 ${sajuList[10 + numForFinding]}입니다.`;
    }
  
    // 결과 표시
    document.getElementById("result").innerText = resultText;
  
    // 입력 창 숨기고 결과 창 보이기
    document.getElementById("inputContainer").style.display = "none";
    document.getElementById("resultContainer").style.display = "flex";
  }
  

function resetForm() {
    // 입력값 초기화
    document.getElementById("name").value = "";
    document.getElementById("birthdate").value = "";
  
    // 결과 화면 숨기고 입력 화면 다시 보이기
    document.getElementById("resultContainer").style.display = "none";
    document.getElementById("inputContainer").style.display = "flex";
  }
  