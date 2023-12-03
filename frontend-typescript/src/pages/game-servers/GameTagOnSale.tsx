import React, { useState } from 'react';
import { useEffect } from 'react';
import form from '../../assets/js/form';
import Pagination from '@mui/material/Pagination';
import IProduct from '../../types/IProduct';
import designesis from '../../assets/js/designesia';
import ProductService from '../../services/product/ProductService';
import { Link } from 'react-router-dom';

function GameTagOnSale() {
    // Todo : 랜더링
    const [render, setRender] = useState<boolean>(false);
    useEffect(() => {
        designesis();
        form();
    }, []);

    // todo  상품 배열 변수
    const [productList, setProductList] = useState<Array<IProduct>>([]);

    //  TODO  공통 변수(필수)  page(현재 페이지), count(총 페이지 건수) , pageSize(3,6,9 배열  1페이지 당 건수)
    const [page, setPage] = useState<number>(1); // 현재 페이지 번호         최초값 1
    const [count, setCount] = useState<number>(1); //총페이지 건수          최초값 1
    const [pageSize, setPageSize] = useState<number>(12); //1페이지당 개수  최초값 20
    //  검색어 변수
    const [searchName, setSearchName] = useState<string>('');

    //  검색어 수동 바인딩
    const onChangeSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    useEffect(() => {
        retrieveProductList();
    }, [page, pageSize]);

    //  todo  전체조회 - 데이터베이스
    const retrieveProductList = () => {
        ProductService.getAll(searchName, page - 1, pageSize)
            .then((response: any) => {
                const { product, totalPages } = response.data;

                setProductList(product);
                setCount(totalPages);
                setRender(true);
            })
            .catch((e: Error) => {
                console.log(e);
            });
    };

    // TODO : Pagenation 수동 바인딩
    // TODO : 페이지 번호를 누르면 -> page 변수에 값 저장
    const handlePageChange = (event: any, value: number) => {
        // value == 화면의 페이지번호
        setPage(value);
    };

    return (
        <>
            <div className="no-bottom no-top" id="content">
                <div id="top"></div>

                {/* 섹션 1번 */}
                <section className="jarallax">
                    {/* 백그라운드 이미지 */}
                    <img src={require('../../assets/images/background/3.webp')} className="jarallax-img" alt="" />
                    <div className="de-gradient-edge-top"></div>
                    <div className="de-gradient-edge-bottom"></div>

                    {/* 분문시작 */}
                    <div className="container z-1000" style={{ height: '2400px' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <div className="subtitle wow fadeInUp mb-3">Most complete</div>
                            </div>

                            {/* 검색어 입력창 */}
                            <div className="row mb-5 justify-content-center">
                                {/* w-50 : 크기 조정, mx-auto : 중앙정렬(margin: 0 auto), justify-content-center */}
                                <div className="col-12 w-50 input-group mb-3" id="form_sb">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="게임 이름을 입력해 주세요"
                                        value={searchName}
                                        onChange={onChangeSearchName}
                                    />
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-outline-primary overflow-hidden"
                                            type="button"
                                            onClick={retrieveProductList}
                                            style={{ height: '49px', width: '75px' }}
                                        >
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Game Collection */}
                            <div className="col-lg-6">
                                <h2 className="wow fadeInUp" data-wow-delay=".2s">
                                    게임 컬렉션
                                </h2>
                                <div className="spacer-20"></div>
                            </div>

                            {/* 태그 목록 */}
                            <div className="col-lg-6">
                                <ul id="filters" className="float-end float-sm-start wow fadeInUp" data-wow-delay="0s">
                                    <li>
                                        <a href="#" data-filter="*" className="selected">
                                            All&nbsp;Games
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-filter=".무료">
                                            무료
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-filter=".액션">
                                            액션
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-filter=".인디">
                                            인디
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-filter=".캐주얼">
                                            캐주얼
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-filter=".어드벤처">
                                            어드벤쳐
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 상품 목록 */}
                        <div id="gallery" className="row g-4 ">
                            {render &&
                                productList != undefined &&
                                productList.map((value, index) => (
                                    <div
                                        className={`col-lg-4 col-md-6 item ${value.tag} ${value.price == 0 && '무료'}`}
                                        key={index}
                                    >
                                        <div className="de-item" style={{ width: '400px', height: '230px' }}>
                                            <div className="d-overlay">
                                                <div className="d-label">
                                                    {value.discount > 0 && <>{value.discount}% off !</>}
                                                </div>
                                                <div className="d-text">
                                                    <h4>{value.name}</h4>
                                                    {value.discount > 0 ? (
                                                        <>
                                                            <p className="d-price">
                                                                Price <del>{value.price}</del>
                                                                <span className="price">{value.finalPrice} 원</span>
                                                            </p>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <p className="d-price">
                                                                Price{' '}
                                                                <span className="price">
                                                                    {value.price > 0 ? value.price + ' 원' : `무료`}
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
                                                style={{ height: '230px' }}
                                            />
                                        </div>
                                    </div>
                                ))}
                        </div>
                        {render && (
                            <div className="container" id="paging">
                                {/* 페이징 처리 */}
                                <Pagination
                                    className="pagination"
                                    count={count}
                                    page={page}
                                    siblingCount={1}
                                    boundaryCount={1}
                                    shape="rounded"
                                    onChange={handlePageChange}
                                    sx={{
                                        color: 'white', // 흰색 글자색
                                        display: 'flex',
                                        justifyContent: 'center',
                                        marginTop: '20px', // 원하는 여백 설정
                                        '& .Mui-selected': {
                                            backgroundColor: 'white', // 선택된 페이지의 배경색
                                            color: '#1E1F22', // 선택된 페이지의 글자색
                                            '&:hover': {
                                                backgroundColor: 'white', // 선택된 페이지의 호버 배경색
                                            },
                                        },
                                        '& .MuiPaginationItem-root': {
                                            fontSize: '1rem', // 페이지 아이템의 글자 크기
                                            minWidth: '30px', // 페이지 아이템의 최소 너비
                                            height: '30px', // 페이지 아이템의 높이
                                            color: 'white', // 선택되지 않은 페이지 아이템의 글자색
                                            '&:hover': {
                                                backgroundColor: 'black', // 선택되지 않은 페이지 아이템의 호버 배경색
                                            },
                                            '&.Mui-selected': {
                                                backgroundColor: 'purple', // 특정 페이지일 때 선택된 페이지의 배경색
                                                color: 'white', // 특정 페이지일 때 선택된 페이지의 글자색
                                                '&:hover': {
                                                    backgroundColor: 'purple', // 특정 페이지일 때 선택된 페이지의 호버 배경색
                                                },
                                            },
                                        },
                                    }}
                                />
                            </div>
                        )}
                    </div>
                    {/* 본문 끝 */}
                </section>
            </div>
        </>
    );
}

export default GameTagOnSale;
