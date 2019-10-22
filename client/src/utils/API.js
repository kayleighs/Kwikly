import axios from "axios";
//Use below to test server locally, replace axios below with axiosInstance, also I used Chrome extension, allow-control-allow-origin
/* const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001'
});
 */
export default {

  // Gets all jobs
  getJobs: function () {
    return axios.get("/api/jobs");
  },
  getJobsbyCategory: function(category) {
    return axios.get("/api/jobs/by-category/" + category);
  },
  getJobsbySearch: function(term) {
    return axios.get("/api/jobs/by-search/" + term)
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
  updateJobApplicants: function(id, jobData) {
    return axios.put("/api/jobs/" + id, jobData);
  },
  // Saves a job to the database
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },
  saveEmployer: function (userData) {
    return axios.post("/api/userEmployer", userData);
  },
  getUser: function (id) {
    return axios.get("/api/user/"+ id);
  },
  getUserByEmail (email) {
    return axios.get("/api/user/by-email/" + email);
  },
  getEmployer: function (id) {
    return axios.get("/api/userEmployer/" + id);
  },
  getUsers: function() {
    return axios.get("/api/user");
  },
  getEmployers: function () {
    return axios.get("/api/userEmployer");
  },
  editUser: function (id, userData) {
    return axios.put("/api/user/" + id, userData);
  },
  editUserByEmail: function (email, userData) {
    return axios.put("/api/user/by-email/" + email, userData);
  },
  updateUserApplicant: function (id, userData) {
    return axios.put("/api/user/" + id, userData);
  },
  editEmployer: function(id, userData) {
    return axios.put("/api/userEmployer/" + id, userData);
  },
  getDirections: function(originLat, originLng, destination, travelMode) {
    return axios.get("/dir/" + originLat + "/" + originLng + "/" + destination + "/" + travelMode);
    //See index.js in the 'routes' folder (not the one nested within the 'api' folder)
    //for how this axios call to Directions API is made
  }
};
