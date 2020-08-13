import axios from "axios"

const instance = axios.create({
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImhpZ2hhZG1pbkBnbWFpbC5jb20iLCJFeHBpcmVzQXQiOjE1OTcyMjcxOTksIklzc3VlZEF0IjoxNTk3MjIzNTk5LCJOYW1lIjoiSGlnaCBBZG1pbiIsIlJvbGVOYW1lIjoiSGlnaCBBZG1pbiIsIlVzZXJJRCI6MX0.PmWldOwTKnw3Lwaud9xXM2t3mZrxDjNAYvyP4dZEOyc"
  }
})

export default instance
