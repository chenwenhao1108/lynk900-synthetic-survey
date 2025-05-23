import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const MarkdownComponents = {
  code({ inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={oneLight}
        language={match[1]}
        PreTag="div"
        className="rounded-md my-2"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className="bg-gray-100 rounded-sm px-1 py-0.5" {...props}>
        {children}
      </code>
    );
  },
  p({ children }) {
    return <p className="mb-2 last:mb-0">{children}</p>;
  },
  ul({ children }) {
    return <ul className="list-disc ml-4 mb-2 space-y-1">{children}</ul>;
  },
  ol({ children }) {
    return <ol className="list-decimal ml-4 mb-2 space-y-1">{children}</ol>;
  },
  li({ children }) {
    return <li className="leading-relaxed">{children}</li>;
  },
  a({ href, children }) {
    return (
      <a
        href={href}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  },
  blockquote({ children }) {
    return (
      <blockquote className="border-l-4 border-gray-200 pl-4 my-2 italic">
        {children}
      </blockquote>
    );
  },
  h1({ children }) {
    return <h1 className="text-2xl font-bold mb-2">{children}</h1>;
  },
  h2({ children }) {
    return <h2 className="text-xl font-bold mb-2">{children}</h2>;
  },
  h3({ children }) {
    return <h3 className="text-lg font-bold mb-2">{children}</h3>;
  },
};

export default MarkdownComponents;
