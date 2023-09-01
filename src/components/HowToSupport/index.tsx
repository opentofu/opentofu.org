import React from "react";

function Step({ icon = null, title }) {
  return (
    <div className="bg-white p-6">
      {icon}
      <h4 className="text-xl mt-4 mb-2 pl-2">{title}</h4>
    </div>
  );
}

export default function HowToSupport() {
  return (
    <section className="text-[#0C192B] flex flex-col justify-center w-full bg-light2 py-5 md:py-10 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <h3 className="text-center text-3xl md:text-5xl font-bold mb-3 md:mb-6">
          How to support OpenTF in pledging?
        </h3>
        <h6 className="text-[#5F6671] text-center text-base md:text-xl font-medium  mb-6 md:mb-12">
          Pledging to the OpenTF manifesto can be done by:
        </h6>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Step
            icon={
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_193_3079"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="48"
                  height="49"
                >
                  <rect y="0.152832" width="48" height="48" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_193_3079)">
                  <path
                    d="M36.0001 8.15216H14.6667C12.4614 8.15216 10.6667 9.94683 10.6667 12.1522V35.4855C10.6667 38.0588 12.7601 40.1522 15.3334 40.1522H36.0001C36.7374 40.1522 37.3334 39.5548 37.3334 38.8188V9.48549C37.3334 8.74949 36.7374 8.15216 36.0001 8.15216ZM17.3334 14.8188H30.6667V24.1522H17.3334V14.8188ZM34.6667 37.4855H15.3334C14.2307 37.4855 13.3334 36.5882 13.3334 35.4855C13.3334 34.3828 14.2307 33.4855 15.3334 33.4855H34.6667V37.4855Z"
                    fill="#7732D0"
                  />
                  <rect
                    x="35.3335"
                    y="8.15283"
                    width="2"
                    height="31.9951"
                    fill="#7732D0"
                  />
                </g>
                <rect
                  x="15.0376"
                  y="14.0693"
                  width="18.0642"
                  height="10.3892"
                  fill="#D4B2FF"
                />
              </svg>
            }
            title="1. Going to the manifesto repository."
          />
          <Step
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
              >
                <mask
                  id="mask0_193_3089"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="48"
                  height="49"
                >
                  <rect y="0.152832" width="48" height="48" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_193_3089)">
                  <path
                    d="M16 24.2582L23.04 15.8102C23.3404 15.4496 23.7164 15.1595 24.1413 14.9604C24.5663 14.7613 25.0299 14.6581 25.4992 14.6582H40"
                    stroke="#D4B2FF"
                    strokeWidth="3.2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M16 24.6583L23.04 33.1063C23.3404 33.4669 23.7164 33.757 24.1413 33.9561C24.5663 34.1552 25.0299 34.2584 25.4992 34.2583H40"
                    stroke="#7732D0"
                    strokeWidth="3.2"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M8 24.2583H16L18.5 21.2583"
                    stroke="#D4B2FF"
                    strokeWidth="3.2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6 8.2583L40 14.6583L33.6 21.0583"
                    stroke="#D4B2FF"
                    strokeWidth="3.2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M33.6 27.4585L40 33.8585L33.6 40.2585"
                    stroke="#7732D0"
                    strokeWidth="3.2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            }
            title="2. Forking the repository."
          />
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
                  d="M27.8447 28.0875C27.8045 26.3176 27.6838 24.4271 27.362 22.6171C27.2011 21.8529 27.1207 21.2093 27.1207 20.5255V11.2339C27.1207 10.8317 26.9598 10.4697 26.6782 10.1479C26.3565 9.82608 25.914 9.66519 25.4715 9.70541C24.6671 9.78586 24.0637 10.4697 24.0637 11.3546V18.6752C24.0637 19.0372 23.7419 19.359 23.3799 19.359C23.0179 19.359 22.6961 19.0372 22.6961 18.6752V8.49871C22.6961 7.73447 22.1732 7.05067 21.409 6.93C20.4436 6.76911 19.6392 7.49313 19.6392 8.41826V17.1869C19.6392 17.5892 19.3174 17.8707 18.9554 17.8707C18.5934 17.8707 18.2716 17.549 18.2716 17.1869V6.84955C18.2716 6.08531 17.7487 5.40151 16.9844 5.28084C16.0191 5.11995 15.2146 5.84397 15.2146 6.76911V16.7043C15.2146 17.1065 14.8928 17.3881 14.5308 17.3881C14.1688 17.3881 13.847 17.0663 13.847 16.7043V8.49871C13.847 7.73447 13.3241 7.05067 12.5599 6.93C11.5945 6.76911 10.79 7.49313 10.79 8.41826V19.4797C10.79 19.4797 11.0716 19.4395 11.3532 19.4395L16.4615 19.5601C17.9498 19.6003 19.3174 20.6864 19.438 22.1746C19.5185 23.0595 19.1967 23.9042 18.5531 24.5076C18.1107 24.95 17.5476 25.2316 16.9442 25.2718L16.3409 25.3523L16.7833 25.7947C18.4727 27.5243 18.8749 29.7768 18.7543 31.1847C18.714 31.5467 18.4325 31.788 18.0705 31.788H17.9498C17.5878 31.7478 17.3062 31.3858 17.3464 31.0238C17.3464 30.8629 17.6682 27.1623 13.8872 25.3925L13.485 25.1914L13.2437 26.7601C13.2034 27.1623 12.8414 27.4037 12.4794 27.3232C12.0772 27.283 11.8358 26.921 11.9163 26.559L12.2783 24.2662C12.3185 23.9445 12.6403 23.6629 13.0023 23.7031L16.5822 23.864C17.0247 23.864 17.3867 23.7031 17.6682 23.4216C17.99 23.0998 18.1509 22.6573 18.1107 22.1746C18.0302 21.4104 17.3464 20.8473 16.5822 20.8473L11.3934 20.7266C9.98558 20.7266 8.8191 21.7724 8.61798 23.14L8.05486 27.4841C7.81352 29.2942 8.37664 31.1444 9.58334 32.5523L13.5654 37.0975C13.7263 37.2986 13.847 37.5399 13.847 37.8215V41.0394C13.847 41.7232 14.4101 42.2863 15.0939 42.2863H22.6157C23.2995 42.2863 23.8626 41.7232 23.8626 41.0394V38.1433C23.7919 36.5671 26.5795 28.0875 27.8447 28.0875Z"
                  fill="#7732D0"
                />
                <path
                  d="M37.5821 28.3087C35.5994 26.9397 32.8614 27.4117 31.1619 29.1112L30.1705 30.1026L29.0375 28.9696C26.866 26.798 23.1366 27.0341 21.3427 29.7721C19.9737 31.7548 20.4458 34.4929 22.1452 36.1924L29.2264 43.2735C29.7457 43.7928 30.5954 43.7928 31.1147 43.2735L38.3846 36.0035C40.509 33.832 40.2729 30.1026 37.5821 28.3087Z"
                  fill="#D4B2FF"
                />
              </svg>
            }
            title="3. Add your pledge in the index.html file."
          />
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
                  d="M26.6668 10.8199C23.5206 10.8091 20.4727 11.9156 18.0663 13.9423C15.6599 15.9691 14.0511 18.7844 13.5268 21.8866C11.7214 22.4799 10.1862 23.6966 9.19616 25.3187C8.20608 26.9408 7.82578 28.8624 8.12337 30.7393C8.42095 32.6163 9.37698 34.326 10.8202 35.5623C12.2635 36.7986 14.0997 37.4807 16.0001 37.4866H26.6668C30.203 37.4866 33.5944 36.0818 36.0949 33.5813C38.5954 31.0808 40.0001 27.6895 40.0001 24.1532C40.0001 20.617 38.5954 17.2256 36.0949 14.7251C33.5944 12.2247 30.203 10.8199 26.6668 10.8199Z"
                  fill="#7732D0"
                />
                <path
                  d="M28.0001 44.4852H20.0001V32.4852H14.6667L24.0001 23.1519L33.3334 32.4852H28.0001V44.4852Z"
                  fill="#D4B2FF"
                />
              </svg>
            }
            title="4. Push the changes to your forked repo, and create a PR."
          />
          <Step
            icon={
              <svg
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_193_3118)">
                  <path
                    d="M33.7864 25.0399C34.8654 24.1411 36.4561 22.6309 36.4561 22.6309L38.5134 20.6309C38.9521 20.2029 38.9614 19.5002 38.5334 19.0616C38.3628 18.8869 38.1401 18.7736 37.8988 18.7389L28.6281 17.3842L24.4801 8.98289C24.2108 8.43356 23.5468 8.20689 22.9974 8.47622C22.7774 8.58422 22.5988 8.76289 22.4908 8.98289L18.3441 17.3829L9.07211 18.7309C8.46545 18.8189 8.04545 19.3816 8.13478 19.9882C8.16945 20.2296 8.28411 20.4522 8.45745 20.6229L15.1668 27.1562L13.5881 36.3976C13.4908 37.0029 13.9028 37.5736 14.5081 37.6709C14.7401 37.7082 14.9788 37.6709 15.1881 37.5642C22.6249 33.6539 27.614 30.181 33.7864 25.0399Z"
                    fill="#7732D0"
                  />
                  <path
                    d="M28.4369 26.5288L32.623 26.3081L31.818 32.2045L26.1426 36.7731L24.452 31.3391L28.4369 26.5288Z"
                    fill="white"
                  />
                  <path
                    d="M30.8485 24.2583C26.4298 24.2583 22.8485 27.8396 22.8485 32.2583C22.8485 36.677 26.4298 40.2583 30.8485 40.2583C35.2672 40.2583 38.8485 36.677 38.8485 32.2583C38.8485 27.8396 35.2672 24.2583 30.8485 24.2583ZM36.1818 32.925C36.1818 33.293 35.8832 33.5916 35.5152 33.5916H32.1818V36.925C32.1818 37.293 31.8832 37.5916 31.5152 37.5916H30.1818C29.8138 37.5916 29.5152 37.293 29.5152 36.925V33.5916H26.1818C25.8138 33.5916 25.5152 33.293 25.5152 32.925V31.5916C25.5152 31.2236 25.8138 30.925 26.1818 30.925H29.5152V27.5916C29.5152 27.2236 29.8138 26.925 30.1818 26.925H31.5152C31.8832 26.925 32.1818 27.2236 32.1818 27.5916V30.925H35.5152C35.8832 30.925 36.1818 31.2236 36.1818 31.5916V32.925Z"
                    fill="#D4B2FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_193_3118">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(8 8.2583)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            title="5. Star the repository."
          />
          <Step
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="49"
                viewBox="0 0 48 49"
                fill="none"
              >
                <mask
                  id="mask0_193_3128"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="48"
                  height="49"
                >
                  <rect y="0.152832" width="48" height="48" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_193_3128)">
                  <path
                    d="M17.6669 4.15295C16.606 4.15295 15.5886 4.57437 14.8385 5.32449C14.0884 6.07461 13.667 7.09199 13.667 8.15282C13.667 9.21366 14.0884 10.231 14.8385 10.9812C15.5886 11.7313 16.606 12.1527 17.6669 12.1527H21.6667V8.15282C21.6667 7.09199 21.2453 6.07461 20.4952 5.32449C19.7451 4.57437 18.7277 4.15295 17.6669 4.15295Z"
                    fill="#FBF8FF"
                  />
                  <path
                    d="M17.6669 4.15295C16.606 4.15295 15.5886 4.57437 14.8385 5.32449C14.0884 6.07461 13.667 7.09199 13.667 8.15282C13.667 9.21366 14.0884 10.231 14.8385 10.9812C15.5886 11.7313 16.606 12.1527 17.6669 12.1527H21.6667V8.15282C21.6667 7.09199 21.2453 6.07461 20.4952 5.32449C19.7451 4.57437 18.7277 4.15295 17.6669 4.15295Z"
                    fill="#7732D0"
                  />
                  <path
                    d="M17.6662 14.8205H6.99987C5.93904 14.8205 4.92166 15.2419 4.17153 15.992C3.42141 16.7422 3 17.7595 3 18.8204C3 19.8812 3.42141 20.8986 4.17153 21.6487C4.92166 22.3988 5.93904 22.8202 6.99987 22.8202H17.6662C18.727 22.8202 19.7444 22.3988 20.4945 21.6487C21.2446 20.8986 21.6661 19.8812 21.6661 18.8204C21.6661 17.7595 21.2446 16.7422 20.4945 15.992C19.7444 15.2419 18.727 14.8205 17.6662 14.8205Z"
                    fill="#FBF8FF"
                  />
                  <path
                    d="M17.6662 14.8205H6.99987C5.93904 14.8205 4.92166 15.2419 4.17153 15.992C3.42141 16.7422 3 17.7595 3 18.8204C3 19.8812 3.42141 20.8986 4.17153 21.6487C4.92166 22.3988 5.93904 22.8202 6.99987 22.8202H17.6662C18.727 22.8202 19.7444 22.3988 20.4945 21.6487C21.2446 20.8986 21.6661 19.8812 21.6661 18.8204C21.6661 17.7595 21.2446 16.7422 20.4945 15.992C19.7444 15.2419 18.727 14.8205 17.6662 14.8205Z"
                    fill="#7732D0"
                  />
                  <path
                    d="M42.9974 18.8204C42.9974 17.7595 42.576 16.7422 41.8259 15.992C41.0758 15.2419 40.0584 14.8205 38.9975 14.8205C37.9367 14.8205 36.9193 15.2419 36.1692 15.992C35.4191 16.7422 34.9977 17.7595 34.9977 18.8204V22.8202H38.9975C40.0584 22.8202 41.0758 22.3988 41.8259 21.6487C42.576 20.8986 42.9974 19.8812 42.9974 18.8204Z"
                    fill="#FBF8FF"
                  />
                  <path
                    d="M42.9974 18.8204C42.9974 17.7595 42.576 16.7422 41.8259 15.992C41.0758 15.2419 40.0584 14.8205 38.9975 14.8205C37.9367 14.8205 36.9193 15.2419 36.1692 15.992C35.4191 16.7422 34.9977 17.7595 34.9977 18.8204V22.8202H38.9975C40.0584 22.8202 41.0758 22.3988 41.8259 21.6487C42.576 20.8986 42.9974 19.8812 42.9974 18.8204Z"
                    fill="#D4B2FF"
                  />
                  <path
                    d="M32.3337 18.8191V8.15282C32.3337 7.09199 31.9123 6.07461 31.1622 5.32449C30.4121 4.57437 29.3947 4.15295 28.3339 4.15295C27.273 4.15295 26.2556 4.57437 25.5055 5.32449C24.7554 6.07461 24.334 7.09199 24.334 8.15282V18.8191C24.334 19.88 24.7554 20.8974 25.5055 21.6475C26.2556 22.3976 27.273 22.819 28.3339 22.819C29.3947 22.819 30.4121 22.3976 31.1622 21.6475C31.9123 20.8974 32.3337 19.88 32.3337 18.8191Z"
                    fill="#FBF8FF"
                  />
                  <path
                    d="M32.3337 18.8191V8.15282C32.3337 7.09199 31.9123 6.07461 31.1622 5.32449C30.4121 4.57437 29.3947 4.15295 28.3339 4.15295C27.273 4.15295 26.2556 4.57437 25.5055 5.32449C24.7554 6.07461 24.334 7.09199 24.334 8.15282V18.8191C24.334 19.88 24.7554 20.8974 25.5055 21.6475C26.2556 22.3976 27.273 22.819 28.3339 22.819C29.3947 22.819 30.4121 22.3976 31.1622 21.6475C31.9123 20.8974 32.3337 19.88 32.3337 18.8191Z"
                    fill="#D4B2FF"
                  />
                  <path
                    d="M28.3339 44.1518C29.3947 44.1518 30.4121 43.7304 31.1622 42.9802C31.9123 42.2301 32.3337 41.2127 32.3337 40.1519C32.3337 39.0911 31.9123 38.0737 31.1622 37.3236C30.4121 36.5735 29.3947 36.152 28.3339 36.152H24.334V40.1519C24.334 41.2127 24.7554 42.2301 25.5055 42.9802C26.2556 43.7304 27.273 44.1518 28.3339 44.1518Z"
                    fill="#FBF8FF"
                  />
                  <path
                    d="M28.3339 44.1518C29.3947 44.1518 30.4121 43.7304 31.1622 42.9802C31.9123 42.2301 32.3337 41.2127 32.3337 40.1519C32.3337 39.0911 31.9123 38.0737 31.1622 37.3236C30.4121 36.5735 29.3947 36.152 28.3339 36.152H24.334V40.1519C24.334 41.2127 24.7554 42.2301 25.5055 42.9802C26.2556 43.7304 27.273 44.1518 28.3339 44.1518Z"
                    fill="#7732D0"
                  />
                  <path
                    d="M28.3339 33.4855H39.0002C40.061 33.4855 41.0784 33.064 41.8285 32.3139C42.5786 31.5638 43 30.5464 43 29.4856C43 28.4248 42.5786 27.4074 41.8285 26.6573C41.0784 25.9071 40.061 25.4857 39.0002 25.4857H28.3339C27.273 25.4857 26.2556 25.9071 25.5055 26.6573C24.7554 27.4074 24.334 28.4248 24.334 29.4856C24.334 30.5464 24.7554 31.5638 25.5055 32.3139C26.2556 33.064 27.273 33.4855 28.3339 33.4855Z"
                    fill="#FBF8FF"
                  />
                  <path
                    d="M28.3339 33.4855H39.0002C40.061 33.4855 41.0784 33.064 41.8285 32.3139C42.5786 31.5638 43 30.5464 43 29.4856C43 28.4248 42.5786 27.4074 41.8285 26.6573C41.0784 25.9071 40.061 25.4857 39.0002 25.4857H28.3339C27.273 25.4857 26.2556 25.9071 25.5055 26.6573C24.7554 27.4074 24.334 28.4248 24.334 29.4856C24.334 30.5464 24.7554 31.5638 25.5055 32.3139C26.2556 33.064 27.273 33.4855 28.3339 33.4855Z"
                    fill="#7732D0"
                  />
                  <path
                    d="M3 29.4856C3 30.5464 3.42141 31.5638 4.17153 32.3139C4.92166 33.064 5.93904 33.4855 6.99987 33.4855C8.0607 33.4855 9.07808 33.064 9.82821 32.3139C10.5783 31.5638 10.9997 30.5464 10.9997 29.4856V25.4857H6.99987C5.93904 25.4857 4.92166 25.9071 4.17153 26.6573C3.42141 27.4074 3 28.4248 3 29.4856Z"
                    fill="#FBF8FF"
                  />
                  <path
                    d="M3 29.4856C3 30.5464 3.42141 31.5638 4.17153 32.3139C4.92166 33.064 5.93904 33.4855 6.99987 33.4855C8.0607 33.4855 9.07808 33.064 9.82821 32.3139C10.5783 31.5638 10.9997 30.5464 10.9997 29.4856V25.4857H6.99987C5.93904 25.4857 4.92166 25.9071 4.17153 26.6573C3.42141 27.4074 3 28.4248 3 29.4856Z"
                    fill="#D4B2FF"
                  />
                  <path
                    d="M13.667 29.4856V40.1519C13.667 41.2127 14.0884 42.2301 14.8385 42.9802C15.5886 43.7304 16.606 44.1518 17.6669 44.1518C18.7277 44.1518 19.7451 43.7304 20.4952 42.9802C21.2453 42.2301 21.6667 41.2127 21.6667 40.1519V29.4856C21.6667 28.9603 21.5633 28.4402 21.3623 27.9549C21.1612 27.4696 20.8666 27.0287 20.4952 26.6573C20.1238 26.2858 19.6828 25.9912 19.1975 25.7902C18.7123 25.5892 18.1921 25.4857 17.6669 25.4857C16.606 25.4857 15.5886 25.9071 14.8385 26.6573C14.0884 27.4074 13.667 28.4248 13.667 29.4856Z"
                    fill="#FBF8FF"
                  />
                  <path
                    d="M13.667 29.4856V40.1519C13.667 41.2127 14.0884 42.2301 14.8385 42.9802C15.5886 43.7304 16.606 44.1518 17.6669 44.1518C18.7277 44.1518 19.7451 43.7304 20.4952 42.9802C21.2453 42.2301 21.6667 41.2127 21.6667 40.1519V29.4856C21.6667 28.9603 21.5633 28.4402 21.3623 27.9549C21.1612 27.4696 20.8666 27.0287 20.4952 26.6573C20.1238 26.2858 19.6828 25.9912 19.1975 25.7902C18.7123 25.5892 18.1921 25.4857 17.6669 25.4857C16.606 25.4857 15.5886 25.9071 14.8385 26.6573C14.0884 27.4074 13.667 28.4248 13.667 29.4856Z"
                    fill="#D4B2FF"
                  />
                </g>
              </svg>
            }
            title="6. Join our Slack community & Follow us on Twitter."
          />
        </div>
      </div>
    </section>
  );
}