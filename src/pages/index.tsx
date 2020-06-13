import React from 'react';
import ExportButton from '@/components/ExportButton';
import '@/assets/style/export_button.styl';
import './home.styl';

export default function HomePage(props: any) {
  return (
    <div className="home">
      <ExportButton url="/api/export">
        导出
      </ExportButton>
    </div>
  );
}
