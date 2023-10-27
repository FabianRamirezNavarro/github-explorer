import Moment from "moment";
import React, { PropsWithChildren, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { LinkBoxProps } from "./types";


export function LinkBox({
  as: As = Link,
  title,
  children,
  description,
  updated_at,
  forks_count,
  ...rest
}: PropsWithChildren<LinkBoxProps>) {


  return (
    <As {...rest}>
      {children}
      <div>
        <div>
          <strong>{title}</strong>
        </div>
        <div>
        </div>
        <div>
          {<p>{forks_count}</p>}
          {<p>{updated_at}</p>}
        </div>
      </div>

    </As >
  );
}
