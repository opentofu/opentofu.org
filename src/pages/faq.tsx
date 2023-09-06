import React from "react";
import Layout from "@theme/Layout";
import Jumbotron from "../components/Jumbotron";
import TextContent from "../components/TextContent";
import Accordion from "../components/Accordion";
import AccordionItem from "../components/Accordion/Item";
import Button from "../components/Button";

const faqs = [
  {
    question: "Is OpenTF going to be a foundation?",
    answer:
      "We strongly prefer joining an existing reputable foundation over creating a new one. Stay tuned for additional details in the coming week.",
  },
  {
    question: "Can anyone pledge?",
    answer:
      "Under a well-known and widely-accepted license that companies can trus, that won’t suddenly change in the future, and isn’t subhect to the whims of a singe vendor. Under a well-known and widely-accepted license that companies can trus, that won’t suddenly change in the future, and isn’t subhect to the whims of a singe vendor.",
  },
  {
    question:
      "I'm a regular Terraform user, and I'm not competing with HashiCorp. Why should I care?",
    answer: `
      How do you know you're not competing with HashiCorp? 
      That's not meant to be a redundant or snarky question. The key issue with the BUSL is that the wording is intentionally vague. What does "competing" mean? What does "hosting or embedding" mean? Who decides?
      The answer to all these questions is that, in order to really know if you're a competitor, you have to reach out to HashiCorp. So whether your usage is valid is not controlled by the terms of the license, but is instead entirely at the whim of HashiCorp. They get to decide on a case-by-case basis who is and who isn't a competitor—and they can change their mind at any time. 
      That is a very shaky footing on which to build anything.
      At every company you ever work at in the future, before starting to use Terraform, the CTO will have to think about whether HashiCorp could possibly consider you a competitor, now or at any time in the future. The legal team at that company will have to wonder if they want to take the risk of allowing a BUSL license or if they should ban it due to all the uncertainty. Every developer at that company will have to wonder if they want to contribute back to Terraform, given there's no certainty they'll be able to use their own work at a future job. 
      In short, the BUSL is a poison pill for the entire Terraform community. 
    `,
  },
  {
    question: `Doesn't forking hurt the whole community? Why take such a brash action?`,
    answer: `
      Terraform was under the MPL license for ~9 years. This created an understanding—an implicit contract—that Terraform is open-source and you can use it for just about anything you want. Based on that understanding, tens of thousands of developers adopted the tool and contributed back to it. HashiCorp even had all contributors sign a CLA which explicitly said ([link to the CLA in the Internet Archive as HashiCorp](https://web.archive.org/web/20230610041432/https://www.hashicorp.com/cla) has of course removed this wording):

      > HashiCorp is committed to having a true Free and Open Source Software (“FOSS”) license for our non-commercial software. A CLA enables HashiCorp to safely commercialize our products while keeping a standard FOSS license with all the rights that the license grants to users: the ability to use the project in their own projects or businesses, to republish modified source, or to fork the project completely. 

      The move to BUSL—which is *not* a free and open source license—broke the implicit contract. That was the brash action!

      Terraform would've never gotten the adoption it did, or all the contributions from the community had it not been open-source. Most of us would've never agreed to the CLA to contribute to the project if it was BUSL licensed. Taking all those contributions and all that community trust, and then changing to the BUSL license is a bait and switch.

      The OpenTF manifesto is about *undoing* those changes! It's about going back to the way Terraform was for the first ~9 years: as a truly open-source tool that we can all trust, contribute to, and use as we wish. 
    `,
  },
  {
    question: `HashiCorp deserves to earn a return on their investment. What's wrong with that?`,
    answer: `
      When any company releases their tool as open source, the contract with the community is always the same: Anyone can use this code, but we the creators hold a privileged position of being at the epicenter of the ecosystem. Vendors then compete to offer the best solution, and the creators enjoy a unique competitive advantage.
      We believe that HashiCorp should earn a return by leveraging its unique position in the Terraform ecosystem to build a better product, not by outright preventing others from competing in the first place.
    `,
  },
];

export default function Manifesto() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const [showAll, setShowAll] = React.useState(false);

  const truncatedFaqs = showAll ? faqs : faqs.slice(0, 3);

  return (
    <Layout wrapperClassName="light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Jumbotron>
        <h1 className="text-7xl font-bold text-white text-center">
          Frequently Asked Questions
        </h1>
      </Jumbotron>
      <div className="bg-white flex-1 text-gray-600">
        <div className="container mx-auto pt-6 pb-10">
          <Accordion>
            {truncatedFaqs.map((faq) => (
              <AccordionItem summary={faq.question} key={faq.question}>
                {faq.answer}
              </AccordionItem>
            ))}
          </Accordion>
          <div className="flex justify-center mt-6">
            <Button
              onClick={() => setShowAll((v) => !v)}
              variant="secondaryOnLight"
            >
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
