// TODO : Link 를 사용하면 랜더링 문제가 생김

import React, { useEffect, useState } from "react";
import customMarquee from "../assets/js/custom-marquee";
import customSwiper1 from "../assets/js/custom-swiper-1";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store/store";
import { logout } from "../store/slices/auth";
import { Link, useNavigate } from "react-router-dom";
import ProductService from "../services/product/ProductService";

function Header() {
  useEffect(() => {
    customMarquee();
    customSwiper1();
  }, []);

  const navigate = useNavigate();

  // Todo : 공유 저장소 변수(state.변수명) 가져오기
  // Todo : 사용법 : useSelector((state) => {state.변수명})
  // Todo : 로그인 정보 상태 변수를 가져오고 싶음 (isLoggedIn : true / false)
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const { user } = useSelector((state: RootState) => state.auth);
  const [tags, setTags] = useState<Array<string>>([]);

  // Todo : 공유저장소 함수 가져오기
  // Todo : 불러오기    : useAppDispatch()
  // Todo : 함수 사용법 : dispatch(함수명)
  // Todo : 함수 사용법 : dispatch(login) , dispatch(logout)
  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logout())
      .unwrap()
      .then(() => {
        alert("로그아웃 되셨습니다.");
        navigate("/login");
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  return (
    <div>
      {/* <!-- header begin --> */}
      <header className="transparent">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex sm-pt10">
                <div className="de-flex-col">
                  <div className="de-flex-col">
                    {/* <!-- logo begin --> */}
                    <div id="logo">
                      <Link to="/">
                        <img
                          className="logo-main"
                          src="images/logo.png"
                          alt=""
                        />
                        <img
                          className="logo-mobile"
                          src="images/logo-mobile.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    {/* <!-- logo close --> */}
                  </div>
                </div>

                <div className="de-flex-col header-col-mid">
                  <ul id="mainmenu">
                    {/* 첫번째 메뉴 home/ homepage one ~ five */}
                    <li>
                      <Link className="menu-item" to="/">
                        홈
                      </Link>
                    </li>
                    {/* GameServers */}
                    <li>
                      <Link className="menu-item" to="/games">
                        게임
                      </Link>
                      <ul>
                        <li>
                          <Link className="menu-item" to="/games">
                            게임 컬렉션
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" to="/game-tag-action">
                            액션 게임
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" to="/game-tag-adventure">
                            어드벤쳐 게임
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" to="/game-tag-simulation">
                            시뮬레이션 게임
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" to="/game-tag-indi">
                            인디 게임
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" to="/game-tag-casual">
                            캐주얼 게임
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" to="/game-tag-rpg">
                            RPG 게임
                          </Link>
                        </li>
                        <li>
                          <Link className="menu-item" to="/game-tag-strategy">
                            전략 게임
                          </Link>
                        </li>
                      </ul>
                    </li>
                   
                    {/* Support */}
                    <li>
                      <Link className="menu-item" to="#">
                        지원
                      </Link>
                      <ul>
                       
                        <li>
                          <Link className="menu-item" to="/contact">
                            1:1문의하기
                          </Link>
                        </li>
                      </ul>
                    </li>
                    {/* news */}
                    <li>
                      <Link className="menu-item" to="/news">
                        뉴스
                      </Link>
                    </li>
                    {/* Company */}
                    <li>
                      <Link className="menu-item" to="/about">
                        소개
                      </Link>
                      
                    </li>
                    {/* More Pages */}
                    <li>
                      <Link className="menu-item" to="#">
                        More Pages
                      </Link>

                      {/* 로그인 , 로그아웃 , 회원가입 */}
                      <ul>
                        {isLoggedIn ? (
                          <>
                            <li>
                              <a className="menu-item" onClick={handleLogOut}>
                                로그아웃
                              </a>
                            </li>
                            {user?.role === "ROLE_ADMIN" && (
                              <>
                                {" "}
                                <li>
                                  <a
                                    className="menu-item"
                                    href="/control-panel"
                                  >
                                    관리자 페이지
                                  </a>
                                </li>
                                <li>
                                  <Link
                                    className="menu-item"
                                    to="/control-panel-modify"
                                  >
                                    관리자 페이지 수정
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="menu-item"
                                    to="/control-panel-refund"
                                  >
                                    관리자 환불페이지
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="menu-item"
                                    to="/control-panel-qna"
                                  >
                                    관리자 QNA 페이지
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="menu-item"
                                    to="/admin-library"
                                  >
                                    관리자 라이브러리
                                  </Link>
                                </li>
                              </>
                            )}
                            {user?.role === "ROLE_USER" && (
                              <>
                                {" "}
                                <li>
                                  <Link
                                    className="menu-item"
                                    to="/user-library"
                                  >
                                    라이브러리
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    className="menu-item"
                                    to="/user-qna-list"
                                  >
                                    Q & A
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/cart" className="menu-item">
                                    장바구니
                                  </Link>
                                </li>
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            {" "}
                            <li>
                              <Link className="menu-item" to="/login">
                                로그인
                              </Link>
                            </li>
                            <li>
                              <Link className="menu-item" to="/register">
                                회원가입
                              </Link>
                            </li>
                          </>
                        )}
                      </ul>
                    </li>
                  </ul>
                </div>

                {/* 장바구니 , 로그인 */}
                <div className="de-flex-col">
                  <div className="menu_side_area">
                    {isLoggedIn && user?.role == "ROLE_USER" && (
                      <Link to="/user-library" className="btn-line">
                        마이페이지
                      </Link>
                    )}

                    {isLoggedIn && user?.role == "ROLE_ADMIN" && (
                      <Link to="/admin-library" className="btn-line">
                        관리자 페이지
                      </Link>
                    )}

                    <span id="menu-btn"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- header close --> */}
    </div>
  );
}

export default Header;
