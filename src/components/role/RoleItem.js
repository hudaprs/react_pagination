import React from "react"
import PropTypes from "prop-types"

const RoleItem = ({ role }) => {
  return (
    <div className='container'>
      <ul className='item'>
        <li className='item-list'>{role.Name}</li>
      </ul>
    </div>
  )
}

RoleItem.propTypes = {
  role: PropTypes.object.isRequired
}

export default RoleItem
