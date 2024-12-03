import React, { useEffect } from "react";
import { Gutter, Eyebrow, Button } from "payload/components/elements";

import { toast } from "react-toastify";

export default function Dashboard() {
  return (
    <>
      <Eyebrow></Eyebrow>
      <Gutter>
        <h1>Hello, {}</h1>
        <Button
          onClick={() => {
            toast.success("What i said");
          }}
        >
          Do not lick
        </Button>
      </Gutter>
    </>
  );
}
