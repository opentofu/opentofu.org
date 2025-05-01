import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import OpenTofuLogo from "./OpenTofuLogo";
import CopyIcon from "./CopyIcon";
import CheckIcon from "./CheckIcon";
import DefaultFileIcon from "./DefaultFileIcon";
import { useTheme } from "../../utils/useTheme";

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
  const isDarkTheme = useTheme();

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
          {({ tokens, getLineProps, getTokenProps }) => (
            <pre className="px-2 sm:px-4 py-3 text-sm m-0 max-w-full overflow-x-hidden w-full rounded-none box-border">
              <code className="text-xs sm:text-sm block whitespace-pre-wrap">
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
