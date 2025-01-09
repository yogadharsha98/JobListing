const express = require('express');
const {
  getJobs,
  postJobs,
  getJob,
  updateJobs,
  deleteJob,
} = require('../controllers/JobController');
const router = express.Router();

router.route('/jobs').get(getJobs);
router.route('/add-job').post(postJobs);
router.route('/job/:id').get(getJob);
router.route('/update-job/:id').put(updateJobs);
router.route('/:id').delete(deleteJob);

module.exports = router;
