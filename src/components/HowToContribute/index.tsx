import React from "react";
import Button from "../Button";

export default function HowToContribute() {
  return (
    <section className="relative py-20 md:py-28 px-4">
      <div className="w-full max-w-4xl mx-auto leading-snug">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl mb-6 font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Join Our Community
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              OpenTofu thrives on community contributions. Whether you're fixing
              bugs, adding features, improving docs, or providing feedback, your
              input makes a difference.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                variant="primary"
                href="https://opentofu.org/slack"
                className="px-6 py-3"
              >
                Join Slack
              </Button>
              <Button
                variant="secondary"
                href="https://github.com/opentofu/opentofu/blob/main/CONTRIBUTING.md"
                className="px-6 py-3"
              >
                Contribute
              </Button>
            </div>
          </div>

          {/* Card */}
          <div className="md:w-1/2">
            <div className="bg-white dark:bg-blue-900/40 p-6 rounded-xl shadow-md border border-gray-100 dark:border-blue-800/50">
              <h3 className="font-semibold text-xl mb-4">Get Involved</h3>
              <ul className="space-y-3">
                {[
                  "Join GitHub discussions to share ideas",
                  "Open issues for bugs or feature suggestions",
                  "Participate in RFC discussions and reviews",
                  "Contribute code after community discussion",
                ].map((text, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 text-sm">
                      {index + 1}
                    </span>
                    <p className="text-gray-600 dark:text-gray-400">{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
