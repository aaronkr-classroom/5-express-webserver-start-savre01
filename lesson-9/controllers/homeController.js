// homeController.js
"use strict";

/**
 * Listing 9.6 (p. 153)
 * 콜백 함수를 homeController.js의 홈 컨트롤러로 이동
 */
// @TODO: exports 객체를 사용해 sendReqParam 함수를 모듈로 내보낸다
exports.sendvegParam = (req,res) =>{
    let veg = req.params.vegetable.toUpperCase();
    res.send(`this is the <span style='color:blue'>%{veg}</span`);
};
exports.sendUserParam = (req,res) => {
    let uname = req.params.username.toUpperCase();
    res.send(`this is the <span style='color:goldenrod'>%{uname}</span`);

}; 
exports.sendCourseParam = (req,res) => {
    let course = req.params.courseId.toUpperCase();
    res.send(`this is the <span style='color:goldenrod'>%{course}</span`);

}; 
 // 지정 라우트 요청 처리를 위한 함수 생성


/**
 * 다른 라우트를 옮기기
 */
exports.getHome = (req,res) => {
    res.send("this is the <span style='color:goldenrod'>Home</span")
};
exports.getAbout = (req,res) => {
    res.send("this is the <span style='color:goldenrod'>About</span")
};
exports.getContact = (req,res) => {
    res.send("this is the <span style='color:goldenrod'>Conatact</span")
};
exports.postContact = (req,res) => {
    res.send("Contact info submitted!");
};
// @TODO: exports 객체를 사용해 getHome 함수를 모듈로 내보낸다

// @TODO: exports 객체를 사용해 getContact 함수를 모듈로 내보낸다


 // @TODO: exports 객체를 사용해 postContact 함수를 모듈로 내보낸다

// @TODO: exports 객체를 사용해 logRequestPaths 미들웨어 함수를 모듈로 내보낸다
exports.logRequestPaths = (req,res,next) => {
    console.log(`request to: ${req.url}`);
    next();
};
