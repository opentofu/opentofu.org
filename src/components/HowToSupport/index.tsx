import Link from "@docusaurus/Link";
import React from "react";

type StepProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
};

function Step({ icon, children }: StepProps) {
  return (
    <div className="bg-white dark:bg-dark2 p-6">
      {icon}
      <p className="text-xl mt-4 mb-2 pl-2">{children}</p>
    </div>
  );
}

export default function HowToSupport() {
  return (
    <section className="flex flex-col justify-center w-full py-5 md:py-10 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <h3 className="text-center text-3xl md:text-5xl mb-3 md:mb-6 font-bold">
          How to support OpenTofu in pledging?
        </h3>
        <p className="text-gray-600 dark:text-gray-500 text-center text-base md:text-xl mb-6 md:mb-12">
          Pledging to the OpenTofu manifesto can be done by:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Step
            icon={
              <svg
                className="w-12"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#F0CD14">
                  <path d="M36 8.152H14.667c-2.206 0-4 1.795-4 4v23.334a4.672 4.672 0 0 0 4.666 4.666H36c.737 0 1.333-.597 1.333-1.333V9.485c0-.736-.596-1.333-1.333-1.333ZM17.333 14.82h13.334v9.333H17.333V14.82Zm17.334 22.666H15.333c-1.102 0-2-.897-2-2 0-1.102.898-2 2-2h19.334v4Z" />
                  <path d="M35.334 8.153h2v31.995h-2z" />
                </g>
                <path fill="#FFE974" d="M15.038 14.069h18.064v10.389H15.038z" />
              </svg>
            }
          >
            1. Going to the{" "}
            <Link
              href="https://github.com/opentffoundation/manifesto"
              className="underline"
            >
              manifesto repository
            </Link>
            .
          </Step>

          <Step
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 48 48"
                className="w-12"
              >
                <g stroke-miterlimit="10" stroke-width="3.2">
                  <path
                    stroke="#FFE974"
                    d="m16 24.258 7.04-8.448a3.201 3.201 0 0 1 2.46-1.152H40"
                  />
                  <path
                    stroke="#F0CD14"
                    d="m16 24.658 7.04 8.448a3.201 3.201 0 0 0 2.46 1.152H40"
                  />
                  <path
                    stroke="#FFE974"
                    stroke-linecap="round"
                    d="M8 24.258h8l2.5-3"
                  />
                  <path
                    stroke="#FFE974"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m33.6 8.258 6.4 6.4-6.4 6.4"
                  />
                  <path
                    stroke="#F0CD14"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m33.6 27.459 6.4 6.4-6.4 6.4"
                  />
                </g>
              </svg>
            }
          >
            2. Forking the repository.
          </Step>

          <Step
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 48 48"
                className="w-12"
              >
                <path
                  fill="#F0CD14"
                  d="M27.845 28.087c-.04-1.77-.161-3.66-.483-5.47-.16-.764-.241-1.408-.241-2.091v-9.292c0-.402-.161-.764-.443-1.086a1.515 1.515 0 0 0-1.207-.443c-.804.08-1.407.765-1.407 1.65v7.32a.705.705 0 0 1-.684.684.705.705 0 0 1-.684-.684V8.5c0-.765-.523-1.448-1.287-1.569a1.5 1.5 0 0 0-1.77 1.488v8.769a.678.678 0 0 1-.684.684.705.705 0 0 1-.683-.684V6.85c0-.765-.523-1.448-1.288-1.57a1.5 1.5 0 0 0-1.77 1.49v9.934a.678.678 0 0 1-.683.684.705.705 0 0 1-.684-.684V8.5c0-.765-.523-1.448-1.287-1.569a1.5 1.5 0 0 0-1.77 1.488V19.48s.282-.04.563-.04l5.109.12c1.488.04 2.855 1.126 2.976 2.615.08.884-.241 1.73-.885 2.333-.442.442-1.005.724-1.609.764l-.603.08.442.443c1.69 1.73 2.092 3.982 1.971 5.39a.663.663 0 0 1-.684.603h-.12c-.362-.04-.644-.402-.604-.764 0-.161.322-3.862-3.459-5.632l-.402-.2-.241 1.568a.627.627 0 0 1-.765.563.627.627 0 0 1-.563-.764l.362-2.293a.67.67 0 0 1 .724-.563l3.58.161c.443 0 .805-.16 1.086-.442.322-.322.483-.765.443-1.247-.08-.765-.765-1.328-1.529-1.328l-5.189-.12a2.814 2.814 0 0 0-2.775 2.413l-.563 4.344c-.241 1.81.322 3.66 1.528 5.068l3.982 4.545c.161.202.282.443.282.724v3.218c0 .684.563 1.247 1.247 1.247h7.522c.683 0 1.247-.563 1.247-1.247v-2.896c-.071-1.576 2.716-10.056 3.982-10.056Z"
                />
                <path
                  fill="#FFE974"
                  d="M37.582 28.309c-1.983-1.37-4.72-.897-6.42.802l-.991.992-1.133-1.133c-2.172-2.172-5.901-1.936-7.695.802-1.37 1.983-.897 4.72.802 6.42l7.081 7.081c.52.52 1.37.52 1.889 0l7.27-7.27c2.124-2.171 1.888-5.9-.803-7.694Z"
                />
              </svg>
            }
          >
            3. Adding your pledge in the index.html file.
          </Step>
          <Step
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 48 48"
                className="w-12"
              >
                <path
                  fill="#F0CD14"
                  d="M26.667 10.82a13.28 13.28 0 0 0-13.14 11.067A8 8 0 0 0 16 37.487h10.667a13.333 13.333 0 0 0 0-26.667Z"
                />
                <path
                  fill="#FFE974"
                  d="M28 44.485h-8v-12h-5.333L24 23.152l9.333 9.333H28v12Z"
                />
              </svg>
            }
          >
            4. Pushing the changes to your forked repo, and create a PR.
          </Step>
          <Step
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 48 48"
                className="w-12"
              >
                <path
                  fill="#F0CD14"
                  d="M33.786 25.04c1.08-.899 2.67-2.41 2.67-2.41l2.057-2a1.11 1.11 0 0 0-.614-1.891l-9.27-1.355-4.149-8.401a1.108 1.108 0 0 0-1.99 0l-4.146 8.4-9.272 1.348a1.107 1.107 0 0 0-.615 1.892l6.71 6.533-1.579 9.242a1.111 1.111 0 0 0 1.6 1.166c7.437-3.91 12.426-7.383 18.598-12.524Z"
                />
                <path
                  fill="#fff"
                  d="m28.437 26.529 4.186-.22-.805 5.896-5.675 4.568-1.691-5.434 3.985-4.81Z"
                />
                <path
                  fill="#FFE974"
                  d="M30.849 24.258a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8Zm5.333 8.667a.667.667 0 0 1-.667.667h-3.333v3.333a.667.667 0 0 1-.667.667h-1.333a.667.667 0 0 1-.667-.667v-3.333h-3.333a.667.667 0 0 1-.667-.667v-1.333c0-.368.299-.667.667-.667h3.333v-3.333c0-.368.299-.667.667-.667h1.333c.368 0 .667.299.667.667v3.333h3.333c.368 0 .667.299.667.667v1.333Z"
                />
              </svg>
            }
          >
            5. Starring the repository.
          </Step>

          <Step
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
              >
                <path
                  fill="#F0CD14"
                  d="M19.733 8.32a3.2 3.2 0 1 0 0 6.4h3.2v-3.2a3.2 3.2 0 0 0-3.2-3.2ZM19.733 16.855H11.2a3.2 3.2 0 1 0 0 6.4h8.533a3.2 3.2 0 0 0 0-6.4Z"
                />
                <path
                  fill="#FFE974"
                  d="M39.997 20.054a3.2 3.2 0 1 0-6.4 0v3.2h3.2a3.2 3.2 0 0 0 3.2-3.2ZM31.467 20.053V11.52a3.2 3.2 0 0 0-6.4 0v8.533a3.2 3.2 0 0 0 6.4 0Z"
                />
                <path
                  fill="#F0CD14"
                  d="M28.267 40.319a3.2 3.2 0 1 0 0-6.4h-3.2v3.2a3.2 3.2 0 0 0 3.2 3.2ZM28.267 31.787H36.8a3.2 3.2 0 0 0 0-6.4h-8.533a3.2 3.2 0 1 0 0 6.4Z"
                />
                <path
                  fill="#FFE974"
                  d="M8 28.587a3.2 3.2 0 1 0 6.4 0v-3.2h-3.2a3.2 3.2 0 0 0-3.2 3.2ZM16.533 28.587v8.533a3.2 3.2 0 0 0 6.4 0v-8.533a3.2 3.2 0 0 0-6.4 0Z"
                />
              </svg>
            }
          >
            6. Joining our Slack community & Follow us on Twitter.
          </Step>
        </div>
      </div>
    </section>
  );
}
