import React, {PropsWithChildren, useState} from 'react';
// @ts-ignore
import Button from 'react-particle-effect-button';
import {downloadFile} from '@/utils';

type ExportButtonProps = PropsWithChildren<{
  url: string;
  params?: any;
}>

export default function ExportButton(props: ExportButtonProps) {
  const {url, params, children} = props;
  const [visible, setVisible] = useState(true);
  const clickEventHandler = () => {
    setVisible(false);
    downloadFile(url, params);
  };
  const onComplete = () => {
    setVisible(true);
  };
  const buttonOptions = {
    color: '#ff4d73',
    type: 'triangle',
    easing: 'easeOutSine',
    size: 3,
    duration: 1000,
    particlesAmountCoefficient: 7,
    speed: 3,
    oscillationCoefficient: 1,
    direction: 'top',
  };
  return (
    <Button
      {...buttonOptions}
      hidden={!visible}
      onComplete={onComplete}
    >
      <button
        className="export-button"
        onClick={() => clickEventHandler()}
      >{children}
      </button>
    </Button>
  );
}
