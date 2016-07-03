//설치된 모듈을 require 명령어를 통해 불러 온다.
var express = require('express');

//express 생성자 를 app에 저장
var app = express();

//서버의 root 에 get 요청이 왔을 때 'Hello world!'라는
//신호를 클라이언트로 보내라. (eventListener 공부하기)
app.get('/', function(req, res){
  res.send('Hello world!');
});

//첫번째 인자는 포트 번호 두번째는 함수
app.listen(3000, function(){
  console.log('Server On!');
});
