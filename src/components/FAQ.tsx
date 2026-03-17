import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";

const faqs = [
  {
    question: "How does yucify connect to my Meta ad accounts?",
    answer: "yucify uses secure OAuth authentication to connect directly to your Meta Business Manager. Simply authorize access through Facebook's official API, and we'll start pulling your campaign data instantly. Your login credentials are never stored, and you can revoke access at any time."
  },
  {
    question: "What metrics and data does yucify track?",
    answer: "We track all key Meta advertising metrics including ROAS, CPA, CTR, impressions, reach, conversions, frequency, installs and more. Plus, we provide AI-powered insights on creative performance, audience behavior, and optimization opportunities across both Facebook and Instagram campaigns."
  },
  {
    question: "How quickly will I see results?",
    answer: "Most users see actionable insights within the first few minutes of connecting their ad accounts. The app learns from your historical data and start providing optimization recommendations immediately. Significant ROAS improvements typically occur within a week of implementing our suggestions."
  },
  {
    question: "Is my advertising data secure?",
    answer: "Yes. Your ad account data is accessed securely through the official API provided by Meta for Meta Ads Manager integrations. We only read campaign performance data and never modify or run ads on your behalf. You can also request to delete data at any time."
  },
  {
    question: "Can I manage multiple ad accounts?",
    answer: "Yes! In Beta we support multiple ad accounts. In future the Starter plan includes 1 account, Professional includes 5 accounts, and Agency plans offer unlimited ad accounts with white-label reporting options for agencies managing client campaigns."
  },
  {
    question: "Do I need to cancel my existing Meta Ads Manager?",
    answer: "No, yucify works alongside Meta Ads Manager. We pull data from your campaigns and provide enhanced analytics and AI-powered insights, but you continue to create and manage your actual campaigns through Meta's platform. Think of us as your intelligent analytics layer on top of Meta."
  },
  {
    question: "What kind of support do you offer?",
    answer: "Our Beta users get all the support required to use the tool for launching their successful campaigns."
  },
  {
    question: "Can I use this tool for competitor research?",
    answer: "Yes. The app helps you understand patterns across ads and campaigns, which can also provide insights, indepth analysis of your competitor's Meta Ads campaign."
  },
  {
    question: "Can this help me discover winning ad patterns?",
    answer: "Yes. By analyzing campaign performance and funnel data, the dashboard can help reveal patterns across your ads and campaigns such as which creatives, hooks, or campaign structures tend to perform best."
  }
];

interface FAQProps {
  onOpenModal: () => void;
}

export function FAQ({ onOpenModal }: FAQProps) {
  return (
    <section id="faq" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about yucify.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left text-lg cursor-pointer hover:no-underline" style={{ cursor: "pointer" }}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ready to get started?</p>
          <Button
            size="lg"
            className="text-lg px-8 py-6 cursor-pointer"
            style={{ cursor: "pointer" }}
            onClick={onOpenModal}
          >
            <Zap className="w-5 h-5 mr-2" />
            Analyze My Ads
          </Button>
        </div>
      </div>
    </section>
  );
}