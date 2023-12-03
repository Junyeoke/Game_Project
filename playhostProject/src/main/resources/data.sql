
-- PRODUCT
-- INSERT INTO PRODUCT VALUES (2105090,'Speedrunners Paradise: Sky is the limit','짧은 설명','https://cdn.akamai.steamstatic.com/steam/apps/2105090/header.jpg?t=1688407213',6700,6700,'액션',0,TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS') , NULL , 'N',NULL);
-- INSERT INTO PRODUCT VALUES (2105210,'Fantasy Grounds - Potbellied Kobold''s Guide to Villains & Lairs','짧은 설명','https://cdn.akamai.steamstatic.com/steam/apps/2105210/header.jpg?t=1660655885',26000,20800,'인디',20,TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS') , NULL , 'N',NULL);

-- INSERT INTO LIBRARY VALUES(SQ_LIBRARY.NEXTVAL , 2 , 2105090 , TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS'),'N' , NULL , 'N' , NULL);
-- INSERT INTO LIBRARY VALUES(SQ_LIBRARY.NEXTVAL , 2 , 2105210 , TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS'),'N' , NULL , 'N' , NULL);

-- USER
INSERT INTO PROJECT_USER VALUES (SQ_PROJECT_USER.NEXTVAL , '어드민','ADMIN@ADMIN','$2a$10$kNGYVeJsbti9bqXH0xyNr.I5TKsijZeeIuP0gp3WahJVFjMRw0WyK','어드민 자신 소개글','ROLE_ADMIN',100000,TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS'), NULL , 'N' , NULL);
INSERT INTO PROJECT_USER VALUES (SQ_PROJECT_USER.NEXTVAL , '유저','s@s','$2a$10$kNGYVeJsbti9bqXH0xyNr.I5TKsijZeeIuP0gp3WahJVFjMRw0WyK','유저 자신 소개글','ROLE_USER',100000,TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS'), NULL , 'N' , NULL);

-- Qna
-- INSERT INTO QNA VALUES (SQ_QNA.NEXTVAL, 1,'유저이름1','유저이름1의.',NULL,NULL ,'N', TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS'), NULL , 'N' , NULL);
-- INSERT INTO QNA VALUES (SQ_QNA.NEXTVAL, 1,'유저이름1','유저이름1의 2번 질문입니다sssssssssssssssssssssssssssssssssssssssssssssssssssssssssss.',NULL,NULL ,'N', TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS'), NULL , 'N' , NULL);
-- INSERT INTO QNA VALUES (SQ_QNA.NEXTVAL, 2,'유저이름2','유저이름2의 1번 질문입니다.',NULL,NULL ,'N', TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS'), NULL , 'N' , NULL);
-- INSERT INTO QNA VALUES (SQ_QNA.NEXTVAL, 3,'유저이름3','유저이름3의 1번 질문입니다.',NULL,NULL ,'N', TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS'), NULL , 'N' , NULL);
-- INSERT INTO QNA VALUES (SQ_QNA.NEXTVAL, 4,'유저이름4','유저이름4의 1번 질문입니다.',NULL,NULL ,'N', TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS'), NULL , 'N' , NULL);
-- INSERT INTO QNA VALUES (SQ_QNA.NEXTVAL, 5,'유저이름5','유저이름5의 1번 질문입니다.',NULL,NULL ,'N', TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS'), NULL , 'N' , NULL);

-- CART
-- INSERT INTO CART VALUES(SQ_CART.NEXTVAL, 1,'N', 2105090,
--                         TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS') , NULL , 'N',NULL);
-- INSERT INTO CART VALUES(SQ_CART.NEXTVAL, 1,'N', 2105210,
--                         TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS') , NULL , 'N',NULL);

-- LIBRARY
-- INSERT INTO LIBRARY VALUES (SQ_LIBRARY.NEXTVAL,1,2105090, TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS'),'N',NULL,'N',NULL);
-- INSERT INTO LIBRARY VALUES (SQ_LIBRARY.NEXTVAL,1,2105210, TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS'),'N',NULL,'N', NULL);
-- INSERT INTO LIBRARY VALUES (SQ_LIBRARY.NEXTVAL,2,2105090, TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS'),'N',NULL,'N',NULL);
-- INSERT INTO LIBRARY VALUES (SQ_LIBRARY.NEXTVAL,2,2105210, TO_CHAR(SYSDATE,'YYYY-MM-DD HH24:MI:SS'),'N',NULL,'N', NULL);


COMMIT;