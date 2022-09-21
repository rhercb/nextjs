import fs from "fs/promises";
import path from "path";
import Link from "next/link";

function HomePage(props) {
    const { products } = props;
  return (
    <ul>
        {
            products.map(product => <li key={product.id}><Link href={`/${product.id}`}>{product.title}</Link></li>)
        }
    </ul>
  );
}

export async function getStaticProps(context) {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return {
        props: data,
        revalidate: 10, // For every incoming request it should be regenerated, if it is past 10 sec.
        // notFound: false, // Renders 404 page, ex, if data fetch didnt work
        // redirect: { destination: "/about" } // Allows to redirect user to a page, ex, if data fetch didnt work, redirect""
    }
}

export default HomePage;
