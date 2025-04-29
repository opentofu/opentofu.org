import React, { useState, useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";
import OpenTofuLogo from "./OpenTofuLogo";
import CopyIcon from "./CopyIcon";
import CheckIcon from "./CheckIcon";
import DefaultFileIcon from "./DefaultFileIcon";

interface IDEHeaderProps {
  filename?: string;
}

const tfFileExtensions = [".tf", ".tfvars", ".tofu"];

function IDEHeader({ filename = "main.tf" }: IDEHeaderProps) {
  const isTofuFile = tfFileExtensions.some((ext) => filename.endsWith(ext));

  return (
    <div className="flex items-center px-4 py-2 bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white transition-colors">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4">
          {isTofuFile ? <OpenTofuLogo /> : <DefaultFileIcon />}
        </div>
        <span className="text-sm font-mono">{filename}</span>
      </div>
    </div>
  );
}

interface IDEProps {
  code: string;
  language?: string;
  filename?: string;
}

export function IDE({ code, language = "hcl", filename }: IDEProps) {
  const [copied, setCopied] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Use effect to safely check if the theme is dark after hydration
  useEffect(() => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    setIsDarkTheme(isDark);

    // Optional: add listener for theme changes
    const observer = new MutationObserver(() => {
      const newIsDark =
        document.documentElement.getAttribute("data-theme") === "dark";
      setIsDarkTheme(newIsDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-lg overflow-hidden shadow-xl box-border">
      <IDEHeader filename={filename} />
      <div className="relative overflow-x-auto box-border">
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 z-10 p-1.5 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
          title={copied ? "Copied!" : "Copy to clipboard"}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
        </button>
        <Highlight
          theme={isDarkTheme ? themes.oneDark : themes.oneLight}
          code={code}
          language={language}
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className="px-2 sm:px-4 py-3 text-sm"
              style={{
                ...style,
                margin: 0,
                maxWidth: "100%",
                overflowX: "hidden",
                borderRadius: "0",
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              <code
                style={{
                  display: "block",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  fontSize: "0.8rem",
                }}
                className="text-xs sm:text-sm"
              >
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  );
}
