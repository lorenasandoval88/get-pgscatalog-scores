# get-pgscatalog-polygenic-scores
Retreives polygenic scores from the PGS Catalog..

Live at: https://lorenasandoval88.github.io/get-pgscatalog-polygenic-scores/

Try in the devconsole:

const sdk = await fetch("https://lorenasandoval88.github.io/get-pgscatalog-polygenic-scores/dist/sdk.mjs");


const data = await sdk.loadAllScores();

What sdk.loadScores() does:

Main function to get PGS Catalog meta data and summary, using browser storarge cache if available, otherwise fetching from the [PGS Catalog Rest API](https://www.pgscatalog.org/rest). 

[<img width="953" height="926" alt="image" src="https://github.com/user-attachments/assets/04775d6a-7d42-4607-b6ad-1b8239752cca" />](https://lorenasandoval88.github.io/get-pgscatalog-polygenic-scores/)

