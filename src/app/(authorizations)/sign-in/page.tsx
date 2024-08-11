'use client'

import { FormEvent, useState } from "react";
import FormSignIn from "@/components/forms/FormSignIn";
import styles from "./SignIn.module.scss"
import FormSignUp from "@/components/forms/FormSignUp";

export default function SignIn() {
  const [isFlip, setIsFlip] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget)
    console.log(formData.get('email'));
  }

  const handleClick = () => {
    setIsFlip((state) => !state);
  }

  return (
    <div>
      <button onClick={handleClick}>Flip</button>
      <div className="flex items-center justify-center h-screen">
        <div className={`${styles.container} ${isFlip && styles.flipBack}`}>
          <div className="absolute w-full">
            <FormSignIn/>
          </div>
          <div className={`absolute w-full ${styles.flipBack}`}>
            <FormSignUp/>
          </div>
        </div>
      </div>
    </div>
  );
}
