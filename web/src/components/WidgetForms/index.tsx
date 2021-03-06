import { useState } from "react";

import bugImageUrl from "../../assets/images/bug.svg";
import ideaImageUrl from "../../assets/images/idea.svg";
import thoughtImageUrl from "../../assets/images/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
    placeholder:"Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
    placeholder:"Teve uma ideia de melhoria ou de nova funcionalidade? Conta pra gente!"
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
    placeholder:'Queremos te ouvir. O que você gostaria de nos dizer? '
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="dark:bg-zinc-900 bg-white p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSucessStep onFeedBackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : ( 
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedBackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-xs text-zinc-500 dark:text-neutral-400">
        Feito com ♥ por{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/PedrohvFernandes/nlw-return-inpulse-web"
          target="_blank"
          rel="nofollow noreferrer noopener external"
        >
          Pedro Henrique
        </a>
      </footer>
    </div>
  );
}
