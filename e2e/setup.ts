/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment */
import { device } from 'detox';
import { setDemoMode } from './helpers';


beforeAll(async () => {
  const language = 'pt';
  const locale = 'pt-BR';

	await setDemoMode();

  await device.launchApp({
    languageAndLocale: {
      language,
      locale,
    },
    newInstance: true,
  });
});
