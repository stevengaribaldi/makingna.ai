import React from 'react';
import { FlipWords } from './flip-words';

export function FlipWordsDemo() {
  const words = ['Create', 'cute', 'beautiful', 'modern'];

  return (
    <div className="flex h-[40rem] items-center justify-center px-4">
      <div className="mx-auto text-4xl font-normal text-neutral-600 dark:text-neutral-400">
        Build
        <FlipWords words={words} /> <br />
        websites with Aceternity UI
      </div>
    </div>
  );
}
