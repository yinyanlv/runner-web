import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import './Pagination.scss';

interface PaginationProps {
    paging: any;
    handleClick: any;
}

class Pagination extends PureComponent<PaginationProps>{

    render() {
        const paging = buildPagination(this.props.paging);

        return (
            <div className="pagination">
                <Link className={clsx('first', {disabled: paging.isFirstPageDisabled})} to={""} onClick={() => {
                    this.props.handleClick({page: paging.firstPage})
                }}>«</Link>
                {
                    paging.isShowPrevEllipsis && <span className="ellipsis">...</span>
                }
                {paging.pageList.map((item) => {
                    return <Link to={""} key={item.page} className={clsx({active: item.isActive})} onClick={() => {
                        this.props.handleClick({page: item.page})
                    }}>{item.page}</Link>;
                })}
                {
                    paging.isShowNextEllipsis && <span className="ellipsis">...</span>
                }
                <Link className={clsx('last', {disabled: paging.isLastPageDisabled})} to={""} onClick={() => {
                    this.props.handleClick({page: paging.lastPage})
                }}>»</Link>
            </div>
        );
    }
}

function buildPagination(paging: {
    currentPage: number,
    total: number,
    perPageNumber: number,
    baseUrl: string
}) {
    let curPage = paging.currentPage;
    let total = paging.total;
    let baseUrl = paging.baseUrl;
    let delta = 1;

    if (total % paging.perPageNumber === 0) {
        delta = 0;
    }

    let pageCount = total / paging.perPageNumber + delta;
    let isShowPrevEllipsis = true;
    let isShowNextEllipsis = true;
    let isFirstPageDisabled = false;
    let isLastPageDisabled = false;
    let pageList: any = [];

    if (pageCount < 6) {
        isShowPrevEllipsis = false;
        isShowNextEllipsis = false;
    } else {
        if (curPage < 4) {
            isShowPrevEllipsis = false;
        }
        if (curPage > pageCount - 3) {
            isShowNextEllipsis = false;
        }
    }

    if (curPage === 1) {
        isFirstPageDisabled = true;
    }

    if (curPage === pageCount) {
        isLastPageDisabled = true;
    }

    if (pageCount < 6) {
        // 总页数小于等于5时
        for (let i = 1; i < pageCount + 1; i++) {
            if (i === curPage) {
                pageList.push({
                    page: i,
                    isActive: true
                });
            } else {
                pageList.push({
                    page: i
                });
            }
        }
    } else if (curPage < 4) {
        // 总页数大于5，当前页码小于等于3时，隐藏左侧ellipsis
        for (let i = 1; i < 6; i++) {
            if (i === curPage) {
                pageList.push({
                    page: i,
                    isActive: true
                });
            } else {
                pageList.push({
                    page: i
                });
            }
        }
    } else if (curPage > pageCount - 3) {
        // 总页数大于5，当前页码距离总页数小于等于3时，隐藏右侧ellipsis
        for (let i = pageCount - 4; i < pageCount + 1; i++) {
            if (i === curPage) {
                pageList.push({
                    page: i,
                    isActive: true
                });
            } else {
                pageList.push({
                    page: i
                });
            }
        }
    } else {
        // 当前页码的左右两侧各放置两个页码
        for (let i = curPage - 2; i < curPage + 3; i++) {
            if (i === curPage) {
                pageList.push({
                    page: i,
                    isActive: true
                });
            } else {
                pageList.push({
                    page: i
                });
            }
        }
    }

    return {
        baseUrl: baseUrl,
        isShowPrevEllipsis: isShowPrevEllipsis,
        isShowNextEllipsis: isShowNextEllipsis,
        pageList: pageList,
        isFirstPageDisabled: isFirstPageDisabled,
        isLastPageDisabled: isLastPageDisabled,
        firstPage: 1,
        lastPage: pageCount
    };
}

export default Pagination;