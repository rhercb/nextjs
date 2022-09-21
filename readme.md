## Benefits

Server-side rendering SSR - preparing content of a page on server instead of client.
SEO optimizedcd
Great initial loads
Fetch data on server and render finished pages

File based routing
Define pages by files and folders
Less code, less work, highly understandable

Fullstack capabilities 
Easily add backend code - node.js
Storing data, getting data, auth, etc.

## Structure

Pages - Where file based routing is set up

## Routing

Create rect component files and let NextJs infer the routes from that folder structure. /pages folder

/pages => index.js (Main starting page, "/") / about.js (About page, "/about")
/pages => /products => index.js (Products page, "/products") / [id].js (One products, "/products/id")

[...slug].js (Catch all) => We can render same page with mani props of url, example /blog/2020/12/blog1 or /blog/2020/12 will render same page

## Pre-render

Return pre-rendered page
Next.js pre-renders HTML content with all data.
Sends back all JS code that belongs - hydrates page.
It works on initial load. Then we have regular single page app.
Two forms of pre-rendering
    Static generation
    Server side rendering

#### Static generation
Pre-generate page during build time - all html and data is prepared in advance.
Once deployed they can be cached
Only from inside component files in pages folder, we can get async function getStaticProps.
We can run code that would be run on server side
This code will not end up on client side
NextJS pre-renders by default

getStaticProps - always returns object with props key. Don't have access to incoming request

Next knows what is used in client side and on staticProps.

dynamic pages [pid] don't just need data, you also need to know which pid value will be used

SSR - do need to prerender page for every incoming request, or need access to concrete request object, e.g. for cookies
NextJS allows you to run real server-side code as well
getServerSideProps - cant be used with getStaticProps

##### Client side data fetch

Some data doesnt need prerendering:

- Data that changes with high frequency. e.g. stock data
- highly user-specific data. e.g. last orders in an online shop
- Partial data e.g. data thats only used on a part of a page

useSWR - react hook developed by next.js team.
Hook that under the hood will sent http request, but gives nice built in features. - retries, caching, etc
SWR - stale while revalidate;


#### Incremental static generation
Pre generate page -> Re-Generate it on every request, at most every x seconds.

Serve old page if it is not that old
Generate, store and serve "New" page otherwise

#### _document.js
Has to be added in pages folder directly.

Allows to customize entire HTML document.

Head - is not as next/head

IS i want to configure general document, e.g. if i want to ad lang attribute

After changes need to restart server

#### Images

Next js generates versions for each browser optimizing for its use
For each device that access page
And creates cache for those images

width/height needed for image

#### API routes

Routes, urls to send requests and feedbacks based on actions

Dont exist to be entered in browser

In pages subfolder - api, special folder recognized by nextjs. PAges in this folder are treated special way
Code in here is server side, it will not be exposed on client side

Dont use fetch() is ssr or static props

#### Deploy

Next build requires node server for it to run. Nodejs server ir required for ssr and api routes

Next export - 100% static app, only html, css and js, no ssr, no nodejs server required.

- add metadata, optimize code, etc
- use env for sensitive information
- Do a test
- Delpoy