import React, { useState } from 'react'
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import styles from '../style';
import Axios from 'axios';

import { slideIn } from '../utils/motion';


const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  
  const [avaiter, setAvaiter] = useState(null)

  const handleFileInputChange = (e) => {
    setAvaiter(e.target.files[0]);
    console.log(e.target.files[0], avaiter, "LLLLLLLLlsgggg");
    const uploder = new FileReader();
    if (avaiter!=null) {
      if (avaiter.type === 'application/pdf') {
        if (avaiter.size <= 20 * 1024 * 1024) { // Convert MB to bytes
          uploder.readAsDataURL(e.target.files[0]);
        } else {
         window.alert('File size exceeds 20 MB.');
        }
      } 
    }
    else {
      window.alert('Please select a PDF file.');
      }
   
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email && !name) {
      window.alert("all fields are need to be not filled")
    }
    else {
      const formdata = new FormData();
      formdata.append('email', `${email}`);
      formdata.append('name', `${name}`);
     
      formdata.append('avaiter', avaiter)
      console.log(formdata, "lllllllllllllllllllllll");

      await Axios.post("http://localhost:3001/", formdata, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      ).then(()=>{
       window.alert("file saved")
      }).catch((err) => {


        window.alert(err)
        return Promise.reject(err)
      })
    }
  };
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden justify-center'>
      <motion.div variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get Resume Checked</p>
        <h3 className={styles.sectionHeadText}>On Our ATS</h3>
        
         
         
              <form encType="multipart/form-data" className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xl font-bold text-white-700"
                  >
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
              className="block text-xl font-bold text-white-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>

                

                <div className='flex items-center'>
                  <label
                    htmlFor="avatar"
              className="block text-xl font-bold text-white-700"
                  >Upload Your Resume</label>
                  <div className="mt-2 flex items-center">
                   
                    <label
                      htmlFor="file-input"
                      className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                    >
                      <span>Upload a file</span>
                      <input
                        type="file"
                        name="avaiter"
                        id="file-input"
                        accept=".pdf"
                        onChange={handleFileInputChange}
                        className="sr-only"
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"

              className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-xl font-bold text-white-700 rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
                
              </form>
            

         
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")