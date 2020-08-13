import axios from "../../axios-default"

export const getAllRoles = async (page = 1, limit = 10) => {
  try {
    const roles = await axios.get(`api/v1/roles?limit=${limit}&page=${page}`)

    return roles.data
  } catch (err) {
    console.error(err)
  }
}
