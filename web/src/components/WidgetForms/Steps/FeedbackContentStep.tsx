import { FormEvent, useState } from "react";

import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
import { api } from "../../../libs/api";
import { Loading } from "../../Loading";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedBackRestartRequested: () => void;

  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedBackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const [comment, setComment] = useState("");

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  async function handleSubmitFeedback(event: FormEvent){
    event.preventDefault();

    setIsSendingFeedback(true)

    // O console.log era so pra avisar sobre o que estava sendo enviado
    // console.log({
    //   screenshot,
    //   comment
    // })

    // Na rota feedbacks, enviando para o banco
    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot
    })

    // Não precisaria setar false, porque ele ja redireciona o user para success
    setIsSendingFeedback(false)
    onFeedbackSent()

  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-800 hover:text-zinc-500 dark:text-zinc-400"
          onClick={onFeedBackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-500 border-zinc-300 dark:text-zinc-100 dark:border-zinc-600 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:outline-none focus:ring-brand-500 focus:ring-1 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder={feedbackTypeInfo.placeholder}
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md text-zinc-100 border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled = {comment.length === 0 || isSendingFeedback}
          >
            {isSendingFeedback ? <Loading/> : 'Enviar Feedback'}
          </button>
        </footer>
      </form>
    </>
  );
}
