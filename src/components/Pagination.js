import React from 'react'

export const Pagination = ({ launchPerPage, totalLaunches, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalLaunches / launchPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map(num => (
                        <li key={num}>
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
