import React from 'react'
import DocumentMeta from 'react-document-meta';
export default function NotFound() {
  //meta description
  const meta = {
    title: '404 Not Found | Medeskin AI',
   
  };
  
  return (
    <DocumentMeta {...meta}>
    <div>NotFound</div>
    </DocumentMeta>
  )
}
