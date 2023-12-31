import React, { useState } from "react";
import { useEffect } from "react";
import form from "../../assets/js/form";
import Pagination from "@mui/material/Pagination";
import IProduct from "../../types/IProduct";
import designesis from "../../assets/js/designesia";
import ProductService from "../../services/product/ProductService";
import { Link } from "react-router-dom";
import AdminProductService from "../../services/admin/AdminProductService";
import { colors } from "@mui/material";
import ReviewService from "../../services/review/ReviewService";

function Games() {
  // Todo : 랜더링
  const [render, setRender] = useState<boolean>(false);

  // todo  상품 배열 변수
  const [productList, setProductList] = useState<Array<any>>([]);
  const [productList2, setProductList2] = useState<Array<string>>([]);
  const [productTag, setProductTag] = useState<Array<any>>([]);
  // 태그담는 곳
  const [tag, setTag] = useState<string>("");
  let [tag2, setTag2] = useState<Array<string>>([]);

  //  TODO  공통 변수(필수)  page(현재 페이지), count(총 페이지 건수) , pageSize(3,6,9 배열  1페이지 당 건수)
  const [page, setPage] = useState<number>(1); // 현재 페이지 번호         최초값 1
  const [count, setCount] = useState<number>(1); //총페이지 건수          최초값 1
  const [pageSize, setPageSize] = useState<number>(10); //1페이지당 개수  최초값 20

  // todo : 태그페이징
  const [page2, setPage2] = useState<number>(1); // 현재 페이지 번호         최초값 1
  const [count2, setCount2] = useState<number>(1); //총페이지 건수          최초값 1
  const [pageSize2, setPageSize2] = useState<number>(10); //1페이지당 개수  최초값 20
  //  검색어 변수
  const [searchName, setSearchName] = useState<string>("");

  //  검색어 수동 바인딩
  const onChangeSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const tagChange = (event: any, tag2: any) => {
    let name = searchName;
    console.log("name : ", name);
    console.log("priceTag : ", priceTag);
    if (tag != tag2) {
      setPage2(1);
      setTag(tag2);
      setSearchName("");
      name = "";
      if (tag2 == "") {
        setPage(1);
      }
    }

    ReviewService.dd(tag2, name, priceTag, page2 - 1, pageSize2)
      .then((response: any) => {
        const { IsLikeProduct, totalPages } = response.data;
        setProductTag(IsLikeProduct);
        setCount2(totalPages);
        console.log("태그 : ", tag2);
        console.log("받은 데이터**가격제한 : ", response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  // todo : 전체조회 - 태그 포함 검색
  const searchByTagName = () => {
    if (tag == "") {
      ReviewService.dd(tag, searchName, priceTag, page - 1, pageSize)
        .then((response: any) => {
          const { IsLikeProduct, totalPages, tagList } = response.data;
          setProductTag(IsLikeProduct);
          setProductList2(tagList);
          setCount2(totalPages);
          setPage2(1);
          setRender(true);
          console.log(tag2);
          console.log("제품리스트", IsLikeProduct);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    } else {
      setPage2(1);
      tagChange(1, tag);
    }
  };

  //  todo  전체조회 - 데이터베이스-검색
  // const retrieveProductList2 = () => {
  //   if (tag == "") {
  //     ProductService.getAll(searchName, 1, pageSize)
  //       .then((response: any) => {
  //         const { product, totalPages } = response.data;
  //         setProductList(product);
  //         setCount(totalPages);
  //         setRender(true);
  //         setPage(1);
  //       })
  //       .catch((e: Error) => {
  //         console.log(e);
  //       });
  //   } else {
  //     setPage2(1);
  //     tagChange(1, tag);
  //   }
  // };

  // todo : 가격 설정
  let [priceTag, setPriceTag] = useState<number>(1000000);

  const changePriceTag = (event: any) => {
    setPriceTag(event);
    console.log(priceTag);
  };

  // todo : 따봉 개수 보여주기
  // let [likedValue, setLikedValue] = useState<string>("");
  const isLikedValue = (reviewCount: any, likeCount: any) => {
    let likedValue = ""
    if (likeCount / reviewCount > 0.8) {
      return "★★★★★"
    } else if (likeCount / reviewCount > 0.6) {
      return "★★★★"
    } else if (likeCount / reviewCount > 0.4) {
      return"★★★"
    } else if (likeCount / reviewCount > 0.2) {
      return"★★"
    } else {
      return "★"
    }
  };

  // TODO : Pagenation 수동 바인딩
  // TODO : 페이지 번호를 누르면 -> page 변수에 값 저장
  const handlePageChange2 = (event: any, value: number) => {
    // value == 화면의 페이지번호
    setPage2(value);
  };
  useEffect(() => {
    designesis();
    form();
  }, []);

  useEffect(() => {
    searchByTagName();
  }, [page, pageSize]);
  useEffect(() => {
    tagChange(1, tag);
  }, [page2, priceTag]);

  return (
    <>
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {/* 섹션 1번 */}
        <section className="jarallax">
          {/* 백그라운드 이미지 */}
          <img
            src={require("../../assets/images/background/3.webp")}
            className="jarallax-img"
            alt=""
          />
          <div className="de-gradient-edge-top"></div>
          <div className="de-gradient-edge-bottom"></div>

          {/* 분문시작 */}
          <div className="container z-1000" style={{ height: "auto" }}>
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="subtitle wow fadeInUp mb-3">Most complete</div>
              </div>

              {/* Game Collection */}
              <div className="col-lg-6">
                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                  게임 컬렉션
                </h2>
                <div className="spacer-20"></div>
              </div>
            </div>

            {/* 상품 목록 */}

            <div className="row" style={{ height: "auto"}}>
              <div id="" className="wow fadeInUp col-md-9 row g-4 mb-3">
                {tag === "" ? (
                  <>
                    {" "}
                    <div id="" className="row g-4  wow fadeInUp mb-3">
                      {render &&
                        productTag != undefined &&
                        productTag.map((value, index) => (
                          <div
                            className={`col-lg-6 col-md-6 item ${value.tag} ${
                              value.price == 0 && "무료" 
                            } wow fadeInUp `}
                            key={index}
                          >
                            <div
                              className="de-item"
                              style={{ height: "20rem" }}
                            >
                              <div className="d-overlay">
                                <div className="d-label">
                                  {value.discount > 0 && (
                                    <>{value.discount}% off !</>
                                  )}
                                </div>

                                <div
                                  className="d-label"
                                  style={{left:"20px" , width:"fit-content", backgroundColor:"rgba(255, 255, 255, 0.1)"}}
                                >
                                  {value.reviewCount > 0 ? (
                                    <span style={{ color:"#F4C025"}}>{isLikedValue(value.reviewCount, value.likeCount)}
                                    
                                    </span>
                                  ) : (
                                    <>리뷰가 없습니다.</>
                                  )}
                                </div>
                                <div className="d-text">
                                  <h4>{value.name}</h4>
                                  {value.discount > 0 ? (
                                    <>
                                      <p className="d-price">
                                        Price <del>{value.price}</del>
                                        <span className="price">
                                          {value.finalPrice} 원
                                        </span>
                                      </p>
                                    </>
                                  ) : (
                                    <>
                                      <p className="d-price">
                                        Price{" "}
                                        <span className="price">
                                          {value.price > 0
                                            ? value.price + " 원"
                                            : `무료`}
                                        </span>
                                      </p>
                                    </>
                                  )}

                                  <Link
                                    className="btn-main btn-fullwidth"
                                    to={`/game-detail/${value.pid}`}
                                  >
                                    Order Now
                                  </Link>
                                </div>
                              </div>
                              <img
                                src={value.imgUrl}
                                className="img-fluid"
                                alt=""
                                style={{ height: "400px" }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div id="" className="row g-4  wow fadeInUp mb-3 ">
                      {render &&
                        productTag != undefined &&
                        productTag.map((value, index) => (
                          <div
                            className={`col-lg-6 col-md-6 item ${value.tag} ${
                              value.price == 0 && "무료"
                            }`}
                            key={index}
                          >
                            <div
                              className="de-item"
                              style={{ height: "20rem" }}
                            >
                              <div className="d-overlay">
                                <div className="d-label">
                                  {value.discount > 0 && (
                                    <>{value.discount}% off !</>
                                  )}
                                </div>
                                <div className="d-text">
                                  <h4>{value.name}</h4>
                                  {value.discount > 0 ? (
                                    <>
                                      <p className="d-price">
                                        Price <del>{value.price}</del>
                                        <span className="price">
                                          {value.finalPrice} 원
                                        </span>
                                      </p>
                                    </>
                                  ) : (
                                    <>
                                      <p className="d-price">
                                        Price{" "}
                                        <span className="price">
                                          {value.price > 0
                                            ? value.price + " 원"
                                            : `무료`}
                                        </span>
                                      </p>
                                    </>
                                  )}

                                  <Link
                                    className="btn-main btn-fullwidth"
                                    to={`/game-detail/${value.pid}`}
                                  >
                                    Order Now
                                  </Link>
                                </div>
                              </div>
                              <img
                                src={value.imgUrl}
                                className="img-fluid"
                                alt=""
                                style={{ height: "400px" }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </>
                )}
              </div>

              {/* 사이드 바 */}

              <div
                id="sidebar"
                className="col-md-3"
                style={{ marginTop: "3rem" }}
              >
                {/* 장바구니 버튼 -> 삼항 - true false {장바구니 담기&& 장바구니 제거 } */}
                <div className="widget mb-1">
                  <h4>게임 이름</h4>
                  <div className="small-border" style={{ width: "100%" }}></div>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="게임 이름을 입력해 주세요"
                      value={searchName}
                      onChange={onChangeSearchName}
                      style={{
                        height: "2.5rem",
                        backgroundColor: "rgba(255, 255, 255, .1)",
                        borderColor: "rgba(255, 255, 255, .1)",
                        color: "white",
                        width: "9rem",
                      }}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary overflow-hidden"
                        type="button"
                        onClick={searchByTagName}
                        style={{
                          height: "2.5rem",
                          width: "5.5rem",
                          borderColor: "rgba(255, 255, 255, .1)",
                          color: "grey",
                        }}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>

                {/* 게임 태그(카테고리, 종류, 타입) 시작 */}
                <div className="widget">
                  <h4>Tags</h4>
                  <div className="small-border" style={{ width: "100%" }}></div>
                  <div>
                    <ul
                      // className="float-end float-sm-start wow fadeInUp"
                      data-wow-delay="0s"
                    >
                      <li>
                        <a
                          href="#"
                          onClick={() => tagChange(1, "")}
                          style={{ color: "white" }}
                        >
                          All&nbsp;Games
                        </a>
                      </li>
                      {productList2 &&
                        productList2
                          .filter(
                            (element, index, callback) =>
                              index ===
                              callback.findIndex((tag) => tag === element)
                          )
                          .filter((value: any, index) => value != "무료")
                          .map((value, index) => (
                            <li>
                              {value == null ? (
                                <a
                                  href="#"
                                  onClick={() => tagChange(1, value)}
                                  style={{ color: "white" }}
                                >
                                  기타
                                </a>
                              ) : (
                                <a
                                  href="#"
                                  onClick={() => tagChange(1, value)}
                                  style={{ color: "white" }}
                                >
                                  {value}
                                </a>
                              )}
                            </li>
                          ))}
                    </ul>
                  </div>
                </div>
                {/* 게임 태그(카테고리, 종류, 타입) 끝 */}
                <div className="widget">
                  <h4>가격별 항목</h4>
                  <div className="small-border" style={{ width: "100%" }}></div>

                  <ul
                    // className="float-end float-sm-start wow fadeInUp"
                    data-wow-delay="0s"
                  >
                    <li>
                      <a
                        href="#"
                        onClick={() => changePriceTag(1000000)}
                        style={{ color: "white" }}
                      >
                        전체 가격
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => changePriceTag(5000)}
                        style={{ color: "white" }}
                      >
                        ~5000￦
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => changePriceTag(10000)}
                        style={{ color: "white" }}
                      >
                        ~10000￦
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => changePriceTag(30000)}
                        style={{ color: "white" }}
                      >
                        ~30000￦
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => changePriceTag(50000)}
                        style={{ color: "white" }}
                      >
                        ~50000￦
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => changePriceTag(100000)}
                        style={{ color: "white" }}
                      >
                        ~100000￦
                      </a>
                    </li>

                    <li>
                      <a
                        href="#"
                        onClick={() => changePriceTag(0)}
                        style={{ color: "white" }}
                      >
                        무료 게임
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 사이드 바 */}
            </div>

            <>
              {/* 페이징 모음집 시작 */}

              <>
                {" "}
                {render && (
                  <div className="container" id="paging">
                    {/* 페이징 처리 */}
                    <Pagination
                      className="pagination"
                      count={count2}
                      page={page2}
                      siblingCount={1}
                      boundaryCount={1}
                      shape="rounded"
                      onChange={handlePageChange2}
                      sx={{
                        color: "white", // 흰색 글자색
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px", // 원하는 여백 설정
                        "& .Mui-selected": {
                          backgroundColor: "white", // 선택된 페이지의 배경색
                          color: "#1E1F22", // 선택된 페이지의 글자색
                          "&:hover": {
                            backgroundColor: "white", // 선택된 페이지의 호버 배경색
                          },
                        },
                        "& .MuiPaginationItem-root": {
                          fontSize: "1rem", // 페이지 아이템의 글자 크기
                          minWidth: "30px", // 페이지 아이템의 최소 너비
                          height: "30px", // 페이지 아이템의 높이
                          color: "white", // 선택되지 않은 페이지 아이템의 글자색
                          "&:hover": {
                            backgroundColor: "black", // 선택되지 않은 페이지 아이템의 호버 배경색
                          },
                          "&.Mui-selected": {
                            backgroundColor: "purple", // 특정 페이지일 때 선택된 페이지의 배경색
                            color: "white", // 특정 페이지일 때 선택된 페이지의 글자색
                            "&:hover": {
                              backgroundColor: "purple", // 특정 페이지일 때 선택된 페이지의 호버 배경색
                            },
                          },
                        },
                      }}
                    />
                  </div>
                )}
              </>
            </>
          </div>

          {/* 본문 끝 */}
        </section>
      </div>
    </>
  );
}

export default Games;
