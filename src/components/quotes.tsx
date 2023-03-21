import { PropsWithChildren, useState } from 'react';
import { fetchQuotes } from './application';
import { Quote } from './application';

type QuoteProps = {
  setQuotes: React.Dispatch<React.SetStateAction<Quote[]>>,
}

const Quotes = ({ children, setQuotes }: PropsWithChildren<QuoteProps>) => {
  const [quoteCount, setQuoteCount] = useState<number>(0);

  return (
    <section className="flex flex-col gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchQuotes(quoteCount).then(setQuotes);
        }}
      >
        <label htmlFor="number-of-quotes-to-load" className="block">
          Number of Quotes to Load
        </label>
        <div className="flex">
          <input
            id="number-of-quotes-to-load"
            className="w-full"
            type="number"
            min="0"
            max="25"
            value={quoteCount}
            onChange={(e) => setQuoteCount(e.target.valueAsNumber)}
          />
          <button type="submit">Load Quotes</button>
        </div>
      </form>
      <div className="grid grid-cols-2 gap-4">{children}</div>
    </section>
  );
};

export default Quotes;
