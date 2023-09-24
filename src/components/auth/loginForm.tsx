"use client";
import Link from "next/link";
import * as React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FormDescription } from "../ui/form";
import { ethers } from 'ethers';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQn3kG3HBs2h-ONa7iztXaPTQ0C7Wz6UU",
  authDomain: "xchange-girlhax2023.firebaseapp.com",
  databaseURL: "https://xchange-girlhax2023-default-rtdb.firebaseio.com",
  projectId: "xchange-girlhax2023",
  storageBucket: "xchange-girlhax2023.appspot.com",
  messagingSenderId: "910547733569",
  appId: "1:910547733569:web:7b72deb4d5304380584ac0",
  measurementId: "G-7WN7KFJG4E"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

class User {
  user_address: string;
  user_name: string;
  user_email: string;
  user_pfp: string;
  user_bio: string;
  constructor(user_address: string, user_name: string, user_email: string, user_pfp: string, user_bio: string) {
    this.user_address = user_address;
    this.user_name = user_name;
    this.user_email = user_email;
    this.user_pfp = user_pfp;
    this.user_bio = user_bio;
  }
  toString() {
    return this.user_address;
  }
}

// Add a new user to the users db
async function addUser(user_address: string, user_name: string, user_email: string) {
  try {
    const docRef = await setDoc(doc(db, "users", user_address), new User(user_address, user_name, user_email, "https://firebasestorage.googleapis.com/v0/b/xchange-girlhax2023.appspot.com/o/static%2Fdefault_user_pfp.png?alt=media&token=d6a168c0-5bb3-4468-b368-f7ff5a05b551", ""))
    console.log("User created.");
  } catch (e) {
    console.error("Error adding user: ", e);
  }
}

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

function SignIn() {
  const [walletAddress, setWalletAddress] = useState("");
  async function requestAccount() {
    console.log('Requesting account...');

    // ❌ Check if Meta Mask Extension exists
    if ((window as any).ethereum) {
      console.log('detected');

      try {
        const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts", });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }
    } else {
      alert('Meta Mask not detected');
    }
  }

  function makeUppercase(address: string | any[], accounts: string[]) {
    let result = '';

    for (let i = 0; i < address.length; i++) {
      if (address[i].toUpperCase() === address[i]) {
        // console.log(address[i])
        result += accounts[i].toUpperCase();
      } else {
        result += accounts[i];
      }
    }

    return result;
  }


  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if (typeof (window as any).ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    }
  };
  const signData = async () => {
    const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts", });
    const provider = new ethers.providers.Web3Provider((window as any).ethereum);
    const signer = provider.getSigner()
    let message = "test message"
    let signature = await signer.signMessage(message)
    let address = ethers.utils.verifyMessage(message, signature)
    console.log(address)
    console.log(accounts[0])
    let s = makeUppercase(address, accounts[0])
    console.log(s)
    if (address === s) {
      console.log("SUCCESS!");
      window.location.href = "/feed";
    }
  }
  return (
    <div className="flex flex-col items-center gap-2">
      <h3>Web3 Authentication</h3>
      <Button onClick={requestAccount}>Connect Metamask</Button>
      <Button onClick={signData}>Sign in</Button>
    </div>
  );
}


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

  const validate = () => { };
  return (
    <>
      {!signup && (
        <div
          className={
            "flex flex-col gap-3 w-[20rem] border border-white p-10 bg-black/10 rounded-xl"
          }
          {...props}
        >
          <SignIn />
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
            <div className="flex justify-between absolute inset-0  items-center">
              <span className="w-1/4 border-t" />
              <span className="w-1/4 border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="text-white px-2 text-muted-foreground text-[.8em]">
                Or 
              </span>
            </div>
          </div>
          <Link
            href="/feed"
            className="text-black bg-white hover:bg-gray-100 flex gap-2 py-2  justify-center items-center"
          >
            {isLoading ? (
              <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
              <i className="fa-solid fa-arrow-right"> </i>
            )}{" "}
            Proceed to Demo
          </Link>
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
