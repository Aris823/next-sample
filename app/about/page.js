export default function Home({ params, searchParams }) {
    console.debug({params})
    console.debug({searchParams})
    const name = searchParams['name'];   
    return (
      <h1>Hello {name}</h1>
    );
  }

  