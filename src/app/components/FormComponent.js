"use client";
import { useState } from "react";
import Link from "next/link";

export default function FormComponent({ type }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleEmailChange = (e) => {
    if (e.target.value.length < 30) {
      setEmail(e.target.value);
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    if (newPassword.length < 20) {
      setPassword(newPassword);
      setPasswordError("");
    } else {
      setPasswordError("Password must be between 8 and 20 characters long");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);

    if (password !== value) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleTermsAcceptedChange = (event) => {
    setTermsAccepted(event.target.checked);
  };

  const handleSubmitSignUp = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }

    if (!termsAccepted) {
      // handle terms not accepted error
      return;
    }

    try {
      const response = await fetch("/api/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // handle successful registration
      } else {
        // handle registration error
      }
    } catch (error) {
      console.error(error);
      // handle fetch error
    }
  };

  const handleSubmitLogIn = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        // Login successful
        console.log("Login successful");
      } else {
        const { message } = await response.json();
        // Login failed
        console.error(message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {type === "login" ? (
        <section className="FormComponentSection">
          <form onSubmit={handleSubmitLogIn}>
            <h2 className="IngresarTitle">Ingresar</h2>
            <div className="mb-4">
              <label className="labelConfig" htmlFor="email">
                Email
              </label>
              <input
                className="InputConfig"
                id="email"
                type="email"
                placeholder="Email"
                onChange={handleEmailChange}
                value={email}
                required
              />
            </div>
            <div className="mb-6">
              <label className="labelConfig" htmlFor="password">
                Contaseña
              </label>
              <input
                className="InputConfig"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
            <div className="flex items-center justify-between">
              <button className="BtnMain" type="submit">
                Ingresar
              </button>
              <Link
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="/404"
              >
                Olvidaste la contaseña?
              </Link>
            </div>
          </form>
        </section>
      ) : (
        <section className="FormComponentSectionSignIn">
          <form onSubmit={handleSubmitSignUp}>
            <h2 className="IngresarTitle">Registrarse</h2>
            <div className="mb-4">
              <label className="labelConfig" htmlFor="email">
                Email
              </label>
              <input
                className="InputConfig"
                id="email"
                type="email"
                placeholder="Email"
                onChange={handleEmailChange}
                value={email}
                required
              />
            </div>
            <div className="mb-4">
              <label className="labelConfig" htmlFor="password">
                Contaseña
              </label>
              <input
                className="InputConfig"
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
            <div className="mb-4">
              <label className="labelConfig" htmlFor="confirmPassword">
                Confirmar Contaseña
              </label>
              <input
                className="InputConfig"
                id="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
            <div className="mb-4">
              <label
                className="labelConfig labelCheckBoxConfig"
                htmlFor="termsAccepted"
              >
                <input
                  className="CheckBoxConfig"
                  type="checkbox"
                  name="Aceptar Terminos y Condiciones"
                  id="T&S"
                  checked={termsAccepted}
                  onChange={handleTermsAcceptedChange}
                  required
                />
                Aceptar Terminos y Condiciones
              </label>
            </div>
            <div className="flex items-center justify-between">
              <button className="BtnMain" type="submit">
                Registrarse
              </button>
            </div>
          </form>
        </section>
      )}
    </>
  );
}
