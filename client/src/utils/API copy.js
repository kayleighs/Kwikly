import axios from "axios";
//Use below to test server locally, replace axios below with axiosInstance, also I used Chrome extension, allow-control-allow-origin
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001'
});

export default {

  // Gets all jobs
  getJobs: function () {
    return axiosInstance.get("/api/jobs");
  },
  // Gets the job with the given id
  getjob: function (id) {
    return axiosInstance.get("/api/jobs/" + id);
  },
  // Deletes the job with the given id
  deletejob: function (id) {
    return axiosInstance.delete("/api/jobs/" + id);
  },
  // Saves a job to the database
  savejob: function (jobData) {
    return axiosInstance.post("/api/jobs", jobData);
  },
  // Saves a job to the database
  saveUser: function (userData) {
    return axiosInstance.post("/api/user", userData);
  },
  saveEmployer: function (userData) {
    return axiosInstance.post("/api/userEmployer", userData);
  },
  getUser: function (id) {
    return axiosInstance.get("/api/user/" + id);
  },
  getEmployer: function (id) {
    return axiosInstance.get("/api/userEmployer/" + id);
  },
  getUsers: function() {
    return axiosInstance.get("/api/user");
  },
  getEmployers: function () {
    return axiosInstance.get("/api/userEmployer");
  },
  editUser: function (id, userData) {
    return axiosInstance.put("/api/user/" + id, userData);
  },
  editEmployer: function(id, userData) {
    return axiosInstance.put("/api/userEmployer/" + id, userData);
  },
  getDirections: function(origin, destination, travelMode) {
    return axiosInstance.get("/dir/" + origin + "/" + destination + "/" + travelMode);
    //See index.js in the 'routes' folder (not the one nested within the 'api' folder)
    //for how this axios call to Directions API is made
  }
};
