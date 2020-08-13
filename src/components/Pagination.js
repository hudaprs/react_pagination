import React from "react"
import PropTypes from "prop-types"

function Pagination({ meta, getRoles, limit }) {
  const changePage = (e, type) => {
    e.preventDefault()

    type === "next-page"
      ? getRoles(meta.NextPage, limit)
      : getRoles(meta.PreviousPage, limit)
  }

  return (
    <div className='pagination-container mt-2'>
      <ul className='pagination'>
        {meta.PreviousPage !== 0 && (
          <li
            className='pagination-left'
            onClick={(e) => changePage(e, "previous-page")}
          >
            <span>Previous</span>
          </li>
        )}
        <li>
          <p>{`${meta.CurrentPage} Of ${meta.TotalPage} `}</p>
        </li>
        {meta.CurrentPage !== meta.TotalPage && (
          <li
            className='pagination-right'
            onClick={(e) => changePage(e, "next-page")}
          >
            <span>Next</span>
          </li>
        )}
      </ul>
    </div>
  )
}

Pagination.propTypes = {
  meta: PropTypes.object,
  getRoles: PropTypes.func.isRequired,
  limit: PropTypes.number
}

export default Pagination
