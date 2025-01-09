const Job = require('../models/Job');

//get all jobs

const getJobs = async (req, res) => {
  let jobs;
  try {
    jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    console.log(err);
  }
  if (!jobs) {
    res.status(404).json({ message: 'No jobs found' });
  }
};

//post job
const postJobs = async (req, res) => {
  const { title, type, description, location, salary, company } = req.body;

  let job;

  try {
    job = new Job({
      title,
      type,
      description,
      location,
      salary,
      company,
    });
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    console.log(error);
  }
  if (!job) {
    res.status(500).json({ message: 'Unable to add job' });
  }
};

//get job
const getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.status(200).json(job);
  } catch (error) {
    res.status(400).json({ message: 'Job not found' });
  }
};

//update job
const updateJobs = async (req, res) => {
  const id = req.params.id;
  const { title, type, description, location, salary, company } = req.body;

  let job;

  try {
    job = await Job.findByIdAndUpdate(id, {
      title,
      type,
      description,
      location,
      salary,
      company,
    });
    await job.save();
    res.status(200).json(job);
  } catch (error) {
    console.log(error);
  }
  if (!job) {
    res.status(500).json({ message: "Couldn't update job" });
  }
};

//delete job
const deleteJob = async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(400).json({ message: 'Job not found' });
  }

  try {
    await Job.findByIdAndDelete(job);
    res.status(200).json({ message: 'Job deleted' });
  } catch (error) {
    res.status(500).json({ message: 'failed to delete' });
  }
};

module.exports = {
  getJobs,
  getJob,
  postJobs,
  updateJobs,
  deleteJob,
};
