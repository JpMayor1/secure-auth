import { motion } from "framer-motion";
import { Lock, LogIn, ShieldCheck, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-full bg-primary flex flex-col overflow-hidden font-poppins">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500 opacity-20 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-[-200px] left-1/4 w-[400px] h-[400px] bg-indigo-500 opacity-20 blur-[160px] rounded-full"></div>
      </div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full px-8 py-6 flex items-center justify-between relative z-10"
      >
        <h1 className="text-white text-xs md:text-2xl font-bold tracking-wide flex items-center gap-2">
          <Lock className="text-white" size={24} />
          AuthPractice Test
        </h1>

        <div className="flex items-center gap-4">
          <Link
            to="/auth/login"
            className="text-white/80 hover:text-white text-xs md:text-base transition font-medium"
          >
            Login
          </Link>

          <Link
            to="/auth/register"
            className="px-4 py-2 bg-white text-primary text-xs md:text-base font-semibold rounded-xl hover:bg-gray-200 transition"
          >
            Register
          </Link>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white text-2xl md:text-4xl sm:text-6xl font-bold max-w-3xl leading-tight"
        >
          Practice Modern, Secure, and Smarter Authentication
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-white/70 text-sm md:text-lg sm:text-xl mt-4 max-w-2xl"
        >
          A hands-on environment designed to help developers and learners
          practice building strong, user-friendly, and secure authentication
          workflows — complete with animations, UI design, and modern
          authentication patterns.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex gap-4 mt-10"
        >
          <Link
            to="/auth/login"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs md:text-base bg-white text-primary font-semibold hover:bg-gray-200 transition"
          >
            <LogIn size={18} />
            Login
          </Link>

          <Link
            to="/auth/register"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs md:text-base border border-white text-white font-semibold hover:bg-white hover:text-primary transition"
          >
            <UserPlus size={18} />
            Register
          </Link>
        </motion.div>
      </div>

      {/* FEATURES */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-10">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <ShieldCheck
              className="text-white mx-auto hidden md:block"
              size={48}
            />
            <ShieldCheck className="text-white mx-auto md:hidden" size={38} />
            <h3 className="text-white font-semibold text-sm md:text-xl mt-4">
              Secure by Design
            </h3>
            <p className="text-white/70 text-xxs md:text-base mt-2">
              Learn how to build authentication workflows with good UX and
              real-world patterns.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <Lock className="text-white mx-auto hidden md:block" size={48} />
            <Lock className="text-white mx-auto md:hidden" size={38} />
            <h3 className="text-white font-semibold text-sm md:text-xl mt-4">
              Modern Techniques
            </h3>
            <p className="text-white/70 text-xxs md:text-base mt-2">
              Practice JWT, sessions, hashing, input validation, and UI security
              patterns.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <UserPlus
              className="text-white mx-auto hidden md:block"
              size={48}
            />
            <UserPlus className="text-white mx-auto md:hidden" size={38} />
            <h3 className="text-white font-semibold text-sm md:text-xl mt-4">
              Beginner Friendly
            </h3>
            <p className="text-white/70 text-xxs md:text-base mt-2">
              Easy-to-use UI with animations so you can focus on learning
              securely.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
