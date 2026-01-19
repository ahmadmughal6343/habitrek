import styles from "../assets/styles/Auth.module.css";
import { Form, Link, useActionData, useNavigation } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Loader2, X } from "lucide-react";
import useShow from "../hooks/useShow";
import { useEffect, useState } from "react";

const SignIn = () => {
  const data = useActionData();
  const { show, setShow } = useShow();
  const [showError, setShowError] = useState(false);
  const loader = useNavigation();
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
    error,
  } = styles;

  useEffect(() => {
    document.title = "Habitrek | Sign in";
  }, []);

  return (
    <>
      <main className="min-h-screen bg-[#f8fafc]">
        {showError && data?.message && (
          <div className={`${error} `}>
            <span>{data?.message}</span>
            <X
              size={16}
              onClick={() => setShowError(false)}
              className="cursor-pointer"
            />
          </div>
        )}
        <section className={wrapper}>
          <div className={card}>
            <h1 className={title}>Welcome Back</h1>
            <p className={subtitle}>Please enter your details</p>

            <Form method="post">
              <div className={formGroup}>
                <label htmlFor="email" className={label}>
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={input}
                  placeholder="you@example.com"
                />
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
                    placeholder="••••••••"
                    className={input}
                  />
                  {show ? (
                    <FaEye
                      onClick={() => setShow(!show)}
                      className="absolute right-4 cursor-pointer"
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setShow(!show)}
                      className="absolute right-4 cursor-pointer"
                    />
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={loader.state !== "idle"}
                onClick={() => setShowError(true)}
                className={button}
              >
                {loader.state !== "idle" ? (
                  <Loader2 className={styles.rotate} />
                ) : (
                  "Sign In"
                )}
              </button>
            </Form>

            <p className={footerText}>
              Don't have an account?{" "}
              <Link to="/auth/signup" className={link}>
                Sign up
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default SignIn;
