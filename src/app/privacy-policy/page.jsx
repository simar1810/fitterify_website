"use client";

import { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Load content from the HTML file in public folder
    fetch('/privacy-policy-content.html')
      .then(res => res.text())
      .then(html => {
        // Extract content from body if it's a full HTML document, otherwise use as-is
        const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        const contentToUse = bodyMatch ? bodyMatch[1] : html;
        
        // Remove <html>, <head>, and <style> tags if present
        let cleanContent = contentToUse
          .replace(/<html[^>]*>[\s\S]*?<body[^>]*>/i, '')
          .replace(/<\/body>[\s\S]*?<\/html>/i, '')
          .replace(/<head[^>]*>[\s\S]*?<\/head>/i, '')
          .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
        
        setContent(cleanContent);
      })
      .catch(err => {
        console.error('Error loading privacy content:', err);
        setContent('<p>Content is being loaded...</p>');
      });
  }, []);

  return (
    <section className="bg-[#FAFAFA] min-h-screen py-12 px-6 sm:px-10 lg:px-20 xl:px-32">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6 sm:p-10 lg:p-12 border border-gray-100">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#3D3D3D] mb-3 border-b-4 border-[#07363C] inline-block pb-1">
            Privacy Policy
          </h1>
          <p className="text-[#494848] text-sm sm:text-base">
            Last updated: December 15, 2025
          </p>
        </div>

        {/* Content Area - Your pasted content will appear here */}
        <div 
          className="content-area"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      <style jsx>{`
        .content-area {
          font-size: 15px;
          line-height: 1.8;
          color: #1a1a1a !important;
          word-wrap: break-word;
        }
        .content-area span:not(h1 span):not(h2 span):not(h3 span):not(h4 span):not(h5 span):not(h6 span) {
          color: #1a1a1a !important;
        }
        .content-area div {
          color: #1a1a1a !important;
        }
        .content-area h1,
        .content-area h2,
        .content-area h3,
        .content-area h4,
        .content-area h5,
        .content-area h6 {
          color: #3D3D3D !important;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.4;
        }
        .content-area h1 {
          font-size: 2rem;
          border-bottom: 3px solid #07363C;
          padding-bottom: 0.5rem;
          margin-top: 0;
        }
        .content-area h2 {
          font-size: 1.5rem;
          margin-top: 2.5rem;
        }
        .content-area h3 {
          font-size: 1.25rem;
          margin-top: 2rem;
        }
        .content-area h4 {
          font-size: 1.1rem;
          margin-top: 1.5rem;
        }
        .content-area p {
          margin-bottom: 1.25rem;
          line-height: 1.8;
          color: #1a1a1a !important;
        }
        .content-area p[style] {
          color: #1a1a1a !important;
        }
        .content-area p span {
          color: #1a1a1a !important;
        }
        .content-area [style*="color"] {
          color: #1a1a1a !important;
        }
        .content-area [style*="color"]:not(h1):not(h2):not(h3):not(h4):not(h5):not(h6) {
          color: #1a1a1a !important;
        }
        .content-area ul,
        .content-area ol {
          margin: 1rem 0;
          padding-left: 2rem;
        }
        .content-area li {
          margin-bottom: 0.5rem;
          line-height: 1.8;
          color: #1a1a1a !important;
        }
        .content-area strong,
        .content-area b {
          font-weight: 600;
          color: #3D3D3D;
        }
        .content-area em,
        .content-area i {
          font-style: italic;
        }
        .content-area a {
          color: #07363C;
          text-decoration: underline;
        }
        .content-area a:hover {
          color: #055A61;
        }
        .content-area table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 14px;
        }
        .content-area table td,
        .content-area table th {
          padding: 0.75rem;
          border: 1px solid #ddd;
        }
        .content-area table th {
          background-color: #f5f5f5;
          font-weight: 600;
        }
        .content-area blockquote {
          border-left: 4px solid #07363C;
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
        }
      `}</style>
    </section>
  );
};

export default PrivacyPolicy;
