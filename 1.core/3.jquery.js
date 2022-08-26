$('#myId') // <div id='myId'></div>

// 과제: class myClass DOM들을 찾아라.
$('.myClass')

// 과제: name attribute value 가 surname 인 input DOM 들을 찾아라.
$("input[name='surname']") // <input name='surname'/>

// 과제: 아래 selector에 해당하는 HTML code를 작성하라.
$('#contents ul.people li') 
/*
collection에는 li를 담는것이고, li가 n개면 n개를 다 담는다.
<div id='contents>
    <ul class='people'>
        <li></li>
    </ul>
</div>
*/

$('a.external:first') //딱봐도 첫번째 반대는 last겠죠
/*
<a class='external'></a>
<a class='external'></a>
*/

$('tr:odd') //홀수 - (0번째부터 시작)첫번째 세번째
/*
<ul>
    <li></li>
    <li></li> --
    <li></li>
    <li></li> --
</ul>
*/

$('div:visivle') //짝수

$('div:gt(1)') // 1보다 크다.
/*
<div></div>
<div></div>
<div></div> --
*/

$('div:animated') // 움직이고 있는거

$('a[rel$="thinger"]') //단어의 끝 
/*
<a rel='do-nothinger'></a>
<a rel='so-thinger'></a>
*/

$('div.foo').has('p') // has는 foo 클래스 중 자식을 p로 가지고 있는 것만 return, chaining을 통한 filtering
/*
<div class='foo'>
    <p></p>
</div>
<div class='foo'>
</div>
*/

$('ul li').filter('.current') //filter는 속성을 가지고 있는 걸 return
/*
<ul>
    <li class='current'></li> --
    <li></li>
</ul>
*/

$('ul li').not('.current') 
/*
<ul>
    <li class='current'></li>
    <li></li> --
</ul>
*/

$('ul li').eq(1) // equal: n(1)번 인덱스를 찾는거, collection을 return함.

$('form :button') //form뒤에 공백은 자식 중에서 찾는다는 의미
/*
    <form>
        <button></button>
        <input type='button'>
    </form>
*/

$('form :radio') // <input type='radio'/>
$('form :checkbox') // <input type='chekbox'/>

$('form :checked') //마우스로 데이터 입력하는것들
/*
<input type='radio'/>
<input type='chekbox'/>
<select></select>
*/

$('form :selected')
/*
<select><option></option></select>
*/

$('form :enabled')
$('form :disabled')

$('form :file') // <input type='file'/>

$('form :input')
/*
<input type='text'/>
<textarea></textarea>
<select></select>
<button type='submit></button> - button, reset, submit
*/

$('form :text') // <input type='text'/>

$('form :password') // <input type='password'/>

$('form input[name="gender"]:radio')
// 과제: 위 selector에 해당하는 HTML code를 작성하라
/*
<form>
    <input type='radio' name='gender'/>
</form>
*/

$('form :reset') // <input type='reset'/>

$('form: submit') // <input type='submit'/>