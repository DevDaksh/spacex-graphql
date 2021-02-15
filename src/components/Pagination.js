import React from 'react'

export const Pagination = ({ launchPerPage, totalLaunches, paginate, currentPage }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalLaunches / launchPerPage); i++) {
        pageNumbers.push(i)
    }

    const checkPage = (id) => {
        if (currentPage === id) {
            return "activePage"
        }
        else {
            return;
        }
    }

    return (
        <nav>
            <ul className="pagination bg-gray-200 w-8/12 sm:rounded-md">
                {
                    pageNumbers.map(num => (
                        <li key={num} className={`px-2 text-gray-900 text-base ${checkPage(num)}`}>
                            <a onClick={(e) => {
                                e.preventDefault()
                                paginate(num)
                            }}
                                href="!#">
                                {num}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}
