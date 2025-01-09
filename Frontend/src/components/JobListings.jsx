import React, { useEffect, useState } from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'
import Spinner from './Spinner'

const JobListings = ({isHome = false}) => {
  const [ jobs , setJobs ] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchJobs = async()=>{
      try {
        const res = await fetch('/api/jobs')
        const data = await res.json();
        if(isHome){
          setJobs(data.slice(0,3))
        }else{
          setJobs(data)
        }
      } catch (error) {
        console.log(error)
      }finally{
        setLoading(false)
      }
      
    }
    fetchJobs()
  },[])

  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome ? 'Recent Jobs' : 'Browse Jobs'}
      </h2>

      {loading ? (<Spinner loading={loading} />):(
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job)=>(
          <JobListing key={job._id} job={job} />
        ))}
        </div>
      )}

    </div>
  </section>
  )
}

export default JobListings
