import * as React from "react";
import { Html, Button, Text } from "@react-email/components";
import Head from "next/head";

export function Email({
  fullname,
  message,
}: {
  fullname: string;
  message: string;
}) {
  return (
    <Html lang="en">
      <Head>
        <title>Verification Code</title>
      </Head>
      <Text className="">Hi, I am {fullname}</Text>
      <Text className="">{message}</Text>
    </Html>
  );
}

export default Email;
