import Head from "next/head";
import { NextStudio } from "next-sanity/studio";
import config from "../../sanity.config";
import { StudioProvider, StudioLayout } from "sanity";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle(({ theme }) => ({
  html: { backgroundColor: theme.sanity.color.base.bg },
}));

export default function StudioPage() {
  return (
    <>
      <Head>
        <title>Sanity Studio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextStudio config={config}>
        <StudioProvider config={config}>
          <GlobalStyle />
          <StudioLayout />
        </StudioProvider>
      </NextStudio>
    </>
  );
}
