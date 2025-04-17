import React from "react";
import Button from "../Button";

export default function HowToContribute() {
  return (
    <section className="relative py-20 md:py-28 px-4">
      <div className="w-full max-w-4xl mx-auto leading-snug">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl mb-6 font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Join Our Community
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed">
              OpenTofu thrives on community contributions. Whether you're fixing
              bugs, adding features, improving docs, or providing feedback, your
              input makes a difference.
            </p>
            <div className="flex flex-wrap gap-4">
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
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 text-sm">
                    1
                  </span>
                  <p className="text-gray-600 dark:text-gray-400">
                    Join GitHub discussions to share ideas
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 text-sm">
                    2
                  </span>
                  <p className="text-gray-600 dark:text-gray-400">
                    Open issues for bugs or feature suggestions
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 text-sm">
                    3
                  </span>
                  <p className="text-gray-600 dark:text-gray-400">
                    Participate in RFC discussions and reviews
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-2 rounded-full bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300 text-sm">
                    4
                  </span>
                  <p className="text-gray-600 dark:text-gray-400">
                    Contribute code after community discussion
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
