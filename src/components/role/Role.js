import React, { useEffect } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

// Actions
import {
  GET_ROLES_REQUESTED,
  SET_LIMIT_REQUESTED
} from "../../redux/actions/role-action"

// Components
import RoleForm from "./RoleForm"
import RoleItem from "./RoleItem"
import Pagination from "../Pagination"

function Role({
  role: { roles, message, status, loading, limit },
  getRoles,
  setLimit
}) {
  useEffect(() => {
    getRoles()

    // eslint-disable-next-line
  }, [])

  return (
    <div className='mt-2 container'>
      {/* Role Form */}
      {roles.Meta && (
        <RoleForm
          currentPage={roles.Meta.CurrentPage}
          getRoles={getRoles}
          setLimit={setLimit}
        />
      )}

      {loading ? (
        <div className='text-center'>
          <span className='fas fa-circle-notch fa-spin fa-3x'></span>
        </div>
      ) : (
        <>
          {/* Role List */}
          {roles.Results &&
            roles.Results.map((role) => <RoleItem role={role} key={role.ID} />)}

          {/* Pagination */}
          {roles.Meta && (
            <Pagination meta={roles.Meta} getRoles={getRoles} limit={limit} />
          )}
        </>
      )}
    </div>
  )
}

Role.propTypes = {
  role: PropTypes.object.isRequired,
  getRoles: PropTypes.func.isRequired,
  limit: PropTypes.number
}

function mapStateToProps(state) {
  return {
    role: state.role
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getRoles: (page, limit) =>
      dispatch({ type: GET_ROLES_REQUESTED, payload: { limit, page } }),
    setLimit: (limit) => dispatch({ type: SET_LIMIT_REQUESTED, payload: limit })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Role)
