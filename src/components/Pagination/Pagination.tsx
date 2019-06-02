import React from 'react';
import './Pagination.scss';

const RECORDS_COUNT_PER_PAGE = 7;

function buildPagination(config = {
    currentPage: 1,
    total: 10,
    baseUrl: ''
}) {
    let curPage = config.currentPage;
    let total = config.total;
    let baseUrl = config.baseUrl;
    let delta = 1;

    if (total % RECORDS_COUNT_PER_PAGE === 0) {
        delta = 0;
    }

    let pageCount = total / RECORDS_COUNT_PER_PAGE + delta;
    let isShowPrevEllipsis = true;
    let isShowNextEllipsis = true;
    let isFirstPageDisabled = false;
    let isLastPageDisabled = false;
    let pageList = [];

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

export default function Pagination() {

    return (
        <div className="pagination">
            <a className="first disabled" href="pagination.firstPage">«</a>
            <a className="ellipsis">...</a>
            <a href={"item.page"} className="active">item.page</a>
            <a className="ellipsis">...</a>
            <a className="last" href="pagination.lastPage">»</a>
        </div>
    );
}