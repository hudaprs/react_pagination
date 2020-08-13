import React from "react"
import PropTypes from "prop-types"

function RoleForm({ getRoles, setLimit }) {
  return (
    <form className='mb-2'>
      <label htmlFor='limit'>Limit Data</label>{" "}
      <select
        id='limit'
        onChange={(e) => {
          getRoles(1, e.target.value)
          setLimit(e.target.value)
        }}
      >
        <option value='' defaultValue>
          -Choose Limit-
        </option>
        <option value='5'>5</option>
        <option value='10'>10</option>
        <option value='15'>15</option>
        <option value='20'>20</option>
        <option value='30'>30</option>
        <option value='50'>50</option>
      </select>
    </form>
  )
}

RoleForm.propTypes = {
  getRoles: PropTypes.func.isRequired
}

export default RoleForm
