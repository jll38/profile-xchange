"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FormDescription } from "../ui/form";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [signup, setSingup] = React.useState<string>("");

  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matching, setMatching] = React.useState<boolean>(false);
  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  useEffect(() => {
    console.log(email + " | " + password);
  }, [email, password]);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetID = e.target.getAttribute("id");
    if (targetID === "email") {
      setEmail(e.target.value);
    } else if (targetID === "confirmEmail") {
      setConfirmEmail(e.target.value);
      if (confirmEmail === email) {
        console.log(confirmEmail + " | " + email);
        setMatching(true);
      }
      console.log(matching);
    } else if (targetID === "password") {
      setPassword(e.target.value);
    } else {
      throw new Error("Invalid state change!");
    }
  };

  const checkEmail = () => {
    setSingup("login");
    // Will check to see if User exists
    //If exists, signup state will be set to 'login', else 'signup'
  };

  const validate = () => {};
  return (
    <>
      {!signup && (
        <div
          className={
            "flex flex-col gap-3 w-[20rem] border border-white p-10 bg-black/10 rounded-xl"
          }
          {...props}
        >
          <div className="mb-4">
            <div className="text-[1em] text-center font-semibold">
              Login or create an account
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="grid gap-2">
              <div className="text-center text-slate-200 text-[.8em]">
                Enter your email below
              </div>
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  className="text-slate-900"
                  disabled={isLoading}
                  onChange={handleChange}
                />
              </div>
              <Button
                disabled={isLoading}
                className="flex gap-2"
                onClick={checkEmail}
              >
                {isLoading && <i className="fa-solid fa-spinner fa-spin"></i>}
                Sign In with Email
              </Button>
            </div>
          </form>
          <div className="relative">
            <div className="flex justify-between absolute inset-0 flex items-center">
              <span className="w-1/4 border-t" />
              <span className="w-1/4 border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="text-white px-2 text-muted-foreground text-[.8em]">
                Or continue with
              </span>
            </div>
          </div>
          <Button
            type="button"
            disabled={isLoading}
            className="text-black bg-white hover:bg-gray-100 flex gap-2"
          >
            {isLoading ? (
              <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
              <i className="fa-brands fa-github"> </i>
            )}{" "}
            Github
          </Button>
        </div>
      )}

      {signup === "signup" && (
        <div
          className={
            "flex flex-col gap-3 w-[20rem] border border-white p-10 bg-black/10 rounded-xl"
          }
          {...props}
        >
          <div className="mb-4">
            <div className="text-[1em] text-center font-semibold">
              Create an account
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="grid gap-2">
              <div className="text-center text-slate-200 text-[.8em]">
                Enter your email below
              </div>
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="email">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Email"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  className="text-slate-900"
                  disabled={isLoading}
                  onChange={handleChange}
                />
                <Label className="sr-only" htmlFor="confirmEmail">
                  Confirm Email
                </Label>
                <Input
                  id="confirmEmail"
                  placeholder="Confirm Email"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  className="text-slate-900"
                  disabled={isLoading}
                  onChange={handleChange}
                />
                {!matching && (
                  <div className="text-[0.5em]">Emails must match</div>
                )}
                <Label className="sr-only" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="false"
                  autoCorrect="off"
                  className="text-slate-900"
                  disabled={isLoading}
                  onChange={handleChange}
                />
              </div>
              <Button
                disabled={isLoading}
                className="flex gap-2"
                onClick={validate}
              >
                {isLoading && <i className="fa-solid fa-spinner fa-spin"></i>}
                Register
              </Button>
            </div>
          </form>
        </div>
      )}

      {signup === "login" && (
        <div
          className={
            "flex flex-col gap-3 w-[20rem] border border-white p-10 bg-black/10 rounded-xl"
          }
          {...props}
        >
          <div className="mb-4">
            <div className="text-[1em] text-center font-semibold">
              Welcome back!
            </div>
          </div>
          <form onSubmit={onSubmit}>
            <div className="grid gap-2">
              <div className="w-full flex flex-col items-center mb-2 scale-125">
                <Avatar >
                  <AvatarImage />
                  <AvatarFallback className="bg-black">CN</AvatarFallback>
                </Avatar>
                <div className="text-center text-slate-200 text-[.8em]">
                  User
                </div>
              </div>
              <div className="grid gap-1">
                <Label className="sr-only" htmlFor="password">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  autoCapitalize="none"
                  autoComplete="false"
                  autoCorrect="off"
                  className="text-slate-900"
                  disabled={isLoading}
                  onChange={handleChange}
                />
              </div>
              <Button
                disabled={isLoading}
                className="flex gap-2"
                onClick={validate}
              >
                {isLoading && <i className="fa-solid fa-spinner fa-spin"></i>}
                Login
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
