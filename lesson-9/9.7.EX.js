// 9.7.EX.js
"use strict";

const port =300;// @TODO: 포트 번호를 지정한다
const express = require('express');// @TODO: express 모듈을 가져온다
const homeController = require('./controllers/homeController');// @TODO: homeController 모듈을 가져온다
const app =express();// @TODO: express를 실행한다

/**
 * Listing 9.5 (p. 149)
 * 요청 본문으로부터 포스팅된 데이터 캡처
 *
 * app.use([path], callback, [callback])
 */
app.use(express.urlencoded({
    extended: false
})); // @TODO: express.urlencoded()를 이용해 URL-encoded 데이터를 파싱하도록 요청
app.use(express.json()); // @TODO: express.json()을 이용해 JSON 데이터를 파싱하도록 요청
app.use(homeController.logRequestPaths); // @TODO: homeController에서 logRequestPaths를 가져와 사용한다 (로깅 미들웨어)

/**
 * Listing 9.7 (p. 153)
 * 컨트롤러 함수의 참조를 통한 콜백의 대체
 *
 * app.get(path, [callback])
 * app.post(path, [callback])
 */

app.get("/itmes/:vegetable",homeController.sendVegParam);
app.get("/users/:username",homeController.sendUserParam); 
app.get("/courses/:courseId",homeController.sendCourseParam); 

app.get("/",homeController.getHome); 
app.get("/contact",homeController.getContact); 
app.get("/about",homeController.getAbout);
app.post("/contact",homeController.postContact); 

app.get("/dune",(req,res)=>{
    res.send("<h1>DUNE!!</h1>");
});

/**
 * 다른 라우트 수정
 */

app.listen(port,() => {
    console.log(`Express at: http://localhost:${port}`);
}); // @TODO: 포트 번호를 지정한다. 서버가 실행되면 콘솔에 로그를 남긴다.
