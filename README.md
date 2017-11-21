## Used techs
- Rect + Redux
- Plain css
- Material UI

## Browsers
I havn't enabled polifills(stage-1) for the Babel - don't think it does make sense without the string necessity
Tested and expected to work in 
- IE 11 +
- Chome 62+

## Install
- You need to have installed nodejs https://nodejs.org/en/download/ on your machine

## How to run
 - clone the repository 
 - run `npm run init`
 - run `npm run start`

## Issues
Now it uses `https://micro-server-yxyocybxvl.now.sh/api/movies`
because of `awa5lhb067.execute-api.eu-central-1.amazonaws.com` hasn't proper CORS headers

## Further todo
 - Write jest tests
 - Describe models with propTypes
 - Split actions
 - Include stage-1 to the babel build
 - Define isFetching state for the loading the Films state
 - Cache already loaded films
 - Make panel for the home page with filters
