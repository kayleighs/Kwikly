import axios from "axios";
//Use below to test server locally, replace axios below with axiosInstance, also I used Chrome extension, allow-control-allow-origin
/* const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001'
}); */
export default {

  // Gets all jobs
  getJobs: function () {
    return axios.get("/api/jobs");
  },
  // Gets the job with the given id
  getjob: function (id) {
    return axios.get("/api/jobs/" + id);
  },
  // Deletes the job with the given id
  deletejob: function (id) {
    return axios.delete("/api/jobs/" + id);
  },
  // Saves a job to the database
  savejob: function (jobData) {
    return axios.post("/api/jobs", jobData);
  },
  // Saves a job to the database
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  getUsers: function() {
    return axios.get("/api/user");
  },
  editUser: function (id, userData) {
    return axios.put("/api/user/" + id, userData)
  }
};
