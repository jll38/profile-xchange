"use client";
import Sidebar from "@/components/common/sidebar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { useState } from "react";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [picture, setPicture] = useState<null | File>(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Email regex validation
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleValidation = () => {
    if (!email || !firstName || !lastName || !username || !emailConfirm) {
      setErrorMessage("Enter all required fields.");
    }    
    if (!validateEmail(email)) {
      setErrorMessage("Invalid email address.");
      return false;
    }
    if (email !== emailConfirm) {
      setErrorMessage("Emails do not match.");
      return false;
    }
    // Additional validations if needed...
    setErrorMessage("none")
    return true;
  };

  return (
    <>
      <Sidebar />
      <main className="flex h-screen items-center justify-center p-0 sm:p-24 text-white z-20">
        <div className="w-[50em] bg-black/20 min-h-[20rem] rounded-xl p-[2em]">
          <div className="text-[1.5em]">CREATE YOUR PROFILE</div>
          <div className="w-full border-b mb-[2rem]"></div>
          <div>
            <div className="flex gap-[2em] mb-[1rem]">
              <div className="w-full">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  className="bg-transparent"
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required={true}
                />
              </div>
              <div className="w-full">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  className="bg-transparent"
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-[2em] mb-[1rem]">
              <div className="w-full">
                <Label htmlFor="username">Username</Label>
                <Input
                  className="bg-transparent"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <div className="text-[.75em] text-slate-400 mt-[.5em]">This will be your display name.</div>
              </div>
            </div>
            <div className="flex gap-[2em] mb-[1rem]">
              <div className="w-full">
                <Label htmlFor="email">Email</Label>
                <Input
                  className="bg-transparent"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex gap-[2em] mb-[1rem]">
              <div className="w-full">
                <Label htmlFor="emailConfirm">Confirm Email</Label>
                <Input
                  className="bg-transparent"
                  type="email"
                  id="emailConfirm"
                  value={emailConfirm}
                  onChange={(e) => setEmailConfirm(e.target.value)}
                />
                {errorMessage && (
                  <Alert variant="destructive">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{errorMessage}</AlertDescription>
                  </Alert>
                )}
              </div>
            </div>
            <div className="w-[20rem] mb-[1em]">
              <Label htmlFor="picture">Picture</Label>
              <Input
                className="bg-slate-100 text-slate-900"
                id="picture"
                type="file"
                onChange={(e) =>
                  e.target.files && setPicture(e.target.files[0])
                }
              />
            </div>
            <Button
              onClick={() => {
                handleValidation();
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
