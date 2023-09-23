"use client";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function LoginForm({}) {
  return (
    <Card className="bg-background-transparent text-white">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription className="text-slate-200">Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Label>Username</Label>
        <Input type="text" className="text-slate-800"></Input>
        <Label>Password</Label>
        <Input type="text"></Input>
      </CardContent>

    </Card>
  );
}
