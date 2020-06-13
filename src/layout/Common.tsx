import React from 'react';

export default function CommonLayout(props: any) {
  const {children} = props;
  return <div className="common-layout">{children}</div>;
}
