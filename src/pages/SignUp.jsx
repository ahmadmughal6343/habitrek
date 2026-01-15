import { Form, Link, useActionData } from "react-router-dom";
import styles from "../assets/styles/Auth.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const SignUp = () => {
  const data = useActionData();
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(true);
  const {
    wrapper,
    card,
    title,
    subtitle,
    formGroup,
    label,
    input,
    button,
    footerText,
    link,
  } = styles;
  useEffect(() => {
    document.title = "Habitrek | Sign up";
  }, []);

  return (
    <>
      <main className="min-h-screen bg-[#f8fafc] grid">
        {showError && data?.message && (
          <div className={`${styles.error} `}>
            <span>{data?.message}</span>
            <X
              size={16}
              onClick={() => setShowError(false)}
              className="cursor-pointer"
            />
          </div>
        )}
        <section className={wrapper}>
          <div
            className={card}
            style={{ maxWidth: "clamp(320px, 90vw, 600px)" }}
          >
            <h1 className={title}>Create Account</h1>
            <p className={subtitle}>Join us and start your journey</p>

            <Form method="post">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={formGroup}>
                  <label htmlFor="firstName" className={label}>
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={input}
                  />
                </div>
                <div className={formGroup}>
                  <label htmlFor="lastName" className={label}>
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={input}
                  />
                </div>
              </div>

              <div className={formGroup}>
                <label htmlFor="email" className={label}>
                  Email Address:
                </label>
                <input type="email" id="email" name="email" className={input} />
              </div>

              <div className={formGroup}>
                <label htmlFor="password" className={label}>
                  Password:
                </label>
                <div className="flex items-center relative">
                  <input
                    type={show ? "text" : "password"}
                    id="password"
                    name="password"
                    className={input}
                  />
                  {show ? (
                    <FaEye
                      onClick={() => setShow(!show)}
                      className="absolute right-4"
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setShow(!show)}
                      className="absolute right-4"
                    />
                  )}
                </div>
              </div>

              <button
                type="submit"
                className={button}
                onClick={() => setShowError(true)}
              >
                Create Account
              </button>
            </Form>

            <p className={footerText}>
              Already a member?{" "}
              <Link to="/auth/signin" className={link}>
                Sign in
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignUp;
