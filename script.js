const allQuestions = [
    {q: "지구에서 가장 큰 대륙은?", opts: ["아시아", "아프리카", "유럽", "남아메리카"], ans: 0},
    {q: "물의 화학식은?", opts: ["CO2", "H2O", "O2", "NaCl"], ans: 1},
    {q: "대한민국의 수도는?", opts: ["서울", "부산", "대구", "인천"], ans: 0},
    {q: "세계에서 가장 긴 강은?", opts: ["아마존강", "나일강", "황허강", "한강"], ans: 1},
    {q: "사과는 영어로?", opts: ["Banana", "Apple", "Grape", "Orange"], ans: 1},
    {q: "소리의 속도가 가장 빠른 매체는?", opts: ["진공", "공기", "물", "고체"], ans: 3},
    {q: "1년은 몇 일?", opts: ["356", "365", "366", "360"], ans: 1},
    {q: "피타고라스의 정리는?", opts: ["a²+b²=c²", "E=mc²", "F=ma", "V=IR"], ans: 0},
    {q: "태양계에서 가장 큰 행성은?", opts: ["지구", "목성", "토성", "금성"], ans: 1},
    {q: "광합성에 필요한 것은?", opts: ["물", "이산화탄소", "햇빛", "모두"], ans: 3},
    {q: "대한민국의 공식 언어는?", opts: ["한국어", "영어", "중국어", "일본어"], ans: 0},
    {q: "세계에서 인구가 가장 많은 나라는?", opts: ["인도", "인도네시아", "미국", "중국"], ans: 3},
    {q: "심장에서 피를 내보내는 혈관은?", opts: ["정맥", "동맥", "모세혈관", "림프관"], ans: 1},
    {q: "한글을 창제한 왕은?", opts: ["세종대왕", "태조", "정조", "광해군"], ans: 0},
    {q: "눈에 보이지 않는 빛은?", opts: ["적외선", "가시광선", "청색광", "적색광"], ans: 0},
    {q: "세계에서 가장 높은 산은?", opts: ["에베레스트", "한라산", "알프스", "백두산"], ans: 0},
    {q: "도쿄는 어느 나라의 수도인가?", opts: ["중국", "일본", "한국", "몽골"], ans: 1},
    {q: "컴퓨터의 중앙 처리 장치는?", opts: ["GPU", "CPU", "RAM", "SSD"], ans: 1},
    {q: "피타고라스가 활동한 나라는?", opts: ["이집트", "그리스", "로마", "인도"], ans: 1},
    {q: "달의 표면에는 대기가?", opts: ["있다", "없다"], ans: 1},
    {q: "빨간색과 파란색을 섞으면 나오는 색은?", opts: ["녹색", "보라색", "주황색", "갈색"], ans: 1},
    {q: "대한민국의 국화는?", opts: ["진달래", "개나리", "무궁화", "장미"], ans: 2},
    {q: "세계에서 가장 작은 대륙은?", opts: ["유럽", "오세아니아", "남극", "아프리카"], ans: 1},
    {q: "물의 끓는점은 몇 도씨인가?", opts: ["0도", "50도", "100도", "200도"], ans: 2},
    {q: "인간의 몸에서 가장 큰 장기는?", opts: ["심장", "간", "폐", "피부"], ans: 3},
    {q: "소리를 측정하는 단위는?", opts: ["미터", "데시벨", "킬로그램", "와트"], ans: 1},
    {q: "대한민국 태극기의 네 괘 중 하나가 아닌 것은?", opts: ["건", "곤", "리", "진"], ans: 3},
    {q: "세계에서 가장 큰 바다는?", opts: ["대서양", "인도양", "북극해", "태평양"], ans: 3},
    {q: "가장 가까운 별은?", opts: ["달", "태양", "화성", "금성"], ans: 1},
    {q: "인류 최초로 달에 착륙한 사람은?", opts: ["유리 가가린", "닐 암스트롱", "버즈 올드린", "마이클 콜린스"], ans: 1},
    {q: "우리나라의 대표적인 전통 악기는?", opts: ["피아노", "가야금", "기타", "트럼펫"], ans: 1},
    {q: "컴퓨터 용량의 단위 중 가장 작은 것은?", opts: ["GB", "MB", "KB", "TB"], ans: 2},
    {q: "지구의 위성은?", opts: ["금성", "달", "화성", "목성"], ans: 1},
    {q: "지구를 한 바퀴 도는 데 걸리는 시간은?", opts: ["24시간", "7일", "30일", "365일"], ans: 0},
    {q: "비타민C가 풍부한 과일은?", opts: ["사과", "바나나", "감귤", "배"], ans: 2},
    {q: "세계에서 가장 넓은 사막은?", opts: ["사하라", "고비", "아라비아", "남극"], ans: 3},
    {q: "세계 3대 미항이 아닌 것은?", opts: ["시드니", "리우데자네이루", "나폴리", "도쿄"], ans: 3},
    {q: "세계에서 가장 긴 동물은?", opts: ["코끼리", "기린", "보트웜", "고래"], ans: 2},
    {q: "우리나라의 5대 명산이 아닌 것은?", opts: ["설악산", "지리산", "한라산", "알프스"], ans: 3},
    {q: "서울을 가로지르는 강은?", opts: ["한강", "낙동강", "금강", "영산강"], ans: 0},
    {q: "우리나라에서 가장 큰 섬은?", opts: ["울릉도", "진도", "제주도", "거제도"], ans: 2},
    {q: "컴퓨터의 메모리 장치를 무엇이라 하는가?", opts: ["RAM", "CPU", "SSD", "GPU"], ans: 0},
    {q: "세계에서 가장 높은 빌딩은?", opts: ["타이페이101", "부르즈 할리파", "에펠탑", "롯데월드타워"], ans: 1},
    {q: "세계에서 가장 깊은 바다는?", opts: ["마리아나 해구", "태평양", "대서양", "인도양"], ans: 0},
    {q: "우리나라 국보 1호는?", opts: ["숭례문", "경복궁", "석굴암", "첨성대"], ans: 0},
    {q: "로마의 건국자는?", opts: ["유리우스", "로물루스", "네로", "아우구스투스"], ans: 1},
    {q: "세계에서 가장 작은 나라는?", opts: ["바티칸", "모나코", "산마리노", "리히텐슈타인"], ans: 0},
    {q: "빛의 속도는 초속 몇 km인가?", opts: ["30", "300", "3,000", "300,000"], ans: 3},
    {q: "대표적인 알칼리 금속 원소는?", opts: ["나트륨", "철", "구리", "금"], ans: 0}
  ];
  
  const QUIZ_COUNT = 20;
  const QUIZ_SCORE = 100 / QUIZ_COUNT;
  
  let selectedQuestions = [];
  let current = 0;
  let userAnswers = [];
  let showAnswerMode = false;
  
  const quizArea = document.getElementById('quiz-area');
  const resultDiv = document.getElementById('result');
  const retryBtn = document.getElementById('retry-btn');
  const darkBtn = document.getElementById('darkmode-btn');
  
  function addAnswerBtn() {
    if (!document.getElementById('fixed-answer-btn')) {
      const btn = document.createElement('button');
      btn.id = 'fixed-answer-btn';
      btn.type = 'button';
      btn.textContent = '정답 확인';
      btn.style.position = 'fixed';
      btn.style.top = '72px';
      btn.style.right = '40px';
      btn.style.zIndex = 300;
      btn.style.padding = '20px 32px';
      btn.style.background = 'linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)';
      btn.style.color = '#fff';
      btn.style.border = 'none';
      btn.style.borderRadius = '18px';
      btn.style.fontSize = '1.15em';
      btn.style.fontWeight = '700';
      btn.style.letterSpacing = '0.15em';
      btn.style.cursor = 'pointer';
      btn.style.boxShadow = '0 6px 24px 0 rgba(80,120,255,0.20), 0 2px 8px rgba(0,0,0,0.07)';
      btn.style.display = 'none';
      btn.style.transition = 'background 0.22s, color 0.22s, box-shadow 0.22s, top 0.2s';
      btn.addEventListener('click', showPopupAnswer);
      document.body.appendChild(btn);
    }
  }
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function startQuiz() {
    selectedQuestions = [...allQuestions];
    shuffle(selectedQuestions);
    selectedQuestions = selectedQuestions.slice(0, QUIZ_COUNT);
  
    current = 0;
    userAnswers = Array(QUIZ_COUNT).fill(null);
    showAnswerMode = false;
    resultDiv.textContent = '';
    retryBtn.style.display = 'none';
    showQuestion(0);
  
    addAnswerBtn();
    document.getElementById('fixed-answer-btn').style.display = 'none';
  }
  
  function showQuestion(idx) {
    showAnswerMode = false;
    if (idx >= QUIZ_COUNT) {
      quizArea.innerHTML = `
        <div class="result fin-result">
          <div class="fin-anim">
            <svg width="86" height="86" viewBox="0 0 86 86" fill="none"><circle cx="43" cy="43" r="41" fill="#f5f7ff" stroke="#4e54c8" stroke-width="3"/><path d="M60 35L41 54L28 41" stroke="#4e54c8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="fin-msg">모든 문제를 다 풀었습니다!</div>
          <div class="fin-msg2">오른쪽 상단 <b>'정답 확인'</b> 버튼을 눌러 결과를 확인하세요.</div>
        </div>
      `;
      document.getElementById('fixed-answer-btn').style.display = 'block';
      retryBtn.style.display = 'block';
      return;
    }
    current = idx;
    const q = selectedQuestions[idx];
    quizArea.innerHTML = `
      <div class="question-block">
        <div class="question-title">
          <span class="badge">${idx+1}</span> <span>${q.q}</span>
        </div>
        <div class="options">
          ${q.opts.map((opt, i) => `
            <div class="option-block${userAnswers[idx] === i ? " selected" : ""}" data-idx="${i}">${opt}</div>
          `).join('')}
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-bg">
            <div class="progress-bar" style="width:${((idx+1)/QUIZ_COUNT)*100}%"></div>
          </div>
          <span class="progress-label">${idx+1} / ${QUIZ_COUNT}</span>
        </div>
      </div>
    `;
    document.querySelectorAll('.option-block').forEach(block => {
      block.addEventListener('click', function() {
        if (userAnswers[idx] !== null) return;
        const selected = parseInt(this.getAttribute('data-idx'), 10);
        userAnswers[idx] = selected;
        document.querySelectorAll('.option-block').forEach(b => b.classList.remove('selected'));
        this.classList.add('selected');
        setTimeout(() => showQuestion(current + 1), 280);
      });
    });
  }
  
  function showPopupAnswer() {
    let correctCount = 0;
    let table = `
      <table class="answer-table answer-table-emph wide-table" style="width:100%;margin-top:20px;">
        <thead>
          <tr>
            <th>번호</th>
            <th>문제</th>
            <th>내 답</th>
            <th>정답</th>
            <th>정오답</th>
          </tr>
        </thead>
        <tbody>
    `;
    selectedQuestions.forEach((q, i) => {
      const userAns = userAnswers[i];
      const isCorrect = userAns === q.ans;
      if (isCorrect) correctCount++;
      table += `
        <tr class="row-${isCorrect ? "correct" : "wrong"}">
          <td>${i+1}</td>
          <td>${q.q}</td>
          <td>
            <span class="ans-choice ${isCorrect ? "acorrect" : "awrong"}">
              ${userAns!==null ? q.opts[userAns] : "-"}
            </span>
          </td>
          <td>
            <span class="ans-choice acorrect">
              ${q.opts[q.ans]}
            </span>
          </td>
          <td>
            ${
              isCorrect
                ? '<span class="mark-correct"><svg width="22" height="22" style="vertical-align:-5px;"><circle cx="11" cy="11" r="10" fill="#e4fbe8"/><path d="M16 9L10.2 14L7 11" stroke="#32d17c" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round"/></svg> <b>정답</b></span>'
                : '<span class="mark-wrong"><svg width="22" height="22" style="vertical-align:-5px;"><circle cx="11" cy="11" r="10" fill="#ffeaea"/><path d="M8 8l6 6M14 8l-6 6" stroke="#ff4c4c" stroke-width="2.1" stroke-linecap="round"/></svg> <b>오답</b></span>'
            }
          </td>
        </tr>
      `;
    });
    table += `</tbody></table>`;
    const score = Math.round(correctCount * QUIZ_SCORE);
  
    let popup = document.createElement('div');
    popup.id = 'answer-popup';
    popup.style.position = 'fixed';
    popup.style.top = '0';
    popup.style.left = '0';
    popup.style.width = '100vw';
    popup.style.height = '100vh';
    popup.style.background = 'rgba(70,90,180,0.13)';
    popup.style.zIndex = 9999;
    popup.style.display = 'flex';
    popup.style.alignItems = 'center';
    popup.style.justifyContent = 'center';
    popup.style.backdropFilter = 'blur(2px)';
  
    let content = document.createElement('div');
    content.className = 'popup-wide-content';
    content.style.background = 'linear-gradient(120deg, #f0f4ff 90%, #e9eaff 100%)';
    content.style.color = '#233';
    content.style.borderRadius = '26px';
    content.style.maxWidth = '1100px';
    content.style.width = '98vw';
    content.style.maxHeight = '93vh';
    content.style.overflowY = 'auto';
    content.style.boxShadow = '0 8px 40px rgba(80,120,255,0.22), 0 2px 12px rgba(0,0,0,0.09)';
    content.style.padding = '36px 22px 22px 22px';
    content.style.position = 'relative';
    content.innerHTML = `
      <div style="font-weight:bold;font-size:1.23em;margin-bottom:13px;">
        <span style="color:#4e54c8;">결과 : ${QUIZ_COUNT}문제 중 ${correctCount}문제 정답!</span><br>
        <span style="font-size:0.97em;color:#444;">점수: <b>${score}점 / 100점</b></span>
      </div>
      <div class="answer-table-scroll">${table}</div>
      <button id="close-popup-btn" style="display:block;margin:24px auto 0 auto;padding:15px 38px;border:none;background:linear-gradient(90deg,#4e54c8 0%,#8f94fb 100%);color:#fff;font-size:1.08em;font-weight:bold;letter-spacing:0.09em;border-radius:11px;cursor:pointer;box-shadow:0 2px 9px rgba(80,120,255,0.10);">닫기</button>
    `;
    popup.appendChild(content);
  
    if(document.body.classList.contains('dark')) {
      content.style.background = 'linear-gradient(120deg, #23263c 90%, #262847 100%)';
      content.style.color = '#e2e6ed';
      let tableElem = content.querySelector('table');
      if (tableElem) tableElem.style.background = '#23263c';
    }
  
    document.body.appendChild(popup);
  
    document.getElementById('close-popup-btn').onclick = function() {
      document.body.removeChild(popup);
    };
  
    retryBtn.style.display = 'block';
  }
  
  retryBtn.addEventListener('click', startQuiz);
  
  function setDarkMode(on) {
    document.body.classList.toggle('dark', on);
    darkBtn.textContent = on ? '☀️' : '🌙';
    darkBtn.title = on ? '라이트모드 전환' : '다크모드 전환';
    localStorage.setItem('darkmode', on ? '1' : '0');
  }
  darkBtn.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains('dark'));
  });
  if (localStorage.getItem('darkmode') === '1' ||
     (localStorage.getItem('darkmode') === null && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setDarkMode(true);
  }
  
  startQuiz();