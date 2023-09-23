"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div
      className={"flex flex-col gap-3 w-[20rem] border border-white p-10 bg-black/10"}
      {...props}
    >
      <div className="mb-4">
        <div className="text-[1em] text-center font-semibold">
          Login or create an account
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className="grid gap-2">
          <div className="text-center text-slate-200 text-[.8em]">Enter your email below</div>
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
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && <div>Loading</div>}
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
      <Button type="button" disabled={isLoading} className="text-black bg-white hover:bg-gray-100">
        {isLoading ? <div>Loading</div> : <div>Loading</div>} Github
      </Button>
    </div>
  );
}
