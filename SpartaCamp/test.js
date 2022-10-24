// function q1() {
//     let a = $(`#input-q1`).val();
//     if (a == ''){
//         alert("입력해야즤이이잉?")
//     } else {
//         alert(a);
//     }
// }

// function q2() {
//     let mail = $(`#input-q2`).val();
//     if (mail.includes('@')){
//         let domainWithDot = mail.split('@')[1];
//         let onlyDomain = domainWithDot.split('.')[0];
//         alert(onlyDomain);
//     } else {
//         alert("이메일이아니야!");
//     }
    // 1. input-q2 값을 가져온다.
    // 2. 만약 가져온 값에 @가 있으면 (includes 이용하기 - 구글링!)
    // 3. info@gmail.com -> gmail 만 추출해서 ( .split('@') 을 이용하자!)
    // 4. alert(도메인 값);으로 띄우기
    // 5. 만약 이메일이 아니면 '이메일이 아닙니다.' 라는 얼럿 띄우기



// function q2() {
//     // 1. input-q2 값을 가져온다.
//     let email = $('#input-q2').val();
//     // 2. 만약 가져온 값에 @가 있으면 (includes 이용하기 - 찾아보자!)
//     if (email.includes('@')) {
//         // 3. info@gmail.com -> gmail 만 추출해서
//         // 4. alert(도메인 값);으로 띄우기
//         let domainWithDot = email.split('@')[1];
//         let onlyDomain = domainWithDot.split('.')[0];
//         alert(onlyDomain);
//     } else {
//         // 5. 만약 이메일이 아니면 '이메일이 아닙니다.' 라는 얼럿 띄우기
//         alert('이메일이 아닙니다.');
//     }
// }

// function q3() {
//     let c = $(`#input-q3`).val();
//     if (c == ''){
//         alert('값이없잖아!');
//     } else {
//         let temp_html = `<li>${c}</li>`
//         $(`#names-q3`).append(temp_html);
//     }

    // 1. input-q3 값을 가져온다. let txt = ... q1, q2에서 했던 걸 참고!
    // 2. 가져온 값을 이용해 names-q3에 붙일 태그를 만든다. (let temp_html = `<li>${txt}</li>`) 요렇게!
//     // 3. 만들어둔 temp_html을 names-q3에 붙인다.(jQuery의 $('...').append(temp_html)을 이용하면 굿!)
// }


// function q3_remove() {
//     $(`#names_q3`).empty;
//     // 1. names-q3의 내부 태그를 모두 비운다.(jQuery의 $('....').empty()를 이용하면 굿!)
// }

// <div class="question-box">
// <h2>3. HTML 붙이기/지우기 연습</h2>
// <h5>3-1. 이름을 입력하면 아래 나오게 하기</h5>
// <h5>[완성본]3-2. 다지우기 버튼을 만들기</h5>
// <input id="input-q3" type="text" placeholder="여기에 이름을 입력" />
// <button onclick="q3()">이름 붙이기</button>
// <button onclick="q3_remove()">다지우기</button>
// <ul id="names-q3">
//     <li>세종대왕</li>
//     <li>임꺽정</li>
// </ul>
// </div>


