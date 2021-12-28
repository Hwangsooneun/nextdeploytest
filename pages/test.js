//ssr이 적용된 페이지
import React, { useState } from "react";
import Link from "next/link";

const User = () => {

  return (
    <>
      <p>테스트</p>
      <Link href="/">
        <a>로그인 페이지(SSR 적용 x)로 이동</a>
      </Link>
    </>
  );
};

export default User;
