import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import toast from "react-hot-toast";
export default function Contact() {
const formRef = useRef()
const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ma2cx18','template_3c8xn45',formRef.current, {
        publicKey:'V19BBTTGhBJnt8UCZ',
      })
      .then(
        (res) => {
          if(res.text){
            toast.success('Email sent successfully')
            formRef.current ='';
          }
        },
        (error) => {
            toast.error('Something Went Wrong',error)
        },
      );
  };
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      className="w-3/4 mx-auto h-full lg:flex justify-center items-center gap-5"
      id="contact"
    >
      <motion.div variants={variants} className="flex-1 flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Lets Work Together</h1>
        <motion.div variants={variants}>
          <h1 className="font-bold">Mail</h1>
          <span>akash@gmail.com</span>
        </motion.div>
        <motion.div variants={variants}>
          <h1 className="font-bold">Adress</h1>
          <span>Dhaka,Bangladesh</span>
        </motion.div>
        <motion.div variants={variants}>
          <h1 className="font-bold">Phone</h1>
          <span>123 456 789</span>
        </motion.div>
      </motion.div>

      <motion.div className="flex-1 relative">

        <motion.div className="absolute -z-10 m-auto" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3,duration:1}}>
        <svg
          width="200px"
          height="200px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
          initial={{pathLength:0}}
          whileInView={{pathLength:1}}
          transition={{duration:2}}
            d="M5.13641 12.764L8.15456 9.08664C8.46255 8.69065 8.61655 8.49264 8.69726 8.27058C8.76867 8.07409 8.79821 7.86484 8.784 7.65625C8.76793 7.42053 8.67477 7.18763 8.48846 6.72184L7.77776 4.9451C7.50204 4.25579 7.36417 3.91113 7.12635 3.68522C6.91678 3.48615 6.65417 3.35188 6.37009 3.29854C6.0477 3.238 5.68758 3.32804 4.96733 3.5081L3 4C3 14 9.99969 21 20 21L20.4916 19.0324C20.6717 18.3121 20.7617 17.952 20.7012 17.6296C20.6478 17.3456 20.5136 17.0829 20.3145 16.8734C20.0886 16.6355 19.7439 16.4977 19.0546 16.222L17.4691 15.5877C16.9377 15.3752 16.672 15.2689 16.4071 15.2608C16.1729 15.2536 15.9404 15.3013 15.728 15.4001C15.4877 15.512 15.2854 15.7143 14.8807 16.119L11.8274 19.1733M12.9997 7C13.9765 7.19057 14.8741 7.66826 15.5778 8.37194C16.2815 9.07561 16.7592 9.97326 16.9497 10.95M12.9997 3C15.029 3.22544 16.9213 4.13417 18.366 5.57701C19.8106 7.01984 20.7217 8.91101 20.9497 10.94"
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        </motion.div>
        <motion.form onSubmit={sendEmail} ref={formRef} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4,duration:1}} className="flex flex-col justify-center gap-3 mt-8">
          <input
            className="p-2  bg-transparent  border border-gray-200 rounded-md"
            type="text"
            name="name"
            placeholder="Name"
          />
          <input
            className="p-2  bg-transparent  border border-gray-200 rounded-md"
            type="email"
            name="email"
            placeholder="Email"
          />
          <textarea
            className="p-2  bg-transparent  border border-gray-200 rounded-md"
            rows={6}
            name="message"
            placeholder="text your message"
          ></textarea>
          <button
            className="border-none p-3 rounded-md text-black bg-green-500 hover:bg-green-400"
            type="submit"
          >
            Submit
          </button>
        </motion.form>

      </motion.div>

    </motion.div>
  );
}